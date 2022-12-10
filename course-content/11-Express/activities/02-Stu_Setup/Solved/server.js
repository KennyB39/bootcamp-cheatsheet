const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

//Note: Because we set up middleware for the public folder, 
//Express.js automatically looks for an index.html in the public folder to send when a user visits the root path. 
//Because we do have an index.html file in the public folder, that is shown in the browser now. 
//If we didn't have an index.html file in the public folder, the browser would display the message Navigate to /send or /routes.
//https://expressjs.com/en/api.html#res.send
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/farley.html'))


// https://nodejs.org/docs/latest/api/modules.html#__dirname
// The directory name of the current module. 
// The __dirname in a node script returns the path of the folder where the current module
// JavaScript file resides. __filename and __dirname are used to get the filename and directory name of the currently executing file.

//https://nodejs.org/api/path.html#pathjoinpaths
// The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.


app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))
);

app.get('/paths', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/paths.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
