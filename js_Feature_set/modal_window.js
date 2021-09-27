const modalBg = document.querySelector("body");
const modal = document.querySelector("#modal");

const fileCheckingWarning = (flieSrc) => {
  const fileFormat = flieSrc.src.match(/data:image/);

  if (!fileFormat) {
    modalBg.classList.add("modal_BG");
    modal.style.display = "flex";
  }
};

const modalOut = () => {
  console.log("modal Evn");
  modal.style.display = "none";
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
