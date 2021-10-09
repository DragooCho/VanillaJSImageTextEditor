const modalBg = document.querySelector("body");
const modal = document.querySelector(".modal");
const container = document.querySelector("container");

const fileCheckingWarning = (flieSrc) => {
  const fileFormat = flieSrc.src.match(/data:image/);
  if (!fileFormat) setModal();
};

modal.addEventListener("click", modalOut);

function setModal() {
  modal.style.display = "flex";
  container.style.display = "none";
  modalBg.classList.add("modal_BG");
}

function modalOut() {
  modal.style.display = "none";
  container.style.display = "block";
  modalBg.classList.remove("modal_BG");
}
