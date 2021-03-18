const selectTextColor = document.getElementById("selectTextColor");
selectTextColor.addEventListener("change", textColorInputHandler);
let textColorValue = selectTextColor.value;

function textColorInputHandler(e) {
  textColorValue = e.target.value;
}
