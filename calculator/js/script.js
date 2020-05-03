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
