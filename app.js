let inputFiled = document.getElementById("input");
let resultfiled = document.getElementById("result");

function appendValue(value) {
  inputFiled.textContent += value;
}

function cleardisplay() {
  inputFiled.textContent = "";
  resultfiled.textContent = "";
}
function calculateResult() {
  try {
    resultfiled.textContent = eval(inputFiled.textContent);
  } catch (e) {
    resultfiled.textContent = "error";
  }
}
