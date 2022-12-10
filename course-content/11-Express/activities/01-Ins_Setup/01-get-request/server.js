// Dependencies
const express = require('express');

const app = express();

const PORT = 3000;



// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

app.get('/yoda', (req, res) => {
  res.json({
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000,
  });
});

app.get('/darthmaul', (req, res) => {
  res.json({
      name: 'Darth Maul',
      role: 'Sith Lord',
      age: 200,
      forcePoints: 1200,
    });
});

app.get("/farfarwittles", function(req, res) {
  res.json({
    name: "Darth Far Far",
    role: "filth Lord",
    age: 5,
    forcePoints: 100000
  });
});



// Listener
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
