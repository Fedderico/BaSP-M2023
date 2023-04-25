
var form = document.querySelector("form");
var nameInput = document.getElementById("name");
var lnameInput = document.getElementById("lname");
var dniInput = document.getElementById("dni");
var birthdayInput = document.getElementById("birthday");
var phoneInput = document.getElementById("phone");
var addressInput = document.getElementById("address");
var cityInput = document.getElementById("city");
var postalCodeInput = document.getElementById("postalCode");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var confirmPasswordInput = document.getElementById("confirmPassword");


const button = document.getElementById("button");
button.addEventListener("click", function (event) {
  event.preventDefault();
});

//separador de variables NAME
var nameInput = document.getElementById("name");
nameInput.addEventListener("blur", function () {
  var nameValue = nameInput.value;
  if (
    nameValue.trim() === "" ||
    nameValue.length < 3 ||
    !/^[a-zA-Z]+$/.test(nameValue)
  ) {
    nameInput.style.borderColor = "red";
    alert("Nombre no válido");
  } else {
    nameInput.style.borderColor = "green";
  }
});
nameInput.addEventListener("focus", function () {
  nameInput.style.borderColor = "";
});

//separador de variables LAST NAME
var lnameInput = document.getElementById("lname");
lnameInput.addEventListener("blur", function () {
  var lnameValue = lnameInput.value;
  if (
    lnameValue.trim() === "" ||
    lnameValue.length < 3 ||
    !/^[a-zA-Z]+$/.test(lnameValue)
  ) {
    lnameInput.style.borderColor = "red";
    alert("Nombre no válido");
  } else {
    lnameInput.style.borderColor = "green";
  }
});
lnameInput.addEventListener("focus", function () {
  lnameInput.style.borderColor = "";
});

//separador de variables DNI
var dniInput = document.getElementById("dni");
dniInput.addEventListener("blur", function () {
  var dniValue = dniInput.value;
  if (
    dniValue.trim() === "" ||
    dniValue.length < 8 ||
    !/^[0-9]+$/.test(dniValue)
  ) {
    dniInput.style.borderColor = "red";
    alert("documento no valido");
  } else {
    dniInput.style.borderColor = "green";
  }
});

//separador de variables CUMPLEAÑITO
var birthdayInput = document.getElementById("birthday");
birthdayInput.addEventListener("blur", function () {
  var birthdayValue = birthdayInput.value;
  if (
    birthdayValue.trim() === "" ||
    !/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(birthdayValue)
  ) {
    birthdayInput.style.borderColor = "red";
    alert("fecha no valida");
  } else {
    birthdayInput.style.borderColor = "green";
  }
});

//separador de variables  CELU
var phoneInput = document.getElementById("phone");
phoneInput.addEventListener("blur", function () {
  var phoneValue = phoneInput.value;
  if (
    phoneValue.trim() === "" ||
    phoneValue.length !== 10 ||
    !/^[0-9]+$/.test(phoneValue)
  ) {
    phoneInput.style.borderColor = "red";
    alert("Numero incorrecto");
  } else {
    phoneInput.style.borderColor = "green";
  }
});

//separador de variables  DIRECCION
var addressInput = document.getElementById("address");
addressInput.addEventListener("blur", function () {
  var addressValue = addressInput.value;
  if (
    addressValue.trim() === "" ||
    addressValue.length < 5 ||
    !/^[a-zA-Z0-9\s]+$/.test(addressValue)
  ) {
    addressInput.style.borderColor = "red";
    alert("Dirección no válida.");
  } else {
    addressInput.style.borderColor = "green";
  }
});

//separador de variables   CIUDAD/LOCALIDAD
var cityInput = document.getElementById("city");
cityInput.addEventListener("blur", function () {
  var cityValue = cityInput.value;
  if (
    cityValue.trim() === "" ||
    cityValue.length < 3 ||
    !/^[a-zA-Z0-9]+$/.test(cityValue)
  ) {
    cityInput.style.borderColor = "red";
    alert("Localidad no válida");
  } else {
    cityInput.style.borderColor = "green";
  }
});

//separador de variables   CODIGO POSTAL
var postalCodeInput = document.getElementById("postalCode");
postalCodeInput.addEventListener("blur", function () {
  var postalCode = this.value.trim();
  if (!/^[0-9]{4,5}$/.test(postalCode)) {
    alert("codigo postal incorrecto");
    this.style.borderColor = "red";
  } else {
    this.style.borderColor = "green";
  }
});

//separador de variables   EMAIL

var emailInput = document.getElementById("email");
emailInput.addEventListener("blur", function () {
  var email = this.value.trim();
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    alert("email incorrecto");
    this.style.borderColor = "red";
  } else {
    this.style.borderColor = "green";
  }
});

//separador de variables PASSWORD//FORM

var passwordInput = document.getElementById("password");

passwordInput.addEventListener("blur", function () {
  var password = this.value.trim();
  if (password.trim() === "" || password.length < 6 || password.length > 15) {
    passwordInput.style.borderColor = "red";
    alert("Contraseña no válida");
    this.style.borderColor = "red";
    return;
  } else {
    passwordInput.style.borderColor = "green";
  }
});


//separador de variables  ACCEPT PASSWORD

var confirmPasswordInput = document.getElementById("confirmPassword");
confirmPasswordInput.addEventListener("blur", function () {
  var password = this.value.trim();
  if (password.trim() === "" || password.length < 6 || password.length > 15) {
    confirmPasswordInput.style.borderColor = "red";
    alert("Contraseña no válida");
    this.style.borderColor = "red";
    return;
    } else {
      confirmPasswordInput.style.borderColor = "green";
    }
})

button.addEventListener('click', () => {
  alert(
    "Nombre: " + nameInput.value + "\n" +
    "Apellido: " + lnameInput.value + "\n" +
    "DNI: " + dniInput.value + "\n" +
    "Fecha de nacimiento: " + birthdayInput.value + "\n" +
    "Teléfono: " + phoneInput.value + "\n" +
    "Dirección: " + addressInput.value + "\n" +
    "Ciudad: " + cityInput.value + "\n" +
    "Código postal: " + postalCodeInput.value + "\n" +
    "Correo electrónico: " + emailInput.value + "\n" +
    "Contraseña: " + passwordInput.value + "\n" +
    "Confirmar contraseña: " + confirmPasswordInput.value + "\n"
  );
});