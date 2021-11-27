const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const imagesNumber = images[Math.floor(Math.random() * images.length)];

const randomImages = `url(img/${imagesNumber})`
document.body.style.backgroundImage = randomImages;
document.body.style.backgroundSize = "cover";

