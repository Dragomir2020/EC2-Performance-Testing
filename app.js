//LOAD DEPENDANCIES
var express = require('express')
//CREATE EXPRESS INSTANCE
var app = express()
var elasticsearch = require('elasticsearch');

//ENABLE CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//HOMEPAGE ROUTING
app.get('/', function (req, res, next) {
	
	
	res.send("Hello World!");
	/*
	var client = new elasticsearch.Client({  // default is fine for me, change as you see fit
		host: 'localhost:9200'
		//log: 'trace'
	});
	
	 
	 //Add files to ES
	  client.create({
		index: "books", // name your index
		type: "action", // describe the data thats getting created
		id: Date.now(),// incremet ID every iteration
		body: {"id":12312313123,"book":"new write book"} 
	  }, function(error, response) {
		if (error) {
		  console.error(error);
		  return;
		}
		else {
		//console.log("Importing data!!"); 
		
			//Query ES
			client.msearch({
			  body: [
				// match all query, on all indices and types
				{},
				{ query: { match_all: {} } }

				// query_string query, on index/mytype
				//{ index: 'books', type: 'action'}
				//{ query: { query_string: { query: '"special book"' } } }
			  ]
			}, function(error, response) {
				if (error) {
				  console.error(error);
				  return;
				}
				else {
				//console.log("Searching Data!!"); 
				res.send(response)
				}
			  });
		
		}
	  });*/

})

//POST routing
app.post('/', function (req, res, next) {
  res.send('Hello World!')
  //console.log("Posted")
})

//LISTENING PORT
app.listen(8081, function () {
  console.log('Example app listening on port 8081!')//prints to command prompt
})

//BASIC ROUTING
//app = instance of express
//Method = POST GET OPTIONS
//PATH = path on server
//Handler = function executed when path is matched
app.get('/addBook/', function (req, res){ 
	res.send("HelloWorld")

})


