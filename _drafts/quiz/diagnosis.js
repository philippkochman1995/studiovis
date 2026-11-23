(function (root) {
  const goals = {
    customers: 'mehr Kund:innen gewinnen', impression: 'professioneller auftreten',
    inquiries: 'mehr Anfragen aus bestehenden Besuchen gewinnen', modernize: 'deine Website verbessern'
  };
  const growth = { '10': '10 %', '20': '20 %', '50': '50 %', 'over-50': 'mehr als 50 %' };
  const noSiteGoals = {
    customers: 'zusätzliche Kund:innen gewinnen', trust: 'vertrauenswürdiger auftreten',
    explain: 'das Angebot besser erklären', support: 'bestehende Marketingmaßnahmen unterstützen'
  };
  const sourceLabels = {
    referrals: 'Empfehlungen und Netzwerk', social: 'Social Media',
    google: 'Google oder Online-Verzeichnisse', ads: 'bezahlte Werbung',
    outreach: 'direkte Kundenansprache', events: 'Veranstaltungen und persönliche Kontakte', other: 'andere Wege'
  };
  const titles = {
    traffic: 'Traffic-Problem', website: 'Website-Problem', offer: 'Angebotsproblem',
    measurement: 'Unklare Datenlage', potential: 'Website-Potenzial'
  };
  const offers = {
    traffic: {
      name: 'Sichtbarkeits-Sprint',
      description: 'Analyse der Suchbegriffe, Optimierung wichtiger Seiten und ein 30-Tage-Traffic-Plan.'
    },
    website: {
      name: 'Conversion-Sprint',
      description: 'Prüfung und Optimierung der wichtigsten Website-Seiten.'
    },
    offer: {
      name: 'Angebots-Klarheits-Sprint',
      description: 'Positionierung und Angebotskommunikation überarbeiten.'
    },
    measurement: {
      name: 'Tracking-Setup',
      description: 'Die wichtigsten Kennzahlen erfassen und übersichtlich darstellen.'
    },
    potential: {
      name: 'Website-Starter-Paket',
      description: 'Konzeption und Aufbau einer ersten Unternehmenswebsite, sofern sinnvoll.'
    }
  };
  const steps = {
    traffic: [
      'Relevante Suchbegriffe deiner Zielgruppe recherchieren.',
      'Die wichtigsten Seiten für diese Suchanfragen optimieren.',
      'Einen zusätzlichen Kanal zur Kundengewinnung testen.'
    ],
    website: [
      'Die Botschaft auf der Startseite verständlicher formulieren.',
      'Vertrauenselemente wie Referenzen ergänzen.',
      'Kontaktmöglichkeiten und Handlungsaufforderungen verbessern.'
    ],
    offer: [
      'Ein konkretes Nutzenversprechen formulieren.',
      'Die häufigsten Einwände verlorener Interessent:innen analysieren.',
      'Angebot, Mehrwert und Leistungen klarer kommunizieren.'
    ],
    measurement: [
      'Besucherzahlen erfassen.',
      'Anfragen und Conversion-Ereignisse messen.',
      'Die Ergebnisse regelmäßig vergleichen.'
    ],
    potential: [
      'Prüfen, welche Fragen potenzielle Kund:innen vor der Kontaktaufnahme haben.',
      'Ziele und Funktionen einer möglichen Website definieren.',
      'Entscheiden, ob eine Website bestehende Kundengewinnungswege wirtschaftlich ergänzen kann.'
    ]
  };

  function siteAssessment(answers) {
    if (answers.website !== 'yes') return null;
    const fit = answers.site_fit;
    const flex = answers.site_flex;
    let key;
    let recommendation;
    if (!fit || !flex || fit === 'unknown' || flex === 'unknown') {
      key = 'review';
      recommendation = 'Prüfe den Zustand und die Änderbarkeit der Website, bevor du über einen Relaunch entscheidest.';
    } else if (fit === 'poor' && flex === 'hard') {
      key = 'relaunch';
      recommendation = 'Ein Website-Relaunch sollte geprüft werden.';
    } else if (fit === 'poor') {
      key = 'compare';
      recommendation = 'Vergleiche eine größere Überarbeitung mit einem Relaunch.';
    } else if (flex === 'hard') {
      key = 'technical';
      recommendation = 'Prüfe eine technische Modernisierung der bestehenden Website.';
    } else if (fit === 'partial') {
      key = 'optimize';
      recommendation = 'Optimiere die bestehende Website gezielt.';
    } else {
      key = 'keep';
      recommendation = 'Behalte die bestehende Website vorerst bei.';
    }
    return { key, recommendation };
  }

  function relaunchRecommendation(assessment) {
    if (!assessment || !['relaunch', 'compare'].includes(assessment.key)) return null;
    return {
      title: 'Vielleicht ist es Zeit für eine neue Website.',
      explanation: assessment.key === 'relaunch'
        ? 'Deine Website passt kaum noch zu deinem Unternehmen und größere Änderungen sind schwierig. Ein Relaunch ist eine mögliche Lösung, die wir genauer prüfen sollten.'
        : 'Deine Website passt kaum noch zu deinem Unternehmen. Vergleiche eine größere Überarbeitung mit einem Relaunch, bevor du dich entscheidest.',
      steps: [
        'Bestimme, welche Inhalte und Funktionen du wirklich benötigst.',
        'Prüfe, welche Bestandteile deiner bisherigen Website übernommen werden können.',
        'Vergleiche Kosten und Nutzen einer Optimierung mit einer Neuentwicklung.'
      ],
      offer: {
        name: 'Website-Relaunch-Check',
        description: 'Technische und strategische Bestandsaufnahme mit konkreter Empfehlung.'
      }
    };
  }

  function result(kind, answers, explanation, confidence = 'Hinweis') {
    const assessment = siteAssessment(answers);
    return {
      kind,
      title: titles[kind],
      confidence,
      context: answers.website === 'no'
        ? `Dein Ziel für eine Website: ${noSiteGoals[answers.no_site_goal] || 'ein konkretes Ziel festlegen'}.`
        : goals[answers.goal] && growth[answers.growth]
          ? `Dein Ziel: ${goals[answers.goal]} und die Kundenzahl um ${growth[answers.growth]} steigern.`
          : '',
      explanation,
      steps: steps[kind],
      offer: offers[kind],
      siteAssessment: assessment,
      relaunch: relaunchRecommendation(assessment)
    };
  }

  function unknownCount(answers, ids) {
    return ids.filter(id => answers[id] === 'unknown').length;
  }

  function diagnoseTraffic(answers) {
    const visits = answers.traffic_visitors;
    const inquiries = answers.traffic_inquiries;
    if (unknownCount(answers, ['traffic_visitors', 'traffic_source', 'traffic_inquiries']) >= 2) {
      return result('measurement', answers,
        'Mehrere Angaben zu Besuchen, Quellen und Anfragen fehlen. Messe diese Zahlen, bevor du den Engpass festlegst.');
    }
    if (['500-2000', 'over-2000'].includes(visits) && inquiries === 'none') {
      return result('website', answers,
        'Es kommen bereits Besucher:innen, aber laut deiner Angabe entstehen keine Anfragen. Prüfe zuerst die Besucherqualität und den Weg zur Kontaktaufnahme.', 'Verdacht');
    }
    const evidence = ['under-100', '100-500'].includes(visits) && ['4-10', 'over-10'].includes(inquiries);
    return result('traffic', answers, evidence
      ? 'Aus den bisherigen Besuchen entstehen Anfragen. Mehr passende Besucher:innen könnten deshalb der nächste Hebel sein.'
      : 'Du vermutest zu wenig Reichweite. Die Besucher- und Anfragezahlen liefern noch keinen eindeutigen Beweis; prüfe, ob mehr passende Besuche zu mehr Kund:innen führen.',
    evidence ? 'Hinweis' : 'Verdacht');
  }

  function diagnoseWebsite(answers) {
    if (unknownCount(answers, ['website_inquiries', 'website_barrier', 'website_clarity']) >= 2) {
      return result('measurement', answers,
        'Mehrere Angaben zur Anfragequote und zur Website-Wirkung fehlen. Miss zunächst die Anfragen und prüfe die wichtigsten Seiten.');
    }
    const few = ['none', '1-2'].includes(answers.website_inquiries);
    return result('website', answers, few
      ? 'Du berichtest von wenigen Anfragen aus deinen Website-Besuchen. Botschaft, Vertrauen und Kontaktweg sind die ersten Stellen für eine Prüfung.'
      : 'Du vermutest einen Engpass auf der Website. Die genaue Ursache solltest du an Botschaft, Nutzerführung und Kontaktweg prüfen.',
    few ? 'Hinweis' : 'Verdacht');
  }

  function diagnoseOffer(answers) {
    if (unknownCount(answers, ['offer_reason', 'offer_close', 'offer_difference']) >= 2) {
      return result('measurement', answers,
        'Mehrere Angaben zu Abschlüssen und Angebot fehlen. Erfasse die Abschlüsse und die Gründe für verlorene Anfragen.');
    }
    const few = ['under-10', '10-25'].includes(answers.offer_close);
    return result('offer', answers, few
      ? 'Aus qualifizierten Anfragen werden bislang vergleichsweise selten Kund:innen. Prüfe Positionierung, Nutzenversprechen, Preis und Verkaufsprozess.'
      : 'Du vermutest einen Engpass nach der Anfrage. Prüfe verlorene Gespräche und den wahrgenommenen Nutzen, bevor du die Website als Ursache annimmst.',
    few ? 'Hinweis' : 'Verdacht');
  }

  function diagnoseData(answers) {
    if (answers.data_signal === 'unknown') {
      return result('measurement', answers,
        'Du kannst den Engpass auch nach der Nachfrage nicht eingrenzen. Erfasse Besuche, Anfragen und Abschlüsse, bevor du eine Maßnahme auswählst.');
    }
    const suspected = { traffic: 'traffic', website: 'website', offer: 'offer' }[answers.data_signal];
    if (!suspected) return result('measurement', answers, 'Für eine Einordnung fehlen die Angaben zu deiner aktuellen Situation.');
    const explanations = {
      traffic: 'Du beobachtest, dass euch zu wenige potenzielle Kund:innen erreichen. Das ist ein Verdacht auf ein Reichweitenproblem, noch keine gesicherte Diagnose.',
      website: 'Du beobachtest Besuche, aber kaum Anfragen. Das ist ein Verdacht auf ein Website-Problem, noch keine gesicherte Diagnose.',
      offer: 'Du beobachtest Anfragen, aber wenige Abschlüsse. Das ist ein Verdacht auf ein Angebotsproblem, noch keine gesicherte Diagnose.'
    };
    return result(suspected, answers, explanations[suspected], 'Verdacht');
  }

  function diagnoseWithoutWebsite(answers) {
    const sources = Array.isArray(answers.sources) ? answers.sources : [];
    const sourceText = sources.map(source => sourceLabels[source] || source).join(', ');
    const few = ['irregular', '1-3'].includes(answers.monthly_customers);
    const satisfaction = answers.no_site_satisfaction;
    return result('potential', answers,
      `Du gewinnst Kund:innen bisher über ${sourceText || 'bestehende Kontakte'}. ${few ? 'Der Zufluss ist noch gering oder unregelmäßig.' : 'Diese Wege bringen bereits regelmäßig neue Kund:innen.'} ${satisfaction === 'very' ? 'Du bist damit sehr zufrieden.' : satisfaction === 'unhappy' ? 'Du bist mit der bisherigen Kundengewinnung unzufrieden.' : 'Ob eine erste Website wirtschaftlich hilft, solltest du anhand eines konkreten Ziels prüfen.'}`,
    'Potenzial');
  }

  function diagnose(answers) {
    if (answers.website === 'no') return diagnoseWithoutWebsite(answers);
    if (answers.website !== 'yes') return result('measurement', answers, 'Die Angabe zu deiner Website fehlt.');
    switch (answers.obstacle) {
      case 'traffic': return diagnoseTraffic(answers);
      case 'website': return diagnoseWebsite(answers);
      case 'offer': return diagnoseOffer(answers);
      case 'data': return diagnoseData(answers);
      default: return result('measurement', answers, 'Der größte Engpass ist noch nicht eingegrenzt.');
    }
  }

  const api = { diagnose, siteAssessment };
  root.QuizDiagnosis = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
