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
const Tachometer = document.getElementById("sizeValueTachometer");
let textSizeValue = textSizeSlider.value;
Tachometer.innerHTML = textSizeSlider.value;

textSizeSlider.oninput = function () {
  Tachometer.innerHTML = this.value;
  textSizeValue = this.value;
};

const createDownloadImg = () => {
  let dataURL = canvas.toDataURL("image/png");
  dataURL = dataURL.replace(
    /^data:image\/[^;]*/,
    "data:application/octet-stream"
  );
  dataURL = dataURL.replace(
    /^data:application\/octet-stream/,
    "data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png"
  );
  const ATagImage = document.createElement("a");
  ATagImage.download = "canvasImage.png";
  ATagImage.href = dataURL;
  ATagImage.click();
};
