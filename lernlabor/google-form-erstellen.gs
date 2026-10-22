/**
 * Einmalig in https://script.google.com/ ausführen.
 * Erstellt ein anonymes Google-Formular für die Lernwerkstatt
 * und eine Google-Tabelle für die gemeinsame Klassenauswertung.
 * Prüfe vor dem Teilen in Google Forms die Anmelde- und E-Mail-Einstellungen.
 */
function erstelleLernwerkstattFeedback() {
  const form = FormApp.create('Feedback: Stunde und virtuelles Lernzimmer');
  form.setDescription('Anonymes Feedback zur Unterrichtsstunde und zum virtuellen Lernzimmer. Bitte keine Namen oder persönlichen Daten in die Freitextfelder schreiben. Die Ergebnisse werden zusammengefasst mit der Klasse besprochen.');
  form.setConfirmationMessage('Vielen Dank für deine Rückmeldung! Deine Antworten helfen uns, die Lernwerkstatt zu verbessern.');
  form.setCollectEmail(false);
  form.addListItem().setTitle('Welche Stunde bewertest du?').setChoiceValues([
    'Trinkwasserbehandlung (45 Min.)',
    'Filter',
    'Wasserhärte',
    'pH-Wert',
    'Andere Stunde / Lernwerkstatt allgemein'
  ]).setRequired(true);
  const questions = [
    'Ich habe verstanden, was ich tun sollte.',
    'Das Tempo der Stunde war passend.',
    'Die Aufgaben haben mir beim Lernen geholfen.',
    'Die Navigation und der Wegweiser waren übersichtlich.',
    'Das virtuelle Lernzimmer ist hilfreich.',
    'Insgesamt hat mir das Lernen heute gefallen.'
  ];
  questions.forEach(question => {
    form.addScaleItem().setTitle(question).setBounds(1, 5)
      .setLabels('trifft gar nicht zu', 'trifft voll zu').setRequired(true);
  });
  form.addParagraphTextItem().setTitle('Was hat dir beim Lernen besonders geholfen?').setHelpText('Freiwillig; bitte keine Namen nennen.').setRequired(false);
  form.addParagraphTextItem().setTitle('Was würdest du an der Stunde oder am virtuellen Lernzimmer verbessern?').setHelpText('Freiwillig; bitte keine Namen nennen.').setRequired(false);
  const sheet = SpreadsheetApp.create('Lernwerkstatt – Feedbackantworten und Klassenauswertung');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
  Logger.log('SCHÜLERLINK (in GitHub bei feedback-config.js eintragen): ' + form.getPublishedUrl());
  Logger.log('FORMULAR BEARBEITEN: ' + form.getEditUrl());
  Logger.log('ANTWORTTABELLE (nur für Lehrkraft freigeben): ' + sheet.getUrl());
  Logger.log('In Google Forms unter Einstellungen prüfen: E-Mail-Adressen NICHT erfassen; auf 1 Antwort beschränken AUS; Anmeldung/Beschränkungen nach Schulvorgaben einstellen.');
}
