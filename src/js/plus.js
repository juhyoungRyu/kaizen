const plus = document.querySelector(".btn");
const plusImg = document.querySelector(".button");
const form = document.getElementById("toDoForm");
const a = document.querySelector("#a");

function handlePlus() {
 form.classList.remove("hidden");
 a.classList.remove("hidden");
}


plus.addEventListener("click", handlePlus);
plusImg.addEventListener("click", handlePlus);