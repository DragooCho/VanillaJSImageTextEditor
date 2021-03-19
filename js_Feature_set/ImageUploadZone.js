const fileInputBtn = document.getElementById("fileInputBtn");
fileInputBtn.addEventListener("change", imageInputUpload);

function imageInputUpload(e) {
  let reader = new FileReader();
  let img = new Image();

  reader.onload = function (event) {
    img.onload = function () {
      // 이미지 로딩이 완료되면 실행되는 함수
      imgX = img.width;
      imgY = img.height;

      img.height = 600 * ((imgY * 100) / imgX / 100);
      img.width = 600;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
}
