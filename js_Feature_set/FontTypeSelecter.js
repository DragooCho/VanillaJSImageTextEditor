const optionSelectFont = document.getElementById("optionSelectFont");
optionSelectFont.addEventListener("change", fontTypeInputHandler);
let fontStyleValue = optionSelectFont.value;

function fontTypeInputHandler(e) {
  fontStyleValue = e.target.value;
}
