const textSizeSlider = document.getElementById("myRange");
const Tachometer = document.getElementById("sizeValueTachometer");
let textSizeValue = textSizeSlider.value;
Tachometer.innerHTML = textSizeValue;

textSizeSlider.addEventListener("input", (event) => {
  Tachometer.innerHTML = event.target.value;
  textSizeValue = event.target.value;
});

// function printTextScreen() {
//   console.log(this);
//   Tachometer.innerHTML = this.value;
//   textSizeValue = this.value;
// }
// textSizeSlider.oninput = function printTextScreen() {
//   console.log(this);
//   Tachometer.innerHTML = this.value;
//   textSizeValue = this.value;
// };
