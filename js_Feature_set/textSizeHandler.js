const textSizeSlider = document.getElementById("myRange");
const Tachometer = document.getElementById("sizeValueTachometer");
let textSizeValue = textSizeSlider.value;
Tachometer.innerHTML = textSizeValue;

textSizeSlider.addEventListener("input", (event) => {
  Tachometer.innerHTML = event.target.value;
  textSizeValue = event.target.value;
});
