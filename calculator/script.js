window.addEventListener('load', console.log('page loaded!'));

var onlyNum = function (event) {
  return (
    (event.charCode >= 48 && event.charCode <= 57) ||
    event.keyCode == 45 ||
    event.keyCode == 46
  );
};

var entry;
function num1() {
  entry = document.getElementById('entry').value;
  var num1 = '1';
  document.getElementById('entry').value = entry + num1;
}
function num2() {
  entry = document.getElementById('entry').value;
  var num2 = '2';
  document.getElementById('entry').value = entry + num2;
}
function num3() {
  entry = document.getElementById('entry').value;
  var num3 = '3';
  document.getElementById('entry').value = entry + num3;
}
function num4() {
  entry = document.getElementById('entry').value;
  var num4 = '4';
  document.getElementById('entry').value = entry + num4;
}
function num5() {
  entry = document.getElementById('entry').value;
  var num5 = '5';
  document.getElementById('entry').value = entry + num5;
}
function num6() {
  entry = document.getElementById('entry').value;
  var num6 = '6';
  document.getElementById('entry').value = entry + num6;
}
function num7() {
  entry = document.getElementById('entry').value;
  var num7 = '7';
  document.getElementById('entry').value = entry + num7;
}
function num8() {
  entry = document.getElementById('entry').value;
  var num8 = '8';
  document.getElementById('entry').value = entry + num8;
}
function num9() {
  entry = document.getElementById('entry').value;
  var num9 = '9';
  document.getElementById('entry').value = entry + num9;
}
function num0() {
  entry = document.getElementById('entry').value;
  var num0 = '0';
  document.getElementById('entry').value = entry + num0;
}
