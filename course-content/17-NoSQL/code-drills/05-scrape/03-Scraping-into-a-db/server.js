const express = require('express');
var request = require("request");
var cheerio = require("cheerio");
// Run npm install mongodb and require mongodb and MongoClient class
// 🔑 To integrate MongoDB into an existing Express server, 
//we must install the mongodb package using the command npm install mongodb, and require mongodb and the MongoClient class in the server.js file.
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

// Connection string to local instance of MongoDB including database name
// 🔑 We connect to a local instance of MongoDB, including the database name, 
// using mongodb://localhost:27017/ and appending the database name.
const connectionStringURI = `mongodb://localhost:27017/scraperDB`;

// Declare a variable to hold the connection
let db;


mongodb.connect(
  // Defines connection between app and MongoDB instance
  connectionStringURI,
  // Sets connection string parser and Server Discover and Monitoring engine to true and avoids warning
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    // Use client.db() constructor to add new db instance
    // 🔑 We then use the db variable to create a connection to a MongoDB instance 
    // and return the reference to the database.
    db = client.db();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);




// Main route (simple Hello World Message)
app.get("/", function(req, res) {
  res.send("Hello world");
});




app.get("/all", function(req, res) {
  db.collection('scrapeCollection')
  // find() returns all documents. Equivalent to `Select *` in SQL.
  .find({})
  // Returns all the documents in an array
  .toArray((err, results) => {
    // Handles error or results
    if (err) throw err;
    res.json(results);
  });

});






// Scrape data from one site and place it into the mongodb db
app.get("/scrape", function(req, res) {
  // Make a request for the news section of `ycombinator`
  request("https://news.ycombinator.com/", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    // For each element with a "title" class
    $(".titleline").each(function(i, element) {
      // Save the text and href of each link enclosed in the current element


      // Save the text and href of each link enclosed in the current element
      var title = $(element).children("a").text();
      var link = $(element).children("a").attr("href");
      var obj = { title: title, link: link };
        console.log(obj);
      // If this found element had both a title and a link
      if (title && link) {

        // Insert the data in the scrapedData db
        db.collection('scrapeCollection').insertOne(
          { title: title, link: link },
          // Handles error or results
          (err, results) => {
            if (err){
              throw err;
            } 
          }
        );
        };
      });

      
    });
    // Send a "Scrape Complete" message to the browser
    res.send("Scrape Complete");
  });

  



// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
