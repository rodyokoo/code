window.addEventListener('load', start);
function start() {
  console.log('page loaded!!');
}

function red() {
  var red = document.getElementById('red').value;
  /*if (red > 255) {
    document.getElementById('red').value = 255;
  } else if (isNaN(red) === true) {
    document.getElementById('red').value = '  0';
  }*/
  console.log('red = ' + red);
}

function green() {
  var green = parseInt(document.getElementById('green').value, 10);
  if (green > 255) {
    document.getElementById('green').value = 255;
  } else if (isNaN(green) === true) {
    document.getElementById('green').value = '  0';
  }
}

function blue() {
  var blue = parseInt(document.getElementById('blue').value, 10);
  if (blue > 255) {
    document.getElementById('blue').value = 255;
  } else if (isNaN(blue) === true) {
    document.getElementById('blue').value = '  0';
  }
}
