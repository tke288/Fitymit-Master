var express = require("express");
var bodyParser = require("body-parser");
var querystring = require('querystring');
var OauthParams = require('./OauthParams');
var http = require('https');
var Mongodb = require("mongodb");
var MongoClient = Mongodb.MongoClient
    , assert = require('assert');

// bring in the models
var db = require("./models");
var url = 'mongodb://localhost:27017/data';

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser())

app.get('/profiledata', function (req, res) {
  if (req.query.uid) {
    console.log(req.query.uid)
  getData(req.query.uid, function (record) {
      res.send(record);
      console.log("profiledata ", req.query);
  });
  }
  else {
    console.log("error")
    res.send("error")
  }})


app.post("/api/submit", function(req, res){
 console.log(req.body)
   var data = req.body;
  console.log("user: " + JSON.stringify(data))
   db.Profile.create(data)
   .then(function(dbPost) {
     res.json(dbPost);
   });
})

app.get("/api/getusers", function(req, res){
  console.log("profiles")
  db.Mentors.findAll()
  .then(function(data){
  res.json(data)
  })
})


app.get('/auth', function (req, res) {
  console.log("hello")
  // This is the redirect URI which linkedin will call to and provide state and code to verify
  //  Attached to the redirect_uri will be two important URL arguments that you need to read from the request:
  // code — The OAuth 2.0 authorization code.
  // state — A value used to test for possible CSRF attacks.

  //TODO: validate state here to secure against CSRF
  var error = req.query.error;
  var error_description = req.query.error_description;
  var state = req.query.state;
  var code = req.query.code;
  if (error) {
      next(new Error(error));
  }
  // The code is a value that you will exchange with LinkedIn for an actual OAuth 2.0 access
  // token in the next step of the authentcation process.  For security reasons, the authorization code
  // has a very short lifespan and must be used within moments of receiving it - before it expires and
  // you need to repeat all of the previous steps to request another.
  //once the code is received handshake back with linkedin to send over the secret key
  handshake(req.query.code, res);
})

function handshake(code, ores) {

  //set all required post parameters
  var data = querystring.stringify({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: OauthParams.redirect_uri,//should match as in Linkedin application setup
      client_id: OauthParams.client_id,
      client_secret: OauthParams.client_secret// the secret
  });

  var options = {
      host: 'www.linkedin.com',
      path: '/oauth/v2/accessToken',
      protocol: 'https:',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(data)
      }
  };
  
  var req = http.request(options, function (res) {
       var data = '';
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          data += chunk;

      });
      res.on('end', function () {
          //once the access token is received store in DB
          insertTodb(JSON.parse(data), function (id) {
              //need to find better way and proper authetication for the user
              ores.redirect('http://localhost:3000/auth/?uid=' + id);
          });
      });
      req.on('error', function (e) {
          console.log("problem with request: " + e.message);
      });

  });
  req.write(data);
  req.end();
  console.log(data);
}

//inserting token from handshake into mongo
function insertTodb(token, callback) {
    
  MongoClient.connect(url, function (err, db) {
      var collection = db.collection('documents');
      collection.insertOne(
          token
          , function (err, result) {
              callback(result.ops[0]._id);

          });

  });
}

function getData(uid, callback) {
  console.log("data coming")

  findfromdb(uid, function (obj) {
      console.log(obj)
      var options = {
          host: 'api.linkedin.com',
          path: '/v1/people/~:(id,first-name,last-name,headline,picture-url,location,industry,summary,specialties,positions)?format=json',
          protocol: 'https:',
          method: 'GET',
          headers: {
              "Authorization": 'Bearer ' + obj.access_token

          }
      };
      var req = http.request(options, function (res) {
          res.setEncoding('utf8');
          var data = '';
          res.on('data', function (chunk) {
              console.log('PROFILE DATA  ', chunk);
              data += chunk;
          });
          res.on('end', function () {
              callback(JSON.parse(data));
              console.log('No more data in response.');
          });
          req.on('error', function (e) {
              console.log("problem with request: " + e.message);
          });

      });
      req.end();


  });


}

function findfromdb(uid, callback) {
  console.log("uid", uid)
  MongoClient.connect(url, function (err, db) {

      db.collection('documents').find({_id: Mongodb.ObjectID(uid)}).toArray(function (err, result) {
        if (err){
          console.log(err)
        }
        console.log(result)
          var record = result[0];
          console.log("Record  ", record);
          callback(record);
      });
  });
}



// listen on port 3001
var port = process.env.PORT || 3001;
db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("Listening on port " + port)
  });
});
