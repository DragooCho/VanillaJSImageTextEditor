const opacitySlider = document.querySelector(".opacity_slider");
const brightSlider = document.querySelector(".brightness_slider");
const brightButton = document.querySelector(".brightButton");

const opacityText = document.querySelector(".opacity_value_font");
const brightText = document.querySelector(".bright_value_font");

let opSliderVal = opacitySlider.value;
let brSliderVal = brightSlider.value;

brightButton.addEventListener("click", createPutBright, false);

opacitySlider.addEventListener("input", opacitySlideChange, false);
brightSlider.addEventListener("input", brightSlideChange, false);

function createPutBright() {
  bgCtx.fillStyle = `rgba(${brSliderVal}, ${brSliderVal}, ${brSliderVal}, ${opSliderVal})`;
  // bgCtx.fillStyle = "rgba(0, 0, 0, 0.5)";
  // bgCtx.fillStyle = "rgba(255, 255, 255, 0.1)";
  bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
}

function opacitySlideChange(event) {
  opSliderVal = event.target.value;
  let opVal = opSliderVal;
  console.log(opVal);
  if (opVal === 1 || opVal === 0) {
    let changeVal = opVal.toFixed(5);
    opacityText.innerText = changeVal;
  } else opacityText.innerText = opVal;
}
function brightSlideChange(event) {
  brSliderVal = event.target.value;
  let braVal = brSliderVal.padStart(3, "0");
  brightText.innerHTML = braVal;
}
