window.addEventListener('load', start);
function start() {
  console.log('page loaded');
}

function leftPad(value, count = 2, char = '0') {
  const stringValue = value.toString();
  let newValue = stringValue;
  if (stringValue.length < count) {
    for (let i = 0; i < count - stringValue.length; i++) {
      newValue = char + newValue;
    }
  }
  return newValue;
}
let click = 0;
function add() {
  let dia = document.querySelector('#dia').innerHTML;
  const now = new Date();
  let result = '';
  result += leftPad(now.getDate());
  result += '/';
  result += leftPad(now.getMonth() + 1);
  result += '/';
  result += now.getFullYear();
  result += ' ';
  result += now.getHours();
  result += ':';
  result += now.getMinutes();
  result += ':';
  result += leftPad(now.getSeconds());
  result += '.';
  result += leftPad(now.getMilliseconds(), 3);
  dia += `<li>${result}</li>`;
  document.querySelector('#dia').innerHTML = dia;
  click++;
  document.title = click;
}
