const createImg = document.querySelector(".clickCreateImg");
createImg.addEventListener("click", createDownloadImg, false);

function createDownloadImg() {
  let dataURL = bgCanvas.toDataURL("image/png");
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
  ATagImage.style.opacity = "0.5";
  ATagImage.click();
}
