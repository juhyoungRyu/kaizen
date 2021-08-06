const images = ["img000.jpeg", "img001.jpeg", "img002.jpeg", "img003.jpeg", "img004.jpeg", "img005.jpeg", "img006.jpeg", "img007.jpeg", "img008.jpeg"];

const bgImage = document.createElement("img");
const todayBackground = images[Math.floor(Math.random() * images.length)];
bgImage.src = `img/${todayBackground}`;

bgImage.classList.add("bgImage");


document.body.appendChild(bgImage);