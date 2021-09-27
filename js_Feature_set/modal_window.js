const modalBg = document.querySelector("body");
const modal = document.querySelector(".modal");
const container = document.querySelector("container");

const fileCheckingWarning = (flieSrc) => {
  const fileFormat = flieSrc.src.match(/data:image/);

  if (!fileFormat) {
    modal.style.display = "flex";
    container.style.display = "none";
    modalBg.classList.add("modal_BG");
  }
};

const modalOut = () => {
  modal.style.display = "none";
  container.style.display = "block";
  modalBg.classList.remove("modal_BG");
};

modal.addEventListener("click", modalOut);
// modalBg.addEventListener("click", modalOut);

// const fileCheckingWarning = (file, flieSrc) => {
//   const fileFormat = flieSrc.src.match(/data:image/);

//   if (!fileFormat) {
//     alert(`${file} 파일형식으로 넣어주세요!!!`);
//   }
// };
