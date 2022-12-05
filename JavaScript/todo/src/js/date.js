const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");

const dates = new Date();

date();

function date(){ 
    year.innerText = dates.getFullYear();
    month.innerText = `0${dates.getMonth() + 1}`;
    day.innerText = dates.getDate();
}