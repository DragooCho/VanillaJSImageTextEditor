const selectTextColor = document.getElementById("selectTextColor");
const colorPicker = document.getElementById("color_picker");

selectTextColor.addEventListener("click", textColorInputHandler);
colorPicker.addEventListener("input", colorPickerInputHandler);

let textColorValue = selectTextColor.value;

function textColorInputHandler(e) {
  textColorValue = e.target.value;
  colorPicker.value = e.target.value;
}
function colorPickerInputHandler(e) {
  textColorValue = e.target.value;
  selectTextColor.value = e.target.value;
}
