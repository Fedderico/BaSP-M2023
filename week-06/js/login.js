var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var loginButton = document.getElementById("login");

function validateEmail() {
  var email = emailInput.value;
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    emailInput.style.border = "1px solid red";
    return false;
  }
  emailInput.style.border = "2px solid green";
  return true;
}

function validatePassword() {
  var password = passwordInput.value;
  var containsLetter = false;
  var containsNumber = false;

  for (var i = 0; i < password.length; i++) {
    if (isNaN(password.charAt(i))) {
      containsLetter = true;
    } else {
      containsNumber = true;
    }
  }

  if (password.length < 1 || !(containsLetter && containsNumber)) {
    passwordInput.style.border = "1px solid red";
    return false;
  }

  passwordInput.style.border = "2px solid green";
  return true;
}

function validateForm() {
  var validEmail = validateEmail();
  var validPassword = validatePassword();
  if (!validEmail) {
    alert("El email debe tener un formato válido");
  }
  if (!validPassword) {
    alert("La contraseña debe tener al menos un carácter");
  }
  if (validEmail && validPassword) {
    alert(
      "Email: " + emailInput.value + "\nContraseña: " + passwordInput.value
    );
  }
}

emailInput.addEventListener("blur", validateEmail);

passwordInput.addEventListener("blur", validatePassword);

emailInput.addEventListener("focus", function () {
  emailInput.style.border = "1px solid red";
});

passwordInput.addEventListener("focus", function () {
  passwordInput.style.border = "1px solid red";
});

loginButton.addEventListener("click", validateForm);
