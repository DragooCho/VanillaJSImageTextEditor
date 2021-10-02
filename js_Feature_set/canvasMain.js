const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const bgCanvas = document.querySelector(".canvas2");
const bgCtx = bgCanvas.getContext("2d");

canvas.addEventListener("mousemove", mouseMoveHandler, false);
canvas.addEventListener("mouseup", mouseUpHandler, false);
canvas.addEventListener("mouseout", mouseOutHandler, false);

function printingText(e, whatCanvas, nX, nY) {
  whatCanvas.fillStyle = `${textColorValue}`;
  whatCanvas.textAlign = "center";
  whatCanvas.textBaseline = "middle";
  whatCanvas.font = `${textSizeValue}px ${fontStyleValue}`;
  whatCanvas.fillText(textInputValue.value, e.offsetX + nX, e.offsetY + nY);

  // whatCanvas.fillStyle = `rgba(0, 0, 0, 0.2)`;
  // whatCanvas.fillRect(0, 0, bgCanvas.width, bgCanvas.height);
}

function mouseMoveHandler(e) {
  mouseOutHandler();
  printingText(e, ctx, txtPrintFineTuningX, txtPrintFineTuningY);
}

function mouseUpHandler(e) {
  printingText(e, bgCtx, 0, 0);
}

function mouseOutHandler() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
