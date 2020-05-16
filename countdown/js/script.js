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
  year(futureYear, futureMouth, futureDay);
});

function year(year, mouth, day) {
  let yearNum =
    year * 365 + year / 4 - (Math.trunc(year / 100) - Math.trunc(year / 400));
  let mouthNum;
  if (mouth === 1) {
    mouthNum = 0;
  } else if (mouth === 2) {
    mouthNum = 31;
  }
  console.log(yearNum);
  console.log(mouthNum);
  console.log(yearNum + mouthNum);
}
