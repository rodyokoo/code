window.addEventListener('load', console.log('page loaded!'));

function blink() {
  setInterval(red1, 200);
  setInterval(red2, 300);
  setInterval(orange1, 100);
  setInterval(orange2, 150);
  setInterval(yellow1, 100);
  setInterval(yellow2, 300);
  setInterval(green1, 200);
  setInterval(green2, 400);
  setInterval(blue1, 100);
  setInterval(blue2, 300);
  setInterval(purple1, 200);
  setInterval(purple2, 400);
  setInterval(magenta1, 100);
  setInterval(magenta2, 300);
}

function red1() {
  document.getElementById('red').style.margin = '0px';
  document.getElementById('red').style.padding = '20px';
}
function red2() {
  document.getElementById('red').style.margin = '10px';
  document.getElementById('red').style.padding = '10px';
}

function orange1() {
  document.getElementById('orange').style.margin = '0px';
  document.getElementById('orange').style.padding = '20px';
}
function orange2() {
  document.getElementById('orange').style.margin = '10px';
  document.getElementById('orange').style.padding = '10px';
}

function yellow1() {
  document.getElementById('yellow').style.margin = '0px';
  document.getElementById('yellow').style.padding = '20px';
}
function yellow2() {
  document.getElementById('yellow').style.margin = '10px';
  document.getElementById('yellow').style.padding = '10px';
}

function green1() {
  document.getElementById('green').style.margin = '0px';
  document.getElementById('green').style.padding = '20px';
}
function green2() {
  document.getElementById('green').style.margin = '10px';
  document.getElementById('green').style.padding = '10px';
}

function blue1() {
  document.getElementById('blue').style.margin = '0px';
  document.getElementById('blue').style.padding = '20px';
}
function blue2() {
  document.getElementById('blue').style.margin = '10px';
  document.getElementById('blue').style.padding = '10px';
}

function purple1() {
  document.getElementById('purple').style.margin = '0px';
  document.getElementById('purple').style.padding = '20px';
}
function purple2() {
  document.getElementById('purple').style.margin = '10px';
  document.getElementById('purple').style.padding = '10px';
}

function magenta1() {
  document.getElementById('magenta').style.margin = '0px';
  document.getElementById('magenta').style.padding = '20px';
}
function magenta2() {
  document.getElementById('magenta').style.margin = '10px';
  document.getElementById('magenta').style.padding = '10px';
}
