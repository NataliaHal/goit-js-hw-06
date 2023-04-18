const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

// Listen for input event on range input
fontSizeControl.addEventListener("input", (event) => {
  // Get the value of the range input
  const fontSize = event.target.value;
  // Set the font size of the text element
  textElement.style.fontSize = `${fontSize}px`;
});