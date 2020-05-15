window.addEventListener('load', start);
function start() {
  console.log('page loaded!');
}
document.getElementById('startButton').addEventListener('click', function () {
  let futureDate = document.getElementById('date').value;
  let arrDate = futureDate.split('-');
  let futureYear = parseInt(arrDate[0], 10);
  let futureMouth = parseInt(arrDate[1], 10);
  let futureDay = parseInt(arrDate[2], 10);
  console.log(futureYear + '-' + futureMouth + '-' + futureDay);
  console.log('|' + futureDate + '|');
});
