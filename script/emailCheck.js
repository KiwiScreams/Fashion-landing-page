function checkEmail() {
  const emailInput = document.getElementById("email-input");
  const emailValue = emailInput.value.trim();
  const errorMessage = document.getElementById("error-message");

  if (!isValidEmail(emailValue)) {
    errorMessage.textContent = "Invalid email address";
  } else {
    emailInput.value = "Success!";
    emailInput.style.color = "green";
    errorMessage.textContent = "";
    setTimeout(() => {
      emailInput.value = "";
      emailInput.style.color = "";
    }, 2000);
  }
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
