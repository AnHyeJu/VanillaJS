const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  //0-IMG_NUMBER-1까지 랜덤
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number + 1;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
