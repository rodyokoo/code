const fs = require('fs').promises;
const express = require('express');
app = express();
global.fileName = 'grades.json';
app.use(express.json());

app.listen(3000, async () => {
  try {
    await fs.readFile('./grades.json', 'utf8');
    console.log('API started!');
  } catch (err) {
    console.log(err);
  }
});

app.get('/grades', async (req, res) => {
  try {
    let data = await fs.readFile('grades.json', 'utf8');
    let json = JSON.parse(data);

    res.send(json);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.get('/grades/media', async (req, res) => {
  let arr = [];
  try {
    let data = await fs.readFile('grades.json', 'utf8');
    let json = JSON.parse(data);
    for (let i = 0; i < json.nextId - 1; i++) {
      if (
        json.grades[i].subject === '04 - MongoDB' &&
        json.grades[i].type === 'Trabalho Prático'
      ) {
        arr.push(json.grades[i].value);
      }
    }
    let media = arr.reduce((media, ar) => media + ar, 0) / arr.length;
    res.send(`a média é: ${media}`);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.get('/grades/total', async (req, res) => {
  let arr = [];
  try {
    let data = await fs.readFile('grades.json', 'utf8');
    let json = JSON.parse(data);
    for (let i = 0; i < json.nextId - 1; i++) {
      if (
        json.grades[i].student === 'Loiane Groner' &&
        json.grades[i].subject === '02 - Node'
      ) {
        arr.push(json.grades[i].value);
      }
    }
    let media = arr.reduce((media, ar) => media + ar, 0);
    res.send(`o total é: ${media}`);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.get('/grades/roberto', async (req, res) => {
  let arr = [];
  try {
    let data = await fs.readFile('grades.json', 'utf8');
    let json = JSON.parse(data);
    for (let i = 0; i < json.nextId - 1; i++) {
      if (
        json.grades[i].student === 'Roberto Achar' &&
        json.grades[i].subject === '03 - React'
      ) {
        arr.push(json.grades[i].value);
      }
    }
    let media = arr.reduce((media, ar) => media + ar, 0);
    res.send(`o total é: ${media} ${arr}`);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.get('/grades/melhores', async (req, res) => {
  let arr = [];
  try {
    let data = await fs.readFile('grades.json', 'utf8');
    let json = JSON.parse(data);
    for (let i = 0; i < json.nextId - 1; i++) {
      if (
        json.grades[i].subject === '03 - React' &&
        json.grades[i].type === 'Trabalho Prático'
      ) {
        arr.push(json.grades[i]);
      }
    }
    arr.sort(function (a, b) {
      return a.value < b.value ? 1 : a.value > b.value ? -1 : 0;
    });
    res.send(arr);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.post('/grades/adicionar', async (req, res) => {
  let grade = req.body;
  try {
    let data = await fs.readFile('grades.json', 'utf8');
    let json = JSON.parse(data);

    grade = { id: json.nextId++, ...grade };
    json.grades.push(grade);

    await fs.writeFile(global.fileName, JSON.stringify(json));
    res.end();
    console.log('deu certo');
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.delete('/grades/:id', async (req, res) => {
  try {
    let data = await fs.readFile(global.fileName, 'utf8');
    let json = JSON.parse(data);
    let grades = json.grades.filter(
      (grade) => grade.id !== parseInt(req.params.id, 10)
    );
    json.grades = grades;
    await fs.writeFile(global.fileName, JSON.stringify(json));
    res.end();
    console.log('deletado');
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.put('/grades', async (req, res) => {
  try {
    let newGrade = req.body;
    let data = await fs.readFile(global.fileName, 'utf8');
    let json = JSON.parse(data);
    let oldIndex = json.grades.findIndex((grade) => grade.id === newGrade.id);
    json.grades[oldIndex].value = newGrade.value;
    await fs.writeFile(global.fileName, JSON.stringify(json));
    res.end();
    console.log('informação atualizada');
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});
