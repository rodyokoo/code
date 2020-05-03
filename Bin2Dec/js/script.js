window.addEventListener('load', start);
var binary;
function start() {
  console.log('página carregada');
}
var number;
function toNum() {
  binary = document.getElementById('binary').value;
  if (binary === '') {
    return alert('please, enter a binary number!');
  }
  binary.split('').map((char) => {
    if (char !== '0' && char !== '1') {
      alert('please, enter a binary number!');
      document.getElementById('binary').reset();
      document.getElementById('binary').value = '';
    }
  });
  number = document.querySelector('#numeric');
  number.textContent = 'Your numeric number is: ' + parseInt(binary, 2);
  console.log(parseInt(binary, 2));
}
