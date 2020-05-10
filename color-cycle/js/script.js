window.addEventListener('load', start);
function start() {
  change();
}

function change() {
  setInterval(color, 100);
}

var i = 0;
var j = 0;
function color() {
  if (i < 255) {
    document.getElementById('body').style.backgroundColor =
      'rgb(' + i + ', 0, 0)';
    i++;
    console.log(i);
  }
}
