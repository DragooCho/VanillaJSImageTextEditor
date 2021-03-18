const textSizeSlider = document.getElementById("myRange");
const Tachometer = document.getElementById("sizeValueTachometer");
let textSizeValue = textSizeSlider.value;
Tachometer.innerHTML = textSizeValue;

textSizeSlider.oninput = function () {
  Tachometer.innerHTML = this.value;
  textSizeValue = this.value;
};
