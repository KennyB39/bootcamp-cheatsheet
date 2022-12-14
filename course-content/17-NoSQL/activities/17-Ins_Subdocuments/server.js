const express = require('express');
const db = require('./config/connection');
// Require model
const { Department } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Finds all departments
app.get('/all-departments', (req, res) => {
  // Using model in route to find all documents that are instances of that model



  Department.find({}, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
     
      res.status(200).send(result);
    }
  });
});


app.get('/all-departments-instance', (req, res) => {
  // Using model in route to find all documents that are instances of that model



  Department.find({}, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      // run the custom instance method on an instance of an employee
      result[0].employees[0].getDocumentInfo()

      // Documents have access to a range of built-in instance methods like get()
      // The instance method .get() takes in three parameters: 
      // the path, and two optional parameters, type and options. 
      // In our case, we are getting the value of totalStock and we want it returned as a String. 
      // We didn't use options in our case.
      // https://mongoosejs.com/docs/api/document.html
      // https://mongoosejs.com/docs/api/document.html#document_Document-get
      console.log("salary", result[0].employees[0].get('salary', String))

      // have a look at the sub documents :) 
      // http://localhost:3001/all-departments
      res.status(200).send(result);
    }
  });
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
