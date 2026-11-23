const test = require('node:test');
const assert = require('node:assert/strict');
const { diagnose, siteAssessment } = require('./diagnosis.js');
const { nextId, totalQuestions, progressFor, questions, byId } = require('./flow.js');

const base = { website: 'yes', goal: 'customers', growth: '20', site_fit: 'partial', site_flex: 'easy' };
const traffic = { ...base, obstacle: 'traffic', traffic_visitors: 'under-100', traffic_source: 'google', traffic_inquiries: '4-10' };
const website = { ...base, obstacle: 'website', website_inquiries: '1-2', website_barrier: 'contact', website_clarity: 'partly' };
const offer = { ...base, obstacle: 'offer', offer_reason: 'value', offer_close: 'under-10', offer_difference: 'little' };
const data = { ...base, obstacle: 'data', data_known: 'none', data_signal: 'unknown' };
const noWebsite = {
  website: 'no', sources: ['referrals', 'social'], monthly_customers: '1-3',
  no_site_goal: 'trust', no_site_satisfaction: 'partly'
};
const kinds = new Set(['traffic', 'website', 'offer', 'measurement', 'potential']);

function path(answers) {
  const ids = ['website'];
  while (ids.at(-1) !== 'result') {
    const next = nextId(ids.at(-1), answers);
    assert.ok(next, `No next step after ${ids.at(-1)}`);
    ids.push(next);
    assert.ok(ids.length < 12, 'The flow must terminate');
  }
  return ids;
}

test('people without a website answer four follow-up questions and receive Website-Potenzial', () => {
  assert.deepEqual(path(noWebsite), [
    'website', 'sources', 'monthly_customers', 'no_site_goal', 'no_site_satisfaction', 'result'
  ]);
  assert.equal(totalQuestions(noWebsite), 5);
  const result = diagnose(noWebsite);
  assert.equal(result.kind, 'potential');
  assert.equal(result.title, 'Website-Potenzial');
  assert.match(result.context, /vertrauenswürdiger auftreten/);
  assert.match(result.explanation, /Empfehlungen und Netzwerk, Social Media/);
  assert.equal(result.siteAssessment, null);
  assert.equal(result.relaunch, null);
  assert.equal(result.offer.name, 'Website-Starter-Paket');
});

test('every website branch continues through both website-condition questions', () => {
  const branches = [
    [traffic, ['traffic_visitors', 'traffic_source', 'traffic_inquiries']],
    [website, ['website_inquiries', 'website_barrier', 'website_clarity']],
    [offer, ['offer_reason', 'offer_close', 'offer_difference']],
    [data, ['data_known', 'data_signal']]
  ];
  for (const [answers, branch] of branches) {
    assert.deepEqual(path(answers), [
      'website', 'goal', 'growth', 'obstacle', ...branch, 'site_fit', 'site_flex', 'result'
    ]);
    assert.equal(totalQuestions(answers), branch.length + 6);
  }
  assert.ok(questions.every(question => question.options.every(option => option.length === 3)));
});

test('progress rises through all paths and never reaches 100 before the result', () => {
  for (const answers of [traffic, website, offer, data, noWebsite]) {
    const values = path(answers).map(id => progressFor(id, answers).value);
    assert.ok(values.every((value, index) => index === 0 || value >= values[index - 1]));
    assert.equal(values.at(-1), 100);
    assert.ok(values.at(-2) < 100);
  }
});

test('website state is assessed independently of the main diagnosis', () => {
  const cases = [
    ['good', 'easy', 'keep'], ['good', 'some', 'keep'],
    ['partial', 'easy', 'optimize'], ['partial', 'some', 'optimize'],
    ['poor', 'hard', 'relaunch'], ['poor', 'easy', 'compare'], ['poor', 'some', 'compare'],
    ['good', 'hard', 'technical'], ['partial', 'hard', 'technical'],
    ['unknown', 'easy', 'review'], ['good', 'unknown', 'review']
  ];
  for (const [fit, flex, key] of cases) {
    assert.equal(siteAssessment({ website: 'yes', site_fit: fit, site_flex: flex }).key, key);
  }
  const main = diagnose({ ...traffic, site_fit: 'poor', site_flex: 'hard' });
  assert.equal(main.kind, 'traffic');
  assert.equal(main.siteAssessment.key, 'relaunch');
  assert.equal(main.relaunch.offer.name, 'Website-Relaunch-Check');
  assert.equal(main.relaunch.steps.length, 3);
  assert.equal(diagnose(traffic).relaunch, null);
  assert.equal(diagnose({ ...traffic, site_fit: 'poor', site_flex: 'easy' }).relaunch.offer.name, 'Website-Relaunch-Check');
});

test('each result has exactly three free steps and the corresponding offer', () => {
  const expected = [
    [traffic, 'traffic', 'Sichtbarkeits-Sprint'],
    [website, 'website', 'Conversion-Sprint'],
    [offer, 'offer', 'Angebots-Klarheits-Sprint'],
    [data, 'measurement', 'Tracking-Setup'],
    [noWebsite, 'potential', 'Website-Starter-Paket']
  ];
  for (const [answers, kind, offerName] of expected) {
    const result = diagnose(answers);
    assert.equal(result.kind, kind);
    assert.equal(result.steps.length, 3);
    assert.equal(result.offer.name, offerName);
    assert.ok(result.offer.description);
  }
});

test('observable visit and inquiry data can override a reported traffic problem', () => {
  assert.equal(diagnose(traffic).kind, 'traffic');
  const overridden = diagnose({ ...traffic, traffic_visitors: 'over-2000', traffic_inquiries: 'none' });
  assert.equal(overridden.kind, 'website');
  assert.equal(overridden.confidence, 'Verdacht');
  assert.equal(diagnose({ ...traffic, traffic_visitors: 'unknown' }).kind, 'traffic');
});

test('the unclear branch gives a tentative specific diagnosis when a signal is chosen', () => {
  assert.equal(diagnose(data).kind, 'measurement');
  for (const signal of ['traffic', 'website', 'offer']) {
    const result = diagnose({ ...data, data_signal: signal });
    assert.equal(result.kind, signal);
    assert.equal(result.confidence, 'Verdacht');
    assert.match(result.explanation, /keine gesicherte Diagnose/);
  }
});

test('repeated unknown answers in a branch lead to measurement; one unknown does not', () => {
  const branches = {
    traffic: ['traffic_visitors', 'traffic_source', 'traffic_inquiries'],
    website: ['website_inquiries', 'website_barrier', 'website_clarity'],
    offer: ['offer_reason', 'offer_close', 'offer_difference']
  };
  for (const [obstacle, ids] of Object.entries(branches)) {
    const [a, b, c] = ids.map(id => byId[id].options.map(option => option[0]));
    for (const x of a) for (const y of b) for (const z of c) {
      const answers = { ...base, obstacle, [ids[0]]: x, [ids[1]]: y, [ids[2]]: z };
      const result = diagnose(answers);
      const unknowns = [x, y, z].filter(value => value === 'unknown').length;
      assert.ok(kinds.has(result.kind));
      assert.equal(result.kind === 'measurement', unknowns >= 2, JSON.stringify(answers));
    }
  }
});
