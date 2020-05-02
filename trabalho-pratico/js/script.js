function getGroupMembers() {
  const members = [
    'John Petrucci',
    'Mike Mangini',
    'James Labrie',
    'John Myung',
  ];

  return members.sort();
}

function getFullName(...names) {
  return names.join(' ');
}

function transform(input) {
  return input.map((item) => item / 10 + 1);
}

function onlyNumbersFrom(value) {
  return value
    .split('')
    .filter((char) => {
      return !isNaN(char) && char !== ' ';
    })
    .join('');
}

console.log(getGroupMembers());
console.log(getFullName('Raphael', 'Gomide', 'Peart'));
console.log(transform([10, 20, 30, 40, 50]));
console.log(onlyNumbersFrom('23423423k4j23 4lk23j4 23lkjk..m,mkakj!'));
