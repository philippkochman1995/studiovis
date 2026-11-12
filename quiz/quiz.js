(function () {
  const { byId, nextId, progressFor } = window.QuizFlow;
  const { diagnose } = window.QuizDiagnosis;
  const answers = {};
  let currentId = 'website';
  const content = document.getElementById('quiz-content');
  const progress = document.getElementById('quiz-progress');
  const progressTop = document.querySelector('.quiz-top');
  const progressFill = document.getElementById('quiz-progress-fill');
  const chapter = document.getElementById('quiz-chapter');
  const markers = [...progress.querySelectorAll('.quiz-milestones span')];
  const progressLabels = [...document.querySelectorAll('.quiz-progress-labels span')];
  const nextButton = document.getElementById('quiz-next');

  function element(tag, className, text) {
    const item = document.createElement(tag);
    if (className) item.className = className;
    if (text) item.textContent = text;
    return item;
  }

  function setProgress(id) {
    const state = progressFor(id, answers);
    const labels = answers.website === 'no'
      ? ['Ausgangslage', 'Kundengewinnung', 'Website-Ziel']
      : ['Ausgangslage', 'Engpass', 'Website-Zustand'];
    progressLabels.forEach((label, index) => { label.textContent = labels[index]; });
    chapter.textContent = state.label;
    progress.setAttribute('aria-valuenow', String(Math.round(state.value)));
    progress.setAttribute('aria-valuetext', id === 'result' ? 'Auswertung erreicht' : state.label);
    progressFill.style.width = `${state.value}%`;
    markers.forEach((marker, index) => {
      marker.className = index < state.completed ? 'is-complete' : index === state.active ? 'is-active' : '';
      marker.textContent = index < state.completed ? '✓' : '';
    });
  }

  function advance() {
    const question = byId[currentId];
    if (question) {
      const answer = answers[currentId];
      if (!answer || (Array.isArray(answer) && answer.length === 0)) return;
    }
    const next = nextId(currentId, answers);
    if (!next) return;
    currentId = next;
    render(true);
  }

  function select(question, value) {
    if (question.multiple) {
      const selected = new Set(answers[question.id] || []);
      if (selected.has(value)) selected.delete(value);
      else selected.add(value);
      answers[question.id] = [...selected];
      for (const button of content.querySelectorAll('.quiz-option')) {
        button.setAttribute('aria-pressed', String(selected.has(button.dataset.value)));
      }
      nextButton.disabled = selected.size === 0;
      return;
    }
    answers[question.id] = value;
    advance();
  }

  function renderQuestion(question) {
    const heading = element('h1', 'quiz-question', question.title);
    heading.tabIndex = -1;
    const options = element('div', 'quiz-options');
    for (const [value, label, emoji] of question.options) {
      const button = element('button', 'quiz-option');
      const icon = element('span', 'quiz-option-icon', emoji);
      icon.setAttribute('aria-hidden', 'true');
      button.append(icon, element('span', 'quiz-option-label', label));
      button.type = 'button';
      button.dataset.value = value;
      if (question.multiple) button.setAttribute('aria-pressed', String((answers[question.id] || []).includes(value)));
      button.addEventListener('click', () => select(question, value));
      options.append(button);
    }
    content.append(heading, options);
    nextButton.hidden = !question.multiple;
    nextButton.disabled = question.multiple && !(answers[question.id] || []).length;
    return heading;
  }

  function renderResult() {
    const diagnosis = diagnose(answers);
    const wrap = element('div', 'quiz-result');
    wrap.append(element('p', 'result-kicker', 'Dein Check ist abgeschlossen'));
    const heading = element('h1', 'quiz-question', diagnosis.title);
    heading.tabIndex = -1;
    wrap.append(heading);
    wrap.append(element('p', 'result-confidence', `Vorläufige Einschätzung · ${diagnosis.confidence}`));
    if (diagnosis.context) wrap.append(element('p', 'result-context', diagnosis.context));
    wrap.append(element('p', 'result-lead', diagnosis.explanation));
    const steps = element('ol');
    for (const step of diagnosis.steps) steps.append(element('li', '', step));
    wrap.append(element('h2', '', 'Deine 3 kostenlosen Schritte'), steps);

    if (diagnosis.siteAssessment) {
      const assessment = element('section', 'result-panel');
      assessment.append(element('h2', '', 'Einschätzung deiner Website'));
      assessment.append(element('p', '', diagnosis.siteAssessment.recommendation));
      wrap.append(assessment);
    }

    const offer = element('section', 'result-panel result-offer');
    offer.append(element('h2', '', 'Passendes Angebot'));
    offer.append(element('strong', 'result-offer-name', diagnosis.offer.name));
    offer.append(element('p', '', diagnosis.offer.description));
    wrap.append(offer);

    if (diagnosis.relaunch) {
      const relaunch = element('section', 'result-panel result-relaunch');
      relaunch.append(element('h2', '', diagnosis.relaunch.title));
      relaunch.append(element('p', '', diagnosis.relaunch.explanation));
      const relaunchSteps = element('ol');
      for (const step of diagnosis.relaunch.steps) relaunchSteps.append(element('li', '', step));
      relaunch.append(relaunchSteps);
      relaunch.append(element('strong', 'result-offer-name', diagnosis.relaunch.offer.name));
      relaunch.append(element('p', '', diagnosis.relaunch.offer.description));
      wrap.append(relaunch);
    }

    const lead = element('section', 'result-lead-form');
    lead.append(element('h2', '', 'Persönliche Website-Einschätzung anfragen'));
    lead.append(element('p', '', 'Du möchtest einen individuellen Maßnahmenplan oder Hilfe bei der Umsetzung? Sende uns freiwillig deine Kontaktdaten und, falls vorhanden, deine Website-Adresse.'));
    const form = element('form', 'result-form');
    const fields = [
      ['Website-URL (optional)', 'url', 'url', 'https://'],
      ['E-Mail-Adresse (optional)', 'email', 'email', 'name@beispiel.at'],
      ['Name (optional)', 'name', 'text', 'Dein Name']
    ];
    const inputs = {};
    for (const [labelText, name, type, placeholder] of fields) {
      const label = element('label', 'result-field');
      label.append(element('span', '', labelText));
      const input = element('input');
      input.name = name;
      input.type = type;
      input.placeholder = placeholder;
      label.append(input);
      form.append(label);
      inputs[name] = input;
    }
    const submit = element('button', 'result-cta', 'Einschätzung per E-Mail anfragen →');
    submit.type = 'submit';
    form.append(submit);
    form.addEventListener('submit', event => {
      event.preventDefault();
      const body = [
        'Hallo Studio Vis,',
        '',
        'ich möchte eine persönliche Einschätzung zu meinem Quiz-Ergebnis.',
        `Ergebnis: ${diagnosis.title} (${diagnosis.confidence})`,
        `Passendes Angebot: ${diagnosis.offer.name}`,
        diagnosis.siteAssessment ? `Website-Zustand: ${diagnosis.siteAssessment.recommendation}` : '',
        inputs.url.value ? `Website: ${inputs.url.value}` : '',
        inputs.email.value ? `E-Mail: ${inputs.email.value}` : '',
        inputs.name.value ? `Name: ${inputs.name.value}` : ''
      ].filter(Boolean).join('\n');
      window.location.href = `mailto:start@studiovis.at?subject=${encodeURIComponent('Persönliche Website-Einschätzung')}&body=${encodeURIComponent(body)}`;
    });
    lead.append(form);
    lead.append(element('p', 'result-form-note', 'Der Button öffnet dein E-Mail-Programm. Du kannst die Nachricht vor dem Senden prüfen.'));
    const contact = element('a', 'result-secondary', 'Oder direkt Kontakt aufnehmen →');
    contact.href = '../studio/#kontakt';
    lead.append(contact);
    wrap.append(lead);
    content.append(wrap);
    nextButton.hidden = true;
    return heading;
  }

  function render(moveFocus = false) {
    content.replaceChildren();
    content.style.animation = 'none';
    void content.offsetWidth;
    content.style.animation = '';
    setProgress(currentId);
    progressTop.hidden = currentId === 'result';
    const heading = currentId === 'result' ? renderResult() : renderQuestion(byId[currentId]);
    if (moveFocus) heading.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  nextButton.addEventListener('click', advance);
  render();
})();
