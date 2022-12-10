// Dependencies
const express = require('express');

const app = express();


const PORT = 3000;



// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});



// Listener
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
