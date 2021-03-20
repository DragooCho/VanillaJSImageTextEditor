const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", mouseDownHandler, false);

// function paintText(e) {
//   ctx.fillStyle = `${textColorValue}`;
//   ctx.textAlign = "center";
//   ctx.textBaseline = "middle";
//   ctx.font = `${textSizeValue}px ${fontStyleValue}`;
//   ctx.fillText(textInputValue.value, e.offsetX, e.offsetY);
// }

function mouseDownHandler(e) {
  ctx.fillStyle = `${textColorValue}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `${textSizeValue}px ${fontStyleValue}`;
  ctx.fillText(textInputValue.value, e.offsetX, e.offsetY);
}
