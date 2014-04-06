var express = require("express");
var app = express();

app.get('/hello.txt', function(req, res) {
	res.send('Hello World');
});

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});

console.log("hello world");

 var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

  MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
	    //console.log("connected to db");
	    if(err) throw err;

	    var collection = db.collection('test_insert');
	    collection.insert({a:2}, function(err, docs) {
	    	console.log("the error is ", err);
	    	console.log("the docs are ", docs);

	      	collection.count(function(err, count) {
	      		console.log(format("count = %s", count));
	     	});

	    //   // Locate all the entries using find
	       collection.find().toArray(function(err, results) {
	        console.dir(results);
	    //     // Let's close the db
	         db.close();
	       });
	     });
	    console.log("Hello2");
  })