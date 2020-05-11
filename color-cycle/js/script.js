window.addEventListener('load', start);
function start() {
  change();
}

function change() {
  setInterval(color, 20);
}

var i = 0;
var j = 0;
var k = 0;
function color() {
  if (i < 255) {
    document.getElementById('body').style.backgroundColor =
      'rgb(' + i + ', 0, 0)';
    i++;
    console.log('i = ' + i);
  }
  if (i === 255 && j < 255) {
    document.getElementById('body').style.backgroundColor =
      'rgb(' + i + ', ' + j + ', 0)';
    j++;
    console.log('j = ' + j);
  }
  if (j === 255 && k < 255) {
    document.getElementById('body').style.backgroundColor =
      'rgb(' + i + ', ' + j + ', ' + k + ')';
    k++;
    console.log('k = ' + k);
  }
}
