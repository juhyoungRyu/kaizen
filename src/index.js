const numForm = document.querySelector("#numForm");
const num = document.querySelector("#num");

const userNumForm = document.querySelector("#userNumForm");
const userNumber = document.querySelector("#userNumber");
const playBtn = userNumForm.querySelector("button");

const machineChose = document.querySelector("#machineChose");
const first = machineChose.querySelector("#first");
const final = machineChose.querySelector("#final");
const result = machineChose.querySelector("#result");

function randomNum(event) {
  event.preventDefault();
}

function userNum(event) {
  event.preventDefault();
}

function check() {
  if (userNumber.value !== "") {
    playBtn.removeAttribute("disabled");
  }
}

function out() {
  const mynum = userNumber.value;
  const value = num.value;
  const randNum = Math.floor(Math.random() * value);
  first.innerText = `You chose: ${mynum}`;
  final.innerText = `,the machine chose: ${randNum}`;

  if (mynum != randNum) {
    result.innerText = "You lose!";
  } else {
    result.innerText = "You Win!";
  }
}

numForm.addEventListener("submit", randomNum);
userNumForm.addEventListener("submit", userNum);
playBtn.addEventListener("click", out);
userNumber.addEventListener("input", check);
