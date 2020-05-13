window.addEventListener('load', bigSquare);

/*first fail version
document.getElementById('red').addEventListener('keyup', function () {
  var red = parseInt(document.getElementById('red').value, 10);
  if (red > 255) {
    document.getElementById('red').value = 255;
    red = 255;
  } else if (red < 0) {
    document.getElementById('red').value = 0;
  } else if (isNaN(red) === true) {
    document.getElementById('red').value = 0;
    red = 0;
  }
  document.getElementById('redSquare').style.backgroundColor =
    'rgb(' + red + ', 0, 0)';
});

document.getElementById('green').addEventListener('keyup', function () {
  var green = parseInt(document.getElementById('green').value, 10);
  if (green > 255) {
    document.getElementById('green').value = 255;
    green = 255;
  } else if (green < 0) {
    document.getElementById('green').value = 0;
  } else if (isNaN(green) === true) {
    document.getElementById('green').value = 0;
    green = 0;
  }
  document.getElementById('greenSquare').style.backgroundColor =
    'rgb(0, ' + green + ', 0)';
});

document.getElementById('blue').addEventListener('keyup', function () {
  var blue = parseInt(document.getElementById('blue').value, 10);
  if (blue > 255) {
    document.getElementById('blue').value = 255;
    blue = 255;
  } else if (blue < 0) {
    document.getElementById('blue').value = 0;
  } else if (isNaN(blue) === true) {
    document.getElementById('blue').value = 0;
    blue = 0;
  }
  document.getElementById('blueSquare').style.backgroundColor =
    'rgb(0, 0, ' + blue + ')';
});*/

let red = document.getElementById('red');
red.addEventListener('input', function () {
  document.getElementById('redSquare').style.backgroundColor =
    'rgb(' + parseInt(red.value, 10) + ', 0,0)';
  bigSquare(red.value, green.value, blue.value);
});

let green = document.getElementById('green');
green.addEventListener('input', function () {
  document.getElementById('greenSquare').style.backgroundColor =
    'rgb(0, ' + parseInt(green.value, 10) + ',0)';
  bigSquare(red.value, green.value, blue.value);
});

let blue = document.getElementById('blue');
blue.addEventListener('input', function () {
  document.getElementById('blueSquare').style.backgroundColor =
    'rgb(0, 0, ' + parseInt(blue.value, 10) + ')';
  bigSquare(red.value, green.value, blue.value);
});

function bigSquare(red, green, blue) {
  document.getElementById('bigSquare').style.backgroundColor =
    'rgb(' + red + ', ' + green + ', ' + blue + ')';
  document.getElementById('startButton').addEventListener('click', function () {
    if (typeof blue === 'undefined') {
      document.querySelector('#rgb').textContent = 'RGB(122, 122, 122)';
      console.log('click');
    }
  });
}
