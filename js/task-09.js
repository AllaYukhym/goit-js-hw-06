function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnRef = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");
const textRef = document.querySelector(".color");

btnRef.addEventListener("click", onChangeColor);
function onChangeColor() {
  bodyRef.style.background = getRandomHexColor();
  textRef.textContent = `${bodyRef.style.background}`;
}
