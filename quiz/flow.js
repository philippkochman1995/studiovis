(function (root) {
  const questions = [
    { id: 'website', title: 'Hast du bereits eine Website?', options: [['yes', 'Ja', '🌐'], ['no', 'Nein', '➖']] },
    { id: 'goal', title: 'Was möchtest du mit deiner Website hauptsächlich erreichen?', options: [
      ['customers', 'Mehr Kund:innen gewinnen', '🤝'], ['impression', 'Einen professionelleren Eindruck machen', '✨'],
      ['inquiries', 'Mehr Anfragen aus bestehenden Besuchen gewinnen', '💬'], ['modernize', 'Die Website modernisieren oder verbessern', '🛠️']
    ] },
    { id: 'growth', title: 'Wie stark möchtest du deine Kundenzahl steigern?', options: [
      ['10', 'Um 10 %', '📈'], ['20', 'Um 20 %', '📈'], ['50', 'Um 50 %', '📈'], ['over-50', 'Um mehr als 50 %', '🚀']
    ] },
    { id: 'obstacle', title: 'Was trifft aktuell am ehesten auf deine Situation zu?', options: [
      ['traffic', 'Meine Website bekommt zu wenige Besucher:innen.', '🔎'],
      ['website', 'Meine Website bekommt Besucher:innen, aber kaum Anfragen.', '💬'],
      ['offer', 'Ich bekomme Anfragen, aber daraus werden zu wenige Kund:innen.', '🤝'],
      ['data', 'Ich weiß nicht genau, wo das Problem liegt.', '❔']
    ] },
    { id: 'traffic_visitors', title: 'Wie viele Besucher:innen bekommt deine Website ungefähr pro Monat?', options: [
      ['under-100', 'Unter 100', '👤'], ['100-500', '100–499', '👥'], ['500-2000', '500–1.999', '👥'],
      ['over-2000', '2.000 oder mehr', '👥'], ['unknown', 'Weiß ich nicht', '❔']
    ] },
    { id: 'traffic_source', title: 'Wie kommen die meisten Menschen auf deine Website?', options: [
      ['google', 'Über Google', '🔎'], ['social', 'Über Social Media', '📱'], ['ads', 'Über Werbung', '📣'],
      ['referrals', 'Über Empfehlungen oder direkte Links', '🤝'], ['unknown', 'Weiß ich nicht', '❔']
    ] },
    { id: 'traffic_inquiries', title: 'Wie viele Anfragen erhältst du ungefähr pro Monat über deine Website?', options: [
      ['none', 'Keine', '0️⃣'], ['1-3', '1–3', '💬'], ['4-10', '4–10', '💬'],
      ['over-10', 'Mehr als 10', '💬'], ['unknown', 'Weiß ich nicht', '❔']
    ] },
    { id: 'website_inquiries', title: 'Wie viele Anfragen erhältst du ungefähr pro 100 Website-Besucher:innen?', options: [
      ['none', 'Keine', '0️⃣'], ['1-2', '1–2', '💬'], ['3-5', '3–5', '💬'],
      ['over-5', 'Mehr als 5', '💬'], ['unknown', 'Weiß ich nicht', '❔']
    ] },
    { id: 'website_barrier', title: 'Was könnte Besucher:innen am ehesten davon abhalten, anzufragen?', options: [
      ['unclear', 'Mein Angebot ist nicht sofort verständlich.', '🧩'],
      ['trust', 'Die Website wirkt nicht professionell oder vertrauenswürdig.', '✨'],
      ['contact', 'Der nächste Schritt ist nicht klar.', '📩'],
      ['technical', 'Die Website lädt langsam oder funktioniert nicht richtig.', '⚙️'],
      ['unknown', 'Weiß ich nicht', '❔']
    ] },
    { id: 'website_clarity', title: 'Wird auf deiner Startseite sofort deutlich, was du anbietest, für wen und wie man dich kontaktiert?', options: [
      ['yes', 'Ja, alles ist klar', '✅'], ['partly', 'Nur teilweise', '🟡'],
      ['no', 'Nein', '❌'], ['unknown', 'Weiß ich nicht', '❔']
    ] },
    { id: 'offer_reason', title: 'Warum werden Interessent:innen häufig nicht zu Kund:innen?', options: [
      ['price', 'Mein Preis ist ihnen zu hoch.', '💶'], ['competition', 'Sie entscheiden sich für die Konkurrenz.', '↗️'],
      ['value', 'Sie verstehen den Mehrwert nicht.', '💡'], ['followup', 'Sie melden sich nach dem Erstgespräch nicht mehr.', '📞'],
      ['unknown', 'Weiß ich nicht', '❔']
    ] },
    { id: 'offer_close', title: 'Wie häufig werden qualifizierte Anfragen zu zahlenden Kund:innen?', options: [
      ['under-10', 'Unter 10 %', '📉'], ['10-25', '10–25 %', '📊'],
      ['26-50', '26–50 %', '📊'], ['over-50', 'Über 50 %', '📈'], ['unknown', 'Weiß ich nicht', '❔']
    ] },
    { id: 'offer_difference', title: 'Was unterscheidet dein Angebot von vergleichbaren Anbietern?', options: [
      ['clear', 'Ein klarer, relevanter Vorteil', '💡'], ['price', 'Hauptsächlich der Preis', '💶'],
      ['little', 'Eigentlich wenig', '➖'], ['unknown', 'Weiß ich nicht', '❔']
    ] },
    { id: 'data_known', title: 'Welche Zahlen kennst du ungefähr?', options: [
      ['both', 'Website-Besucher und Anfragen', '📊'], ['visitors', 'Nur Website-Besucher', '👥'],
      ['inquiries', 'Nur Anfragen', '💬'], ['none', 'Keine davon', '❔']
    ] },
    { id: 'data_signal', title: 'Welche Beobachtung trifft am ehesten zu?', options: [
      ['traffic', 'Wir erreichen insgesamt zu wenige potenzielle Kund:innen.', '🔎'],
      ['website', 'Es gibt Website-Besucher:innen, aber kaum Anfragen.', '💬'],
      ['offer', 'Wir bekommen Anfragen, aber wenige Abschlüsse.', '🤝'],
      ['unknown', 'Weiß ich nicht', '❔']
    ] },
    { id: 'site_fit', title: 'Wie gut passt deine aktuelle Website noch zu deinem Unternehmen?', options: [
      ['good', 'Sehr gut – sie passt zu unserem Angebot und unserem Auftritt.', '✅'],
      ['partial', 'Teilweise – einige Bereiche müssten verbessert werden.', '🛠️'],
      ['poor', 'Kaum – sie wirkt veraltet oder passt nicht mehr zu unserem Unternehmen.', '⏳'],
      ['unknown', 'Weiß ich nicht', '❔']
    ] },
    { id: 'site_flex', title: 'Wie einfach lässt sich deine Website verändern?', options: [
      ['easy', 'Einfach – Texte, Design und Seiten können angepasst werden.', '✅'],
      ['some', 'Mit etwas Aufwand sind größere Änderungen möglich.', '🛠️'],
      ['hard', 'Sehr schwierig – größere Änderungen sind teuer oder technisch eingeschränkt.', '⛔'],
      ['unknown', 'Weiß ich nicht', '❔']
    ] },
    { id: 'sources', title: 'Wie gewinnst du bisher Kund:innen?', multiple: true, options: [
      ['referrals', 'Empfehlungen und Netzwerk', '🤝'], ['social', 'Social Media', '📱'],
      ['google', 'Google oder Online-Verzeichnisse', '🔎'], ['ads', 'Bezahlte Werbung', '📣'], ['outreach', 'Direkte Kundenansprache', '💬'],
      ['events', 'Veranstaltungen oder persönliche Treffen', '🗓️'], ['other', 'Anders', '➕']
    ] },
    { id: 'monthly_customers', title: 'Wie viele neue Kund:innen gewinnst du durchschnittlich pro Monat?', options: [
      ['irregular', 'Fast keine oder sehr unregelmäßig', '0️⃣'], ['1-3', '1–3', '🤝'],
      ['4-10', '4–10', '🤝'], ['over-10', 'Mehr als 10', '🤝']
    ] },
    { id: 'no_site_goal', title: 'Was möchtest du mit einer eigenen Website erreichen?', options: [
      ['customers', 'Zusätzliche Kund:innen gewinnen', '🤝'],
      ['trust', 'Professioneller und vertrauenswürdiger auftreten', '✨'],
      ['explain', 'Mein Angebot besser erklären', '💡'],
      ['support', 'Meine bestehenden Marketingmaßnahmen unterstützen', '📣']
    ] },
    { id: 'no_site_satisfaction', title: 'Wie zufrieden bist du mit deiner bisherigen Kundengewinnung?', options: [
      ['very', 'Sehr zufrieden', '✅'], ['partly', 'Teilweise zufrieden', '🟡'],
      ['unhappy', 'Unzufrieden', '❌'], ['unknown', 'Kann ich schwer einschätzen', '❔']
    ] }
  ];

  const byId = Object.fromEntries(questions.map(question => [question.id, question]));
  const branchQuestions = {
    traffic: ['traffic_visitors', 'traffic_source', 'traffic_inquiries'],
    website: ['website_inquiries', 'website_barrier', 'website_clarity'],
    offer: ['offer_reason', 'offer_close', 'offer_difference'],
    data: ['data_known', 'data_signal']
  };

  function nextId(id, answers) {
    if (id === 'website') return answers.website === 'yes' ? 'goal' : answers.website === 'no' ? 'sources' : null;
    if (id === 'goal') return 'growth';
    if (id === 'growth') return 'obstacle';
    if (id === 'obstacle') return branchQuestions[answers.obstacle]?.[0] || null;
    if (id === 'sources') return 'monthly_customers';
    if (id === 'monthly_customers') return 'no_site_goal';
    if (id === 'no_site_goal') return 'no_site_satisfaction';
    if (id === 'no_site_satisfaction') return 'result';
    if (id === 'site_fit') return 'site_flex';
    if (id === 'site_flex') return 'result';
    for (const path of Object.values(branchQuestions)) {
      const index = path.indexOf(id);
      if (index !== -1) return path[index + 1] || 'site_fit';
    }
    return null;
  }

  function pathFor(answers) {
    if (answers.website === 'no') return ['website', 'sources', 'monthly_customers', 'no_site_goal', 'no_site_satisfaction'];
    return ['website', 'goal', 'growth', 'obstacle', ...(branchQuestions[answers.obstacle] || []), 'site_fit', 'site_flex'];
  }

  function totalQuestions(answers) {
    return pathFor(answers).length;
  }

  function progressFor(id, answers) {
    if (id === 'result') return { value: 100, completed: 3, active: -1, label: 'Dein Ergebnis' };
    const path = pathFor(answers);
    const index = Math.max(0, path.indexOf(id));
    const phase = answers.website === 'no' ? Math.min(Math.floor(index / 2), 2) : index < 3 ? 0 : id === 'site_fit' || id === 'site_flex' ? 2 : 1;
    const labels = ['Ausgangssituation', 'Engpass', 'Website-Zustand'];
    const value = answers.website === 'no'
      ? index / path.length * 100
      : index < 4 ? [0, 10, 20, 30][index]
        : id === 'site_fit' ? 75 : id === 'site_flex' ? 85
          : 30 + (index - 3) / ((path.length - 6) + 1) * 40;
    return { value, completed: phase, active: phase, label: labels[phase] };
  }

  const api = { questions, byId, nextId, totalQuestions, progressFor };
  root.QuizFlow = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
