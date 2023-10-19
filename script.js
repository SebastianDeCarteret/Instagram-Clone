let logInButton = document.querySelector("#log-in-button");
let emailField = document.querySelector("#email-field");
let passwordField = document.querySelector("#password-field");
let errorMessageText = document.querySelector("#error-message-text");

logInButton.addEventListener("click", () => {
  if (emailField.value != "" && passwordField.value != "") {
    errorMessageText.classList.remove("red-error");
    errorMessageText.innerHTML = "";
    location.replace("./feed.html");
  } else {
    errorMessageText.innerHTML = "Please Check Your Details";
    errorMessageText.classList.add("red-error");
  }
});
