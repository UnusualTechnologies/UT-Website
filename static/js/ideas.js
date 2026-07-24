(function () {
  'use strict';

  var form = document.getElementById('ideas-form');
  var theirDetails = document.getElementById('their-details');
  var radios = form.querySelectorAll('input[name="submission_type"]');
  var submitBtn = document.getElementById('ideas-submit-btn');
  var statusEl = document.getElementById('ideas-status');
  var actionURL = form.getAttribute('data-action');

  // --- Radio toggle: show/hide "Their contact details" ---
  function updateTheirDetails() {
    var selected = form.querySelector('input[name="submission_type"]:checked').value;
    theirDetails.hidden = selected !== 'matchmake';
  }

  radios.forEach(function (radio) {
    radio.addEventListener('change', updateTheirDetails);
  });
  updateTheirDetails();

  // --- Form submission ---
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Honeypot check
    if (form.elements.website && form.elements.website.value) return;

    // Basic validation
    var yourName = form.elements.your_name.value.trim();
    var yourEmail = form.elements.your_email.value.trim();
    var idea = form.elements.idea.value.trim();

    if (!yourName || !yourEmail || !idea) {
      showStatus('Please fill in all required fields.', 'error');
      return;
    }

    // Collect form data
    var data = {};
    var formData = new FormData(form);
    formData.forEach(function (value, key) {
      if (key !== 'website') data[key] = value;
    });

    // If own idea, remove their-details fields
    if (data.submission_type === 'own_idea') {
      delete data.their_name;
      delete data.their_email;
      delete data.their_phone;
      delete data.their_company;
      delete data.their_linkedin;
      delete data.their_description;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    // POST to Google Apps Script (no-cors because Apps Script redirects)
    fetch(actionURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(data)
    })
      .then(function () {
        showStatus('Thank you! Your submission has been received.', 'success');
        form.reset();
        updateTheirDetails();
      })
      .catch(function () {
        showStatus('Something went wrong. Please try again or email m.p@unusualtechnologies.com directly.', 'error');
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
      });
  });

  function showStatus(message, type) {
    statusEl.hidden = false;
    statusEl.textContent = message;
    statusEl.className = 'ideas-status ideas-status-' + type;
  }
})();
