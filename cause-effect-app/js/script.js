window.addEventListener('load', start);
function start() {
  for (var i = 0; i < person.length; i++) {
    document.getElementById('person').innerHTML +=
      '<li id="' + i + '" >' + person[i].name + '</li>';
    console.log(person[i].name);
  }
}
document.getElementById('person').addEventListener('click', function (e) {
  var i = parseInt(e.target.id, 10);
  document.getElementById('data').innerHTML =
    'address: ' +
    person[i].street +
    '<br>' +
    'city: ' +
    person[i].city +
    '<br>' +
    'state: ' +
    person[i].state +
    '<br>' +
    'country: ' +
    person[i].country +
    '<br>' +
    'telephone: ' +
    person[i].telephone +
    '<br>' +
    'birthday: ' +
    person[i].birthday +
    '<br>';
  console.log(i);
});
