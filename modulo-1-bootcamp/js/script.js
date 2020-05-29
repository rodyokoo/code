window.addEventListener('load', () => {
  console.log('page loaded');
});

let person;
let usuarioNum = document.querySelector('#usuarioNum');
let informacoes = document.querySelector('#informacoes');
let masculino = document.querySelector('#masc');
let feminino = document.querySelector('#fem');
let somaIdade = document.querySelector('#sumAge');
let idadeMedia = document.querySelector('#avAge');

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
  let firstResult = people.results.filter((personSearch) =>
    personSearch.name.first.toLowerCase().includes(person)
  );
  let lastResult = people.results.filter((personSearch) =>
    personSearch.name.last.toLowerCase().includes(person)
  );
  const personResult0 = [...firstResult, ...lastResult];
  const setUnico = new Set(personResult0);
  personResult = [...setUnico];
  info(personResult);
}

function info(personResult) {
  let li = document.querySelector('#usuarioInfo');
  li.innerHTML = '';

  var masc = 0;
  var fem = 0;
  var sumAge = 0;
  var avAge = 0;
  for (let i = 0; i < personResult.length; i++) {
    let item = document.createElement('li');
    let pic = document.createElement('IMG');
    pic.setAttribute('src', personResult[i].picture.thumbnail);
    item.appendChild(
      document.createTextNode(
        personResult[i].name.first +
          ' ' +
          personResult[i].name.last +
          ', ' +
          personResult[i].dob.age +
          ' anos'
      )
    );
    li.appendChild(pic);
    li.appendChild(item);

    if (personResult[i].gender === 'male') {
      masc++;
    } else {
      fem++;
    }

    sumAge += personResult[i].dob.age;

    avAge = sumAge / personResult.length;
  }

  if (personResult.length > 0) {
    usuarioNum.textContent = personResult.length + ' usuário(s) encontrado(s)';
    informacoes.textContent = 'Estatísticas';
    masculino.textContent = 'Sexo masculino: ' + masc;
    feminino.textContent = 'Sexo feminino: ' + fem;
    somaIdade.textContent = 'Soma das idades: ' + sumAge;
    idadeMedia.textContent = 'Média de idades: ' + avAge;
  } else {
    usuarioNum.textContent = 'Nenhum usuário encontrado';
    informacoes.textContent = 'Nada a ser exibido';
  }
}
