const opacitySlider = document.querySelector(".opacity_slider");
const brightSlider = document.querySelector(".brightness_slider");
const brightButton = document.querySelector(".brightButton");

// let opSliderVal = opacitySlider.value;
// let brSliderVal = brightSlider.value;

brightButton.addEventListener("click", createPutBright, false);

function createPutBright(e) {
  e.preventDefault();
  console.log("test");
  //   bgCtx.fillStyle = `rgba(${brSliderVal}, ${brSliderVal}, ${brSliderVal}, ${opSliderVal})`;
  bgCtx.fillStyle = "rgba(0, 0, 0, 0.5)";
  bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
}

// whatCanvas.fillStyle = `rgba(0, 0, 0, 0.2)`;
// whatCanvas.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
