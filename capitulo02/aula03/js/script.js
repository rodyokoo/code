var a = 5;
var b = 6;
if (a > b) {
  console.log(a + ' é maior que ' + b);
} else {
  if (a < b) {
    console.log(a + ' é menor que ' + b);
  } else {
    console.log(a + ' é igual a ' + b);
  }
}

var dia = 1;
var r = '';
switch (dia) {
  case 1:
    r = 'Domingo';
    break;
  case 2:
    r = 'Segunda';
    break;
  case 3:
    r = 'Terça';
    break;
  case 4:
    r = 'Quarta';
    break;
  case 5:
    r = 'Quinta';
    break;
  case 6:
    r = 'Sexta';
    break;
  case 7:
    r = 'Sábado';
    break;

  default:
    r = 'dia inválido';
}

console.log(r);

a = 6;
b = 7;
var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual';
console.log(resposta);

// somatório com while
var numeroAtual = 1;
var somatorio = 0;
while (numeroAtual <= 10) {
  somatorio += numeroAtual;
  numeroAtual++;
}
console.log(somatorio);
var numeroAtual = 1;
var somatorio = 0;
do {
  somatorio += numeroAtual;
  numeroAtual++;
} while (numeroAtual <= 10);
console.log(somatorio);
var somatorio = 0;
for (numeroAtual = 1; numeroAtual <= 10; numeroAtual++) {
  somatorio += numeroAtual;
}
console.log(somatorio);
