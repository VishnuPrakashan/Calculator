function displaydata(data) {
  result.value += data;
}

function allClear() {
  result.value = "";
}

function evaluateData() {
  result.value = eval(result.value);
}

function removeData() {
  result.value = result.value.slice(0, -1);
}
