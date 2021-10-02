const fileInputBtn = document.getElementById("fileInputBtn");
fileInputBtn.addEventListener("change", imageInputUpload);

const resizeVertically = (img, canvasY) => {
  img.height = canvasY * ((img.height * 100) / img.width / 100);
  img.width = canvasY;
  return img.height, img.width;
};

function imageInputUpload(e) {
  let reader = new FileReader();
  let img = new Image();

  reader.onload = (event) => {
    img.onload = () => {
      resizeVertically(img, canvas.width);

      [bgCanvas.width, bgCanvas.height, canvas.width, canvas.height] = [
        img.width,
        img.height,
        img.width,
        img.height,
      ];

      bgCtx.drawImage(img, 0, 0, bgCanvas.width, bgCanvas.height);
    };
    img.src = event.target.result;

    fileCheckingWarning(img);
  };

  reader.readAsDataURL(e.target.files[0]);
}
