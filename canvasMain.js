const fileInputBtn = document.getElementById("fileInputBtn");
fileInputBtn.addEventListener("change", imageInputUpload);

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

function imageInputUpload(e) {
  let reader = new FileReader();
  let img = new Image();
  if (img) {
    reader.onload = function (event) {
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
    alert(img.src);
  } else {
    alert("이미지 파일이 아님니다.");
  }
}
