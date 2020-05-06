window.addEventListener('load', console.log('page loaded!'));

var onlyNum = function (event) {
  return (
    (event.charCode >= 48 && event.charCode <= 57) ||
    event.keyCode == 45 ||
    event.keyCode == 46
  );
};

var entry;

function numClearAll() {
  location.reload();
}

function numClear() {
  document.getElementById('entry').value = '';
}
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

function numDot() {
  entry = document.getElementById('entry').value;
  if (entry === '') {
    var numDot = '0.';
    document.getElementById('entry').value = entry + numDot;
  } else if (entry.split('').indexOf('.') !== -1) {
    document.getElementById('entry').value = entry;
  } else {
    var numDot = '.';
    document.getElementById('entry').value = entry + numDot;
  }
}

var plusEntry = '';
function numPlus() {
  plusEntry = parseFloat(document.getElementById('entry').value, 10);
  document.getElementById('entry').value = '';
}
document.addEventListener('keydown', function (event) {
  if (event.keyCode !== 107) return;
  numPlus();
});

var minusEntry = '';
function numMinus() {
  minusEntry = parseFloat(document.getElementById('entry').value, 10);
  document.getElementById('entry').value = '';
}
document.addEventListener('keydown', function (event) {
  if (event.keyCode !== 109) return;
  numMinus();
});

var timesEntry = '';
function numTimes() {
  timesEntry = parseFloat(document.getElementById('entry').value, 10);
  document.getElementById('entry').value = '';
}
/*document.addEventListener('keydown', function (event) {
  if (event.keyCode !== 106) return;
  numTimes();
});*/

var divEntry = '';
function numDivided() {
  divEntry = parseFloat(document.getElementById('entry').value, 10);
  document.getElementById('entry').value = '';
}
document.addEventListener('keydown', function (event) {
  if (event.keyCode !== 111) return;
  numDivided();
});

var equal;
function numEqual() {
  if (plusEntry !== '') {
    equal = plusEntry + parseFloat(document.getElementById('entry').value, 10);
    document.getElementById('entry').value = equal;
  }
  if (minusEntry !== '') {
    equal = minusEntry - parseFloat(document.getElementById('entry').value, 10);
    document.getElementById('entry').value = equal;
  }
  if (timesEntry !== '') {
    equal = timesEntry * parseFloat(document.getElementById('entry').value, 10);
    document.getElementById('entry').value = equal;
  }
  if (divEntry !== '') {
    equal = divEntry / parseFloat(document.getElementById('entry').value, 10);
    document.getElementById('entry').value = equal;
  }
}
document.addEventListener('keydown', function (event) {
  if (event.keyCode !== 13) return;
  numEqual();
});
