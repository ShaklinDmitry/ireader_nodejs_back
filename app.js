var express = require('express');
var fs = require('fs');
var cors = require('cors')

var app = express();
var book;

app.use(cors())

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
  if (err) {
    throw err;
  }
  db.collection('mammals').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
  });
});

//fs.readFile('data/avidreaders.ru__bhagavad-gita-kak-ona-est.txt', 'utf-8', function(err, contents) {
fs.readFile('data/avidreaders.ru__bhagavad-gita-kak-ona-est.pdf',  function(err, contents) {
//fs.readFile('data/HPSecretChamber', 'utf-8', function(err, contents) {
  book = contents;
});

app.use('/', function (req, res) {
//  res.contentType("application/pdf");
//  res.send('Hello World!');
  res.send(book);
});

app.listen(3004, function () {
  console.log('Example app listening on port 3000!');
});


