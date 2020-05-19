window.addEventListener('load', start);
function start() {
  console.log('page loaded!');
}
document.getElementById('startButton').addEventListener('click', function () {
  let futureDate = document.getElementById('date').value;
  let arrDate = futureDate.split('-');
  let futureYear = parseInt(arrDate[0], 10);
  let futureMonth = parseInt(arrDate[1], 10);
  let futureDay = parseInt(arrDate[2], 10);
  console.log(futureYear + '-' + futureMonth + '-' + futureDay);
  let today = new Date();
  let todayDate = [today.getFullYear(), today.getMonth() + 1, today.getDate()];
  let future = totalDays(futureYear, futureMonth, futureDay);
  let present = totalDays(todayDate[0], todayDate[1], todayDate[2]);
  document.getElementById('dateLeft').innerHTML =
    future - present + ' day(s) to your dead line';
  let time = document.getElementById('time').value;
  console.log(time);
});

function totalDays(year, month, day) {
  let yearNum =
    year * 365 +
    Math.trunc((year - 1) / 4) -
    (Math.trunc((year - 1) / 100) - Math.trunc((year - 1) / 400));

  let monthNum;
  if (month === 1) {
    monthNum = 0;
  } else if (month === 2) {
    monthNum = 31;
  } else if (month === 3) {
    monthNum = 31 + 28;
  } else if (month === 4) {
    monthNum = 31 + 28 + 31;
  } else if (month === 5) {
    monthNum = 31 + 28 + 31 + 30;
  } else if (month === 6) {
    monthNum = 31 + 28 + 31 + 30 + 31;
  } else if (month === 7) {
    monthNum = 31 + 28 + 31 + 30 + 31 + 30;
  } else if (month === 8) {
    monthNum = 31 + 28 + 31 + 30 + 31 + 30 + 31;
  } else if (month === 9) {
    monthNum = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31;
  } else if (month === 10) {
    monthNum = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
  } else if (month === 11) {
    monthNum = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
  } else if (month === 12) {
    monthNum = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
  }

  if (month > 2) {
    if (year % 400 === 0) {
      monthNum = monthNum + 1;
    }
    if (year % 100 !== 0 && year % 4 === 0) {
      monthNum = monthNum + 1;
    }
  }
  let dayNum = day;
  return yearNum + monthNum + dayNum;
}
