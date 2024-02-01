function validatePassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');

    if (password !== confirmPassword) {
      passwordError.textContent = "Passwords do not match. Please try again.";
      document.getElementById('password').focus();
    } else {
      passwordError.textContent = "";
    }
  }

  function updateRatingValue(value) {
    document.getElementById('ratingValue').textContent = value;
  }