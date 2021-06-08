const fileInputBtn = document.getElementById("fileInputBtn");
fileInputBtn.addEventListener("change", imageInputUpload);

function imageInputUpload(e) {
  let reader = new FileReader();
  let img = new Image();

  reader.onload = function (event) {
    img.onload = function () {
      imgX = img.width;
      imgY = img.height;

      img.height = 600 * ((imgY * 100) / imgX / 100);
      img.width = 600;

      bgCanvas.width = img.width;
      bgCanvas.height = img.height;

      canvas.width = img.width;
      canvas.height = img.height;

      bgCtx.drawImage(img, 0, 0, bgCanvas.width, bgCanvas.height);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
}
