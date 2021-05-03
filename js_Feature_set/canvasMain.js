const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const bgCanvas = document.querySelector(".canvas2");
const bgCtx = bgCanvas.getContext("2d");

canvas.addEventListener("mousemove", mouseMoveHandler, false);
canvas.addEventListener("mousedown", mouseDownHandler, false);
canvas.addEventListener("mouseout", mouseOutHandler, false);

function mouseMoveHandler(e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = `${textColorValue}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `${textSizeValue}px ${fontStyleValue}`;
  ctx.fillText(textInputValue.value, e.offsetX, e.offsetY);
}

function mouseDownHandler(e) {
  bgCtx.fillStyle = `${textColorValue}`;
  bgCtx.textAlign = "center";
  bgCtx.textBaseline = "middle";
  bgCtx.font = `${textSizeValue}px ${fontStyleValue}`;
  bgCtx.fillText(textInputValue.value, e.offsetX, e.offsetY);
}

function mouseOutHandler(e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
