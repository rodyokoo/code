window.addEventListener('load', start);
function start() {
  console.log('page loaded!');
}
document.getElementById('startButton').addEventListener('click', function () {
  let fut = document.getElementById('date').value;
  console.log(fut);
});
