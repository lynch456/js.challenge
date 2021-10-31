const image = ["bgimg1.jpg", "bgimg2.jpg"];

const backgroundImage = image[Math.floor(Math.random() * image.length)];

const bgimage = document.createElement("img");

bgimage.src = `./src/${backgroundImage}`;
bgimage.classList.add("backgroundimg");
document.body.appendChild(bgimage);
