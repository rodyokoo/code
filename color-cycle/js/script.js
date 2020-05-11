window.addEventListener('load', start);
function start() {
  console.log('page loaded!!');
}
if (document.getElementById('red').value > 255) {
  document.getElementById('red').innerHTML = '255';
}
