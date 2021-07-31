const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}`);
}

getClock();
setInterval(getClock, 1000);