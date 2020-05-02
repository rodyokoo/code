window.addEventListener('load', start);
function start() {
  console.log('página carregada');
  var binary = document.querySelector('#binary');
  binary.addEventListener('keyup', bin);
}

function bin(event) {}
