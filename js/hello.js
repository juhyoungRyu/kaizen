const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greet = document.querySelector("#greet");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreet(username);
}

function paintGreet(username) {
    // greet.innerText~
    // greet.classList~
    greet.innerText = `Hello ${username}!`;
    greet.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    // show `hello ${username}!`
    paintGreet(savedUsername);
}