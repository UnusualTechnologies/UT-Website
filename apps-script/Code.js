function doPost(e) {
  var data = JSON.parse(e.postData.contents);

  var isMatchmake = data.submission_type === 'matchmake';
  var subject = 'New ' + (isMatchmake ? 'Matchmaking' : 'Idea') + ' Submission from ' + data.your_name;

  var lines = [];
  lines.push('Submission Type: ' + (isMatchmake ? 'Matchmaking (knows someone UT could help)' : 'Own idea'));
  lines.push('');
  lines.push('--- Submitter Contact Details ---');
  lines.push('Name: ' + data.your_name);
  lines.push('Email: ' + data.your_email);
  if (data.your_phone) lines.push('Phone: ' + data.your_phone);
  if (data.your_company) lines.push('Company: ' + data.your_company);

  if (isMatchmake) {
    lines.push('');
    lines.push('--- Matchmake Contact Details ---');
    if (data.their_name) lines.push('Name: ' + data.their_name);
    if (data.their_email) lines.push('Email: ' + data.their_email);
    if (data.their_phone) lines.push('Phone: ' + data.their_phone);
    if (data.their_company) lines.push('Company: ' + data.their_company);
    if (data.their_linkedin) lines.push('LinkedIn: ' + data.their_linkedin);
    if (data.their_description) lines.push('Description: ' + data.their_description);
  }

  lines.push('');
  lines.push('--- The Idea ---');
  lines.push(data.idea);

  if (data.cost || data.target_market || data.platform || data.deadline) {
    lines.push('');
    lines.push('--- Optional Details ---');
    if (data.cost) lines.push('Cost: ' + data.cost);
    if (data.target_market) lines.push('Target Market: ' + data.target_market);
    if (data.platform) lines.push('Platform: ' + data.platform);
    if (data.deadline) lines.push('Deadline: ' + data.deadline);
  }

  MailApp.sendEmail({
    to: 'm.p@unusualtechnologies.com',
    cc: 'james.alvarez@unusualtechnologies.com',
    subject: subject,
    body: lines.join('\n'),
    replyTo: data.your_email
  });

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
