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
  future(futureYear, futureMouth, futureDay);
});

function future(year, mouth, day) {
  let yearNum =
    year * 365 +
    Math.trunc((year - 1) / 4) -
    (Math.trunc((year - 1) / 100) - Math.trunc((year - 1) / 400));

  let mouthNum;
  if (mouth === 1) {
    mouthNum = 0;
  } else if (mouth === 2) {
    mouthNum = 31;
  } else if (mouth === 3) {
    mouthNum = 31 + 28;
  } else if (mouth === 4) {
    mouthNum = 31 + 28 + 31;
  } else if (mouth === 5) {
    mouthNum = 31 + 28 + 31 + 30;
  } else if (mouth === 6) {
    mouthNum = 31 + 28 + 31 + 30 + 31;
  } else if (mouth === 7) {
    mouthNum = 31 + 28 + 31 + 30 + 31 + 30;
  } else if (mouth === 8) {
    mouthNum = 31 + 28 + 31 + 30 + 31 + 30 + 31;
  } else if (mouth === 9) {
    mouthNum = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31;
  } else if (mouth === 10) {
    mouthNum = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
  } else if (mouth === 11) {
    mouthNum = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
  } else if (mouth === 12) {
    mouthNum = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
  }

  if (mouth > 2) {
    if (year % 400 === 0) {
      mouthNum = mouthNum + 1;
    }
    if (year % 100 !== 0 && year % 4 === 0) {
      mouthNum = mouthNum + 1;
    }
  }
  let dayNum = day;

  console.log(yearNum);
  console.log(mouthNum);
  console.log(dayNum);
  console.log(yearNum + mouthNum + dayNum);
}
