const images = ["img000.jpeg", "img001.jpeg", "img002.jpeg", "img003.jpeg", "img004.jpeg", "img005.jpeg"];

const todayBackground = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${todayBackground}`;

document.body.appendChild(bgImage);