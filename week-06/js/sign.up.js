// Obtener los elementos del formulario
var form = document.querySelector('form');
var nameInput = document.getElementById('name');
var lnameInput = document.getElementById('lname');
var dniInput = document.getElementById('dni');
var birthdayInput = document.getElementById('birthday');
var phoneInput = document.getElementById('phone');
var addressInput = document.getElementById('address');
var cityInput = document.getElementById('city');
var postalCodeInput = document.getElementById('postalCode');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var confirmPasswordInput = document.getElementById('confirmPassword');

nameInput.addEventListener('blur', validateName);
lnameInput.addEventListener('blur', validateLname);
dniInput.addEventListener('blur', validateDni);
birthdayInput.addEventListener('blur', validateBirthday);
phoneInput.addEventListener('blur', validatePhone);
addressInput.addEventListener('blur', validateAddress);
cityInput.addEventListener('blur', validateCity);
postalCodeInput.addEventListener('blur', validatePostalCode);
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePassword);
confirmPasswordInput.addEventListener('blur', validateConfirmPassword);



// Validar el campo de nombre
nameInput.addEventListener('blur', function() {
  if (nameInput.value.trim() === '') {
    nameInput.classList.add('invalid');
  } else {
    nameInput.classList.remove('invalid');
    nameInput.classList.add('valid');
  }
});

// Validar el campo de apellido
lnameInput.addEventListener('blur', function() {
  if (lnameInput.value.trim() === '') {
    lnameInput.classList.add('invalid');
  } else {
    lnameInput.classList.remove('invalid');
    lnameInput.classList.add('valid');
  }
});

// Validar el campo de DNI
dniInput.addEventListener('blur', function() {
  if (dniInput.value.trim() === '' || isNaN(dniInput.value.trim())) {
    dniInput.classList.add('invalid');
  } else {
    dniInput.classList.remove('invalid');
    dniInput.classList.add('valid');
  }
});

// Validar el campo de fecha de nacimiento
birthdayInput.addEventListener('blur', function() {
  if (birthdayInput.value.trim() === '') {
    birthdayInput.classList.add('invalid');
  } else {
    birthdayInput.classList.remove('invalid');
    birthdayInput.classList.add('valid');
  }
});

// Validar el campo de teléfono
phoneInput.addEventListener('blur', function() {
  if (phoneInput.value.trim() === '' || isNaN(phoneInput.value.trim())) {
    phoneInput.classList.add('invalid');
  } else {
    phoneInput.classList.remove('invalid');
    phoneInput.classList.add('valid');
  }
});

// Validar el campo de dirección
addressInput.addEventListener('blur', function() {
  if (addressInput.value.trim() === '') {
    addressInput.classList.add('invalid');
  } else {
    addressInput.classList.remove('invalid');
    addressInput.classList.add('valid');
  }
});

// Validar el campo de ciudad
cityInput.addEventListener('blur', function() {
  if (cityInput.value.trim() === '') {
    cityInput.classList.add('invalid');
  } else {
    cityInput.classList.remove('invalid');
    cityInput.classList.add('valid');
  }
});

// Validar el campo de código postal
postalCodeInput.addEventListener('blur', function() {
  if (postalCodeInput.value.trim() === '' || isNaN(postalCodeInput.value.trim())) {
    postalCodeInput.classList.add('invalid');
  } else {
    postalCodeInput.classList.remove('invalid');
    postalCodeInput.classList.add('valid');
  }
});

// Validar el campo de correo electrónico
emailInput.addEventListener('blur', function() {
  if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
    emailInput.classList.add('invalid');
  } else {
    emailInput.classList.remove('invalid');
    emailInput.classList.add('valid');
  }
});

// Validar el campo de contraseña
passwordInput.addEventListener('blur', function() {
  if (passwordInput.value.trim() === '' || passwordInput.value.length < 8) {
    passwordInput.classList.add('invalid');
  } else {
    passwordInput.classList.remove('invalid');
    passwordInput.classList.add('valid');
  }
});

// Validar el campo de confirmación de contraseña
confirmPasswordInput.addEventListener('blur', function() {
  if (confirmPasswordInput.value.trim() === '' || confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.classList.add('invalid');
  } else {
    confirmPasswordInput.classList.remove('invalid');
    confirmPasswordInput.classList.add('valid');
  }
});
