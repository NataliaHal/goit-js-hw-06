const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorButton.addEventListener('click', function() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
});
