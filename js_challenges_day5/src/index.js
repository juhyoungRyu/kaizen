const body = document.querySelector("body");
const h1 = document.createElement("h1");

body.appendChild(h1).innerText = "Hello!";

bgColorChange();

function bgColorChange() {
  const size = window.innerWidth;
  if (size > 800) {
    h1.style.color = "white";
    body.style.backgroundColor = "crimson";
  } else if (size > 700) {
    h1.style.color = "white";
    body.style.backgroundColor = "OrangeRed";
  } else if (size > 600) {
    h1.style.color = "white";
    body.style.backgroundColor = "Gold";
  } else if (size > 500) {
    h1.style.color = "white";
    body.style.backgroundColor = "Midnightgreen";
  } else if (size > 400) {
    h1.style.color = "white";
    body.style.backgroundColor = "SlateBlue";
  } else if (size > 300) {
    h1.style.color = "white";
    body.style.backgroundColor = "MidnightBlue";
  } else {
    h1.style.color = "white";
    body.style.backgroundColor = "purple";
  }
}

window.addEventListener("resize", bgColorChange);
