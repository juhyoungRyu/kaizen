const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const today = new Date();
  const targetday = new Date(2021, 11, 25);
  const calculator = today - targetday;

  const days = Math.floor(calculator / (1000 * 60 * 60 * 24));
  const hours = Math.floor(calculator / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(calculator / (1000 * 60)) % 60;
  const seconds = Math.floor(calculator / 1000) % 60;
  clockTitle.innerText = `${-days}d ${-hours}h ${-minutes}m ${-seconds}s`;
}
setInterval(getClock, 1000);

getClock();
