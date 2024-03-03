function validateForm() {
    // Get references to all input fields
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const userName = document.getElementById('userName');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zip = document.getElementById('zip');
    const termsCheckbox = document.getElementById('termsCheckbox');
  
    // Clear any previous validation messages
    clearValidationMessages();
  
    // Check if all fields are filled in
    if (isEmpty(firstName.value) || isEmpty(lastName.value) || isEmpty(userName.value) || isEmpty(city.value) || isEmpty(state.value) || isEmpty(zip.value)) {
      // Add error message if a field is empty
      showErrorMessage('Please fill out all required fields.');
      return false;
    }
  
    // Check if username is valid (must start with a letter, followed by letters, numbers, or underscores)
    if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(userName.value)) {
      showErrorMessage('Please enter a valid username.');
      return false;
    }
  
    // Check if zip code is valid (must be 5 digits)
    if (!/^\d{5}$/.test(zip.value)) {
      showErrorMessage('Please enter a valid zip code.');
      return false;
    }
  
    // Check if terms and conditions checkbox is checked
    if (!termsCheckbox.checked) {
      showErrorMessage('You must agree to the terms and conditions.');
      return false;
    }
  
    // If all validation checks pass, return true to allow form submission
    return true;
  }
  
  function isEmpty(value) {
    return value === '' || value === null || value === undefined;
  }
  
  function showErrorMessage(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
  }
  
  function clearValidationMessages() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
  }
  
  // Add event listener to the form's submit button
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });