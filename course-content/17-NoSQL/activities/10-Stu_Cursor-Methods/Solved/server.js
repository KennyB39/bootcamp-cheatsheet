const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://localhost:27017/numbersDB`;

let db;

const data = [
  { number: 1 },
  { number: 7 },
  { number: -3 },
  { number: 11 },
  { number: 12 },
  { number: 1000 },
  { number: 8 },
  { number: 2 },
  { number: 15 },
  { number: 4 },
  { number: 2 },
  { number: 90 },
];

// A Moving Window (batch)
// https://www.mongodb.com/docs/manual/reference/method/db.collection.find/#cursor-handling
// Executing db.collection.find() in mongosh automatically iterates the cursor to display up to the first 20 documents. Type it to continue iteration.

// db.numberList.insertMany([
//   { number: 1 },
//   { number: 2 },
//   { number: 3 },
//   { number: 4 },
//   { number: 5 },
//   { number: 6 },
//   { number: 7 },
//   { number: 8 },
//   { number: 9 },
//   { number: 10 },
//   { number: 11 },
//   { number: 12 },
//   { number: 12 },
//   { number: 13 },
//   { number: 14 },
//   { number: 15 },
//   { number: 16 },
//   { number: 17 },
//   { number: 18 },
//   { number: 19 },
//   { number: 20 },
//   { number: 21 },
//   { number: 22 },
//   { number: 23 },
//   { number: 24 }
// ])

// db.numberList.find().sort({ number: -1 }).skip(1);

// { _id: ObjectId("637c8a4d4f1b46d2a9968bbe"), number: 24 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bbd"), number: 23 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bbc"), number: 22 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bbb"), number: 21 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bba"), number: 20 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb9"), number: 19 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb8"), number: 18 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb7"), number: 17 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb6"), number: 16 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb5"), number: 15 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb4"), number: 14 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb3"), number: 13 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb1"), number: 12 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb2"), number: 12 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb0"), number: 11 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968baf"), number: 10 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bae"), number: 9 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bad"), number: 8 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bac"), number: 7 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bab"), number: 6 }


// db.numberList.find().sort({ number: -1 }).skip(5);

// { _id: ObjectId("637c8a4d4f1b46d2a9968bb9"), number: 19 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb8"), number: 18 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb7"), number: 17 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb6"), number: 16 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb5"), number: 15 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb4"), number: 14 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb3"), number: 13 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb1"), number: 12 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb2"), number: 12 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb0"), number: 11 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968baf"), number: 10 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bae"), number: 9 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bad"), number: 8 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bac"), number: 7 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bab"), number: 6 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968baa"), number: 5 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968ba9"), number: 4 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968ba8"), number: 3 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968ba7"), number: 2 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968ba6"), number: 1 }


// db.numberList.find().sort({ number: -1 }).limit(5);
// { _id: ObjectId("637c8a4d4f1b46d2a9968bbe"), number: 24 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bbd"), number: 23 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bbc"), number: 22 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bbb"), number: 21 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bba"), number: 20 }


// db.numberList.find().sort({ number: -1 }).skip(5).limit(5);

// { _id: ObjectId("637c8a4d4f1b46d2a9968bb9"), number: 19 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb8"), number: 18 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb7"), number: 17 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb6"), number: 16 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb5"), number: 15 }



// db.numberList.find().sort({ number: -1 }).limit(5).skip(5);

// { _id: ObjectId("637c8a4d4f1b46d2a9968bb9"), number: 19 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb8"), number: 18 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb7"), number: 17 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb6"), number: 16 }
// { _id: ObjectId("637c8a4d4f1b46d2a9968bb5"), number: 15 }


// db.numberList.find().sort({ number: -1 }).skip(1).limit(5).toArray();

// [
//   { _id: ObjectId("637c8a4d4f1b46d2a9968bbd"), number: 23 },
//   { _id: ObjectId("637c8a4d4f1b46d2a9968bbc"), number: 22 },
//   { _id: ObjectId("637c8a4d4f1b46d2a9968bbb"), number: 21 },
//   { _id: ObjectId("637c8a4d4f1b46d2a9968bba"), number: 20 },
//   { _id: ObjectId("637c8a4d4f1b46d2a9968bb9"), number: 19 }
// ]


// An Example
// class Db {
//   find() {
//     return new Cursor(data); 
//   } 
// }

// class Cursor {
//   constructor(array = []) {
//     this.array = array;
//     this.offset = 0;
//     this.limit = 0;
//   }

//   skip(offset) {
//     this.offset = offset;
//   }

//   limit(limit) {
//     this.limit = limit;
//   }

//   toArray() {
//     let ret = [];
//     if (this.limit !== 0) {
//       for (let i = this.offset; i < this.offset+this.limit && i < this.array.length; ++i) {
//         ret.push(this.array[i]);
//       }
//     }
//     else {
//       for (let i = this.offset; i < this.array.length; ++i) {
//         ret.push(this.array[i]);
//       }
//     }
//     return ret;
//   }
// }

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    db.collection('authorList').deleteMany({});
    db.collection('numberList').insertMany(data, (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log('Data inserted');
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());

// Get request to read all the documents in a collection
app.get('/read', (req, res) => {
  db.collection('numberList')
    // find() returns all documents. Equivalent to `Select *` in SQL.
    .find()
    // sort() sorts in ascending or descending order
    // Specify in the sort parameter the field or fields to sort by and a value 
    // of 1 or -1 to specify an ascending or descending sort respectively.
    // 1 ascending, -1 descending
    // https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/limit/
    // https://www.mongodb.com/docs/v6.0/reference/operator/aggregation/limit/
    // 'Limits' the number of documents passed to the next stage in the pipeline.
    // 'Skips' over the specified number of documents that pass into the stage and passes the remaining documents to the next stage in the pipeline.
    .sort({ number: -1 })
    .skip(5)
    .limit(5)
    // The toArray() method returns an array that contains all the documents from a cursor. 
    // The method iterates completely through the cursor
    .toArray((err, results) => {
      // Handles error or results
      if (err) throw err;
      res.send(results);
    });
});



