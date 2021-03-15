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
  ctx.fillStyle = "red";
  ctx.font = "28px georgia";
  ctx.textAlign = "center";
  ctx.fillText(textInputValue.value, e.offsetX, e.offsetY);
}

function textInputHandler(e) {
  e.preventDefault();
  textInputValue.value = e.target.value;
}
