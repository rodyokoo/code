window.addEventListener('load', () => {
  console.log('page loaded');
  searchResult();
});

let person;

function searchText() {
  person = document.querySelector('#buscaTexto').value.toLowerCase();
  searchResult();
}

document.addEventListener('keydown', function (event) {
  if (event.keyCode !== 13) return;
  searchText();
});

let personResult;

function searchResult() {
  let firstResult = people.results.filter(
    (personSearch) => personSearch.name.first.toLowerCase() == person
  );
  let lastResult = people.results.filter(
    (personSearch) => personSearch.name.last.toLowerCase() == person
  );
  personResult = [...firstResult, ...lastResult];
  console.log(personResult);
}
