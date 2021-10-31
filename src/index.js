const loginInput = document.getElementById("login-input");
const inputValue = document.querySelector("#login-input input");
const welcomeText = document.getElementById("welcome");

const hiddenClass = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
  event.preventDefault();
  loginInput.classList.add(hiddenClass);
  localStorage.setItem(USERNAME_KEY, inputValue.value);
  paintWelcomeText();
}

function paintWelcomeText() {
  const username = localStorage.getItem(USERNAME_KEY);
  welcomeText.innerText = `Hello! ${username}`;
  welcomeText.classList.remove(hiddenClass);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  loginInput.classList.remove(hiddenClass);
  loginInput.addEventListener("submit", loginSubmit);
} else {
  paintWelcomeText();
}
