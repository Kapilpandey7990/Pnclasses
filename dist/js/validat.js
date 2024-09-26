function validateEnrollForm() {
  const form = document.getElementById('pcenrollForm');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const phonePattern = /^[6-9]\d{9}$/;

  form.addEventListener('submit', function (event) {
    const emailInput = document.getElementById('form-email').value;
    const phoneInput = document.getElementById('form-phone').value;

    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');

    let isValid = true;

    // Validate Gmail email address
    if (!emailPattern.test(emailInput)) {
      event.preventDefault();
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }

    // Validate Phone number
    if (!phonePattern.test(phoneInput)) {
      event.preventDefault();
      phoneError.style.display = 'block';
      isValid = false;
    } else {
      phoneError.style.display = 'none';
    }

    return isValid;
  });
}

// Apply validation when the page loads
validateEnrollForm();


//contact form

function validateContactForm() {
    const form = document.getElementById('pccontactForm');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const phonePattern = /^[6-9]\d{9}$/;

    form.addEventListener('submit', function(event) {
        const emailInput = document.getElementById('email').value;
        const phoneInput = document.getElementById('contact').value;

        const emailError = document.getElementById('emailError');
        const phoneError = document.getElementById('phoneError');

        let isValid = true;

        // Validate Gmail email address
        if (!emailPattern.test(emailInput)) {
            event.preventDefault();
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Validate Phone number
        if (!phonePattern.test(phoneInput)) {
            event.preventDefault();
            phoneError.style.display = 'block';
            isValid = false;
        } else {
            phoneError.style.display = 'none';
        }

        return isValid;
    });
}

// Apply validation when the page loads
validateContactForm();

//about page validation

function validateAboutEnrollForm() {
    const form = document.getElementById('abpcenrollForm');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const phonePattern = /^[6-9]\d{9}$/;
  
    form.addEventListener('submit', function (event) {
      const emailInput = document.getElementById('form-email').value;
      const phoneInput = document.getElementById('form-phone').value;
  
      const emailError = document.getElementById('emailError');
      const phoneError = document.getElementById('phoneError');
  
      let isValid = true;
  
      // Validate Gmail email address
      if (!emailPattern.test(emailInput)) {
        event.preventDefault();
        emailError.style.display = 'block';
        isValid = false;
      } else {
        emailError.style.display = 'none';
      }
  
      // Validate Phone number
      if (!phonePattern.test(phoneInput)) {
        event.preventDefault();
        phoneError.style.display = 'block';
        isValid = false;
      } else {
        phoneError.style.display = 'none';
      }
  
      return isValid;
    });
  }
  
  // Apply validation when the page loads
  validateAboutEnrollForm();
  