window.addEventListener('load', console.log('page loaded!'));

var person = [
  {
    name: 'Rodrigo',
    street: 'João Pessoa Street',
    city: 'Campo Grande',
    state: 'MS',
    country: 'Brazil',
    telephone: '99999999',
    birthday: '06/04',
  },
  {
    name: 'Flávia',
    street: 'João Pessoa Street',
    city: 'Campo Grande',
    state: 'MS',
    country: 'Brazil',
    telephone: '99999999',
    birthday: '12/12',
  },
];
person.forEach(function (ind, name) {
  console.log(ind, name);
});
