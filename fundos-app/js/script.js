window.addEventListener('load', start);
var dividendo = 0.12;
var valorCota = 15;

function start() {
  console.log('página carregada');
  var valorInvestido = document.querySelector('#valorInvestido');
  valorInvestido.addEventListener('keyup', calcular);
}

function calcular(event) {
  var valor =
    parseInt(
      document.querySelector('#valorInvestido').value.replace(/\D+/g, '')
    ) * 0.01;
  console.log(valor);
  var cotas = document.querySelector('#cotas');
  var quantidadeCotas = Math.floor(valor / valorCota);
  cotas.textContent = 'A quantidade de cotas é: ' + quantidadeCotas;
  var retorno = document.querySelector('#retorno');
  retorno.textContent =
    'O valor estimado a ser recebido é de: R$ ' +
    (dividendo * quantidadeCotas).toFixed(2);
  var valorNaoUtilizado = document.querySelector('#valorNaoUtilizado');
  valorNaoUtilizado.textContent =
    'O valor remanescente é de: R$ ' + (valor % valorCota).toFixed(2);
}
