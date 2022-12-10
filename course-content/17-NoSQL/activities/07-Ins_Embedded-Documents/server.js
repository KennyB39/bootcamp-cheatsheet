const express = require('express');
const mongodb = require('mongodb').MongoClient;
const data = require('./models/data');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://localhost:27017/groceryListDB`;

let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    // Drops any documents, if they exist
    db.collection('groceryList').deleteMany({});
    // Adds data to database
    db.collection('groceryList').insertMany(data, (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log("********");
      console.log(res.ops);
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());

// http://localhost:3001/sale-over-30
// This will return any documents with embedded documents that match
app.get('/sale-over-30', (req, res) => {
  db.collection('groceryList')
    // Use dot notation for embedded document
    // $gte specifies we want percentage discounts greater than 30
    // returns back all documents that have embedded documents that have percentage discounts greater than 30
    // https://www.mongodb.com/docs/v5.0/reference/operator/aggregation/#comparison-expression-operators
    .find({ 'promotion.percentage_discount': { $gte: 30 } })
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});

app.get('/sale-tuesday', (req, res) => {
  db.collection('groceryList')
    // Use dot notation for embedded document
    // $eq specifies we want value equal to 'Tuesday'
    // https://www.mongodb.com/docs/v5.0/reference/operator/aggregation/#comparison-expression-operators
    .find({ 'promotion.promotion_id': { $eq: 'Tuesday' } })
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});
