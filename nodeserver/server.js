import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import massive from 'massive';
import path from 'path';
import request from 'request';
import moment from 'moment'

var inspect = require('eyespect').inspector();
var airbnb = require('airapi');

// Configs
import serverConfig from './config.json';

const connectionString = serverConfig.postgresPath; //database path
const app = module.exports = express();

app.use(express.static(__dirname + '/../public'));

app.use('/node_modules', express.static('./node_modules'));
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(session({
    secret: serverConfig.sessionSecret, //session secret
    saveUninitialized: false,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

app.post('/login', (req, response, next) => {

  var config = {"X-Airbnb-OAuth-Token": "446qdnlk8o0j79zjz4py8mrum"};
  var data = {
    client_id: "d306zoyjsyarp7ifhu67rjxn52tv0t20",
    currency: 'USD',
    grant_type: 'password',
    locale: "en-US",
    username: req.body.email,
    password: req.body.password
  };
  var options = {
    method: 'post',
    url: 'https://api.airbnb.com/v1/authorize',
    body: data,
    json: true,
  };

  request(options, (err, res, body) => {
    if (err) inspect(err, 'error at jsoning');
   req.session.token = body.access_token;
    var headers = res.headers
    var statusCode = res.statusCode
    inspect(headers, 'headers')
    inspect(statusCode, 'statusCode')
    inspect(body, 'body')

    options.method = 'get'
    options.url = 'https://api.airbnb.com/v1/account/active'
    options.headers = {"X-Airbnb-OAuth-Token": req.session.token}
    options.data = null

    request(options, (err, res, body) => {
      req.session.data = body
      return response.json("data": req.session.data);
    })

  })
})

app.get('/dashboard', (req, res, next) => {
  res.json({"data": req.session.data});
})

app.get('/getMessages', (req, response, next) => {

  if(req.session.token === undefined){
    req.session.token = '446qdnlk8o0j79zjz4py8mrum'
    console.log('req.session.token: ', req.session.token)
  }

  const options = {
  method: 'GET',
  url: 'https://api.airbnb.com/v1/threads?locale=en-US&client_id=3092nxybyb0otqw18e8nh5nty&offset=0&items_per_page=10&currency=USD&role=guest',
  headers: {"X-Airbnb-OAuth-Token": req.session.token},
  json: true,
}

request(options, (err, res, body) => {
  if(err){ console.log(err)}
  console.log('res.body: ', res.body)
    return response.json({"threads": res.body.threads})
  })
})

app.get('/getData', (req, res, next) => {
    if (req.session.searchResults) {
        res.json(req.session.searchResults);
    } else {
      airbnb.search({
          location: 'Manila',
          checkin: '10/24/2016',
          checkout: '10/31/2016',
          guests: 2,
          page: 2,
      }).then(function(searchResults) {

        searchResults.location = 'Manila'
        searchResults.startDate = '10/24/2016'
        searchResults.endDate = '10/31/2016'
        searchResults.numGuests = 1
        res.json(searchResults);
      });
    }
});

app.get('/viewUser/:id', (req, response, next) => {
  console.log('Params: ' , req.params)
  const options = {
  method: 'get',
  url: `https://api.airbnb.com/v2/users/${req.params.id}?client_id=3092nxybyb0otqw18e8nh5nty&_format=v1_legacy_show`,
  headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
  json: true
}

request(options, (err, res, body) => {
  // console.log('user res: ', res)
  // console.log('user body: ', body)
  response.json({'succces': body})
})

})

app.post('/search', (req, res, next) => {

    airbnb.search({
        location: req.body.searchVal,
        checkin: req.body.startDate,
        checkout: req.body.endDate,
        guests: req.body.numGuests,
        page: Math.round(Math.random()*10),
        room_types: req.body.room_types,
        price_min: req.body.price_min,
        price_max: req.body.price_max
    }).then(function(searchResults) {
        searchResults.location = req.body.searchVal
        searchResults.startDate = req.body.startDate
        searchResults.endDate = req.body.endDate
        searchResults.numGuests = req.body.numGuests

        req.session.searchResults = searchResults;

        res.json(req.session.searchResults);
    });
})


app.post('/sendMessage', (req, res, next) => {

  // THIS NEEDS TO HAVE NEW DATA
  console.log(req.body)
  var config = {"X-Airbnb-OAuth-Token": "ay8njrze1oalc9wgyfp26e67j"};

  var data = {
    listing_id: req.body.id,
    number_of_guests: "1",
    client_id: "d306zoyjsyarp7ifhu67rjxn52tv0t20",
    currency: 'USD',
    checkout_date: "2018-04-02T22:00:00.000-0700",
    checkin_date: "2018-04-01T00:00:00.000-0700",
    locale: "en-US",
    message: req.body.message
  };

  var options = {
    method: 'post',
    url: 'https://api.airbnb.com/v1/threads/create',
    headers: {
      'X-Airbnb-OAuth-Token': 'ay8njrze1oalc9wgyfp26e67j'
    },
    body: data,
    json: true
  };
  console.log('data to be sent:', data)
request(options, function(err, res, body) {
  console.log('body: ',body)
  if (err) {inspect(err, 'error at jsoning')
    console.log(err)
  };
  var headers = res.headers
  var statusCode = res.statusCode
})
})


app.get('/listingInfo/:rid', (req,res,next) => {
  console.log(req.params)
  airbnb.getInfo(req.params.rid).then(function(info) {
    console.log("info: ", info);
    res.json(info);
  });
})


app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../public', 'index.html'))
});

http.listen(3000, function() {
    console.log('Hosting port: ', 3000);
});
