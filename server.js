'use strict'

let express = require('express');
let bodyParser = require('body-parser');
let MongoClient = require('mongodb').MongoClient;
let ObjectId = require('mongodb').ObjectID;
let http = require('http');

let app = express();
let db;


app.use(express.static('static'));

 app.get('/api/swapi', function(req, resp) {

  http.get('http://swapi.co/api/', function(res, body){
      var body = '';

      res.on('data', function(chunk){
          body += chunk;
      });

      res.on('end', function(){
          app.use(bodyParser.json());
          var swapiResponse = JSON.parse(body);
          console.log("Got a response: ", swapiResponse);
          resp.send(swapiResponse)
      });
  }).on('error', function(e){
        console.log("Got an error: ", e);
  });
 });

MongoClient.connect('mongodb://localhost/bugsdb', function(err, dbConnection) {
  db = dbConnection;
  let server = app.listen(3000, function() {
	  let port = server.address().port;
	  console.log("Started server at port", port);
  });
});
