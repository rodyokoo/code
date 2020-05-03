window.addEventListener('load', console.log('page loaded!'));
var square = document.getElementById('square');
function toTopLeft25() {
  square.style.borderTopLeftRadius = '25%';
}
function toTopLeft50() {
  square.style.borderTopLeftRadius = '50%';
}
function toTopRight25() {
  square.style.borderTopRightRadius = '25%';
}
function toTopRight50() {
  square.style.borderTopRightRadius = '50%';
}
function toBottomLeft25() {
  square.style.borderBottomLeftRadius = '25%';
}
function toBottomLeft50() {
  square.style.borderBottomLeftRadius = '50%';
}
function toBottomRight25() {
  square.style.borderBottomRightRadius = '25%';
}
function toBottomRight50() {
  square.style.borderBottomRightRadius = '50%';
}
function toReset() {
  location.reload();
}
function cssWrite() {
  var topLeftRadius = document.getElementById('topLeftRadius');
  if (
    square.style.borderTopLeftRadius === '0%' ||
    square.style.borderTopLeftRadius === ''
  ) {
    topLeftRadius.textContent = 'border-top-left-radius: 0%;';
  } else if (square.style.borderTopLeftRadius === '25%') {
    topLeftRadius.textContent = 'border-top-left-radius: 25%;';
  } else if (square.style.borderTopLeftRadius === '50%') {
    topLeftRadius.textContent = 'border-top-left-radius: 50%;';
  }

  var topRightRadius = document.getElementById('topRightRadius');
  if (
    square.style.borderTopRightRadius === '0%' ||
    square.style.borderTopRightRadius === ''
  ) {
    topRightRadius.textContent = 'border-top-right-radius: 0%;';
  } else if (square.style.borderTopRightRadius === '25%') {
    topRightRadius.textContent = 'border-top-right-radius: 25%;';
  } else if (square.style.borderTopRightRadius === '50%') {
    topRightRadius.textContent = 'border-top-right-radius: 50%;';
  }

  var bottomLeftRadius = document.getElementById('bottomLeftRadius');
  if (
    square.style.borderBottomLeftRadius === '0%' ||
    square.style.borderBottomLeftRadius === ''
  ) {
    bottomLeftRadius.textContent = 'border-bottom-left-radius: 0%;';
  } else if (square.style.borderBottomLeftRadius === '25%') {
    bottomLeftRadius.textContent = 'border-bottom-left-radius: 25%;';
  } else if (square.style.borderBottomLeftRadius === '50%') {
    bottomLeftRadius.textContent = 'border-bottom-left-radius: 50%;';
  }

  var bottomRightRadius = document.getElementById('bottomRightRadius');
  if (
    square.style.borderBottomRightRadius === '0%' ||
    square.style.borderBottomRightRadius === ''
  ) {
    bottomRightRadius.textContent = 'border-bottom-left-radius: 0%;';
  } else if (square.style.borderBottomRightRadius === '25%') {
    bottomRightRadius.textContent = 'border-bottom-left-radius: 25%;';
  } else if (square.style.borderBottomRightRadius === '50%') {
    bottomRightRadius.textContent = 'border-bottom-left-radius: 50%;';
  }
}
