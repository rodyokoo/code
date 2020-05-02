// exercicio 01
const getGroupMembers = () => {
  let nomes = [
    'Gabriel Santos',
    'Andre Bom',
    'Caroline Messias',
    'Emerson Martins',
    'Marcos Faria',
    'Rodrigo Yokoo',
  ];
  nomes.sort();
  return nomes;
};

// exercicio 02
function getFullName(...names) {
  return names.join(' ');
}

// exercicio 03
function transform(input) {
  return input.map((item) => item / 10 + 1);
}

// exercicio 04
function onlyNumbersFrom(value) {
  return value
    .split('')
    .filter((char) => {
      return !isNaN(char) && char !== ' ';
    })
    .join('');
}

console.log(getGroupMembers());
console.log(getFullName('Rodrigo', 'Seniti', 'da', 'Rosa', 'Yokoo'));
console.log(transform([61, 72, 83, 94]));
console.log(onlyNumbersFrom('op´5345´p564wegtwe  q564'));
