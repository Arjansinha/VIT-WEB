function validateForm() {
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phone").value;

  var nameRegex = /^[a-zA-Z ]{6,}$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneRegex = /^\d{10}$/;

  var isValid = true;

  // Validate Name
  if (!nameRegex.test(name)) {
      document.getElementById("nameError").innerText = "Name should contain alphabets only and the length should not be less than 6 characters.";
      isValid = false;
  } else {
      document.getElementById("nameError").innerText = "";
  }

  // Validate Password
  if (password.length < 6) {
      document.getElementById("passwordError").innerText = "Password should not be less than 6 characters.";
      isValid = false;
  } else {
      document.getElementById("passwordError").innerText = "";
  }

  // Validate Email
  if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerText = "Invalid email format.";
      isValid = false;
  } else {
      document.getElementById("emailError").innerText = "";
  }

  // Validate Phone Number
  if (!phoneRegex.test(phoneNumber)) {
      document.getElementById("phoneError").innerText = "Phone number should contain 10 digits only.";
      isValid = false;
  } else {
      document.getElementById("phoneError").innerText = "";
  }

  return isValid;
}