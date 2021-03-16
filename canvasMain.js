const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

const fileInputBtn = document.getElementById("fileInputBtn");
fileInputBtn.addEventListener("change", imageInputUpload);

const textInputValue = document.getElementById("textInputValue");
textInputValue.addEventListener("change", textInputHandler);

canvas.addEventListener("mousedown", mouseDownHandler, false);

function imageInputUpload(e) {
  let reader = new FileReader();
  let img = new Image();

  reader.onload = function (event) {
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
}

function mouseDownHandler(e) {
  ctx.fillStyle = `${textColorValue}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `${textSizeValue}px ${fontStyleValue}`;
  ctx.fillText(textInputValue.value, e.offsetX, e.offsetY);
}

function textInputHandler(e) {
  e.preventDefault();
  textInputValue.value = e.target.value;
}

////////////////////////////
const optionSelectFont = document.getElementById("optionSelectFont");
optionSelectFont.addEventListener("change", fontTypeInputHandler);
let fontStyleValue = optionSelectFont.value;

function fontTypeInputHandler(e) {
  e.preventDefault();
  fontStyleValue = e.target.value;
}

//////////////////////////////////
const selectTextColor = document.getElementById("selectTextColor");
selectTextColor.addEventListener("change", textColorInputHandler);
let textColorValue = selectTextColor.value;

function textColorInputHandler(e) {
  textColorValue = e.target.value;
}

/////////////////////////
const textSizeSlider = document.getElementById("myRange");
const output = document.getElementById("demo");
let textSizeValue = textSizeSlider.value;
output.innerHTML = textSizeSlider.value;

textSizeSlider.oninput = function () {
  output.innerHTML = this.value;
  textSizeValue = this.value;
};
