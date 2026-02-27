/* ============================================================
   AI.MeD — form.js
   Contact form validation + Formspree submission
   ============================================================ */

(function () {
  'use strict';

  var form = document.getElementById('contactForm');
  if (!form) return;

  var submitBtn = form.querySelector('button[type="submit"]');
  var formContainer = document.getElementById('formContainer');
  var formSuccess = document.getElementById('formSuccess');
  var globalError = document.getElementById('formGlobalError');
  var charCounter = document.getElementById('charCounter');
  var messageField = document.getElementById('message');

  /* ----------------------------------------------------------
     1. CHARACTER COUNTER FOR MESSAGE
  ---------------------------------------------------------- */
  if (messageField && charCounter) {
    messageField.addEventListener('input', function () {
      var len = messageField.value.length;
      charCounter.textContent = len + ' / 50 min characters';
      if (len >= 50) {
        charCounter.style.color = '#10B981';
      } else {
        charCounter.style.color = '';
      }
    });
  }

  /* ----------------------------------------------------------
     2. INLINE VALIDATION
  ---------------------------------------------------------- */
  var validators = {
    name: function (val) {
      if (!val.trim()) return 'Full name is required.';
      return '';
    },
    organization: function (val) {
      if (!val.trim()) return 'Organization is required.';
      return '';
    },
    email: function (val) {
      if (!val.trim()) return 'Email address is required.';
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) return 'Please enter a valid email address.';
      return '';
    },
    inquiry_type: function (val) {
      if (!val) return 'Please select an inquiry type.';
      return '';
    },
    message: function (val) {
      if (!val.trim()) return 'Message is required.';
      if (val.trim().length < 50) return 'Message must be at least 50 characters.';
      return '';
    },
    consent: function (val) {
      if (!val) return 'You must agree to the Privacy Policy to proceed.';
      return '';
    }
  };

  function validateField(name, value) {
    if (validators[name]) {
      return validators[name](value);
    }
    return '';
  }

  function showFieldError(name, message) {
    var errorEl = form.querySelector('[data-error="' + name + '"]');
    var inputEl = form.querySelector('[name="' + name + '"]');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.toggle('visible', !!message);
    }
    if (inputEl && inputEl.type !== 'checkbox') {
      inputEl.classList.toggle('error', !!message);
    }
  }

  // Blur validation for required fields
  ['name', 'organization', 'email', 'inquiry_type', 'message'].forEach(function (fieldName) {
    var field = form.querySelector('[name="' + fieldName + '"]');
    if (field) {
      field.addEventListener('blur', function () {
        var error = validateField(fieldName, field.value);
        showFieldError(fieldName, error);
      });
      field.addEventListener('input', function () {
        if (field.classList.contains('error')) {
          var error = validateField(fieldName, field.value);
          showFieldError(fieldName, error);
        }
      });
    }
  });

  /* ----------------------------------------------------------
     3. FORM SUBMISSION
  ---------------------------------------------------------- */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Hide global error
    if (globalError) {
      globalError.classList.remove('visible');
    }

    // Validate all required fields
    var hasErrors = false;
    var requiredFields = ['name', 'organization', 'email', 'inquiry_type', 'message'];

    requiredFields.forEach(function (fieldName) {
      var field = form.querySelector('[name="' + fieldName + '"]');
      if (field) {
        var error = validateField(fieldName, field.value);
        showFieldError(fieldName, error);
        if (error) hasErrors = true;
      }
    });

    // Consent check
    var consentField = form.querySelector('[name="consent"]');
    if (consentField && !consentField.checked) {
      showFieldError('consent', 'You must agree to the Privacy Policy to proceed.');
      hasErrors = true;
    } else {
      showFieldError('consent', '');
    }

    if (hasErrors) return;

    // Collect form data
    var formData = new FormData(form);

    // Collect multi-checkbox values for platforms
    var platforms = [];
    form.querySelectorAll('input[name="platforms"]:checked').forEach(function (cb) {
      platforms.push(cb.value);
    });
    formData.delete('platforms');
    formData.append('platforms', platforms.join(', '));

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="31.4 31.4" stroke-dashoffset="0"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/></circle></svg> Sending...';

    // Disable all fields
    var fields = form.querySelectorAll('input, select, textarea, button');
    fields.forEach(function (f) { f.disabled = true; });

    // Submit via Formspree
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function (response) {
      if (response.ok) {
        // Success
        if (formContainer) formContainer.style.display = 'none';
        if (formSuccess) formSuccess.classList.add('visible');
      } else {
        return response.json().then(function (data) {
          throw new Error(data.error || 'Submission failed');
        });
      }
    })
    .catch(function () {
      // Error
      if (globalError) {
        globalError.classList.add('visible');
      }
      // Re-enable fields
      fields.forEach(function (f) { f.disabled = false; });
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message';
    });
  });

})();
