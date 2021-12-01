const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
var querystring = require('querystring');
var http = require('http');

const server = jsonServer.create()

const express = require('express');

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
const userdb = JSON.parse(fs.readFileSync('./db.json', 'UTF-8'))

server.use(jsonServer.defaults());
const SECRET_KEY = '123456789'
const expiresIn = '1h'

// Create a token from a payload 
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// Verify the token 
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  const userdb = JSON.parse(fs.readFileSync('./db.json', 'UTF-8'))
 return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
  // const user = userdb.users.findIndex(user => user.email === email && user.password === password);
  // return user({
  //     id: user.id,
  //     username: user.name,
  //     email: user.email,
  //     password: user.password,
  //     role: user.role
  // });
}

server.post('/auth/login', (req, res) => {
  const { email, password } = req.body
 // const userData = isAuthenticated({email, password})
  if (isAuthenticated({ email, password }) === false) {
    const status = 401
    const message = 'Incorrect email or password'
    res.status(status).json({ status, message })
    return
  }
  const access_token = createToken({ email, password })
  // const access_token = createToken({ userData })
  res.status(200).json({ access_token })
})

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (req.headers.authorization === undefined) {
    next()
    return
  }

  if (req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Bad authorization header'
    res.status(status).json({ status, message })
    return
  }

  try {
    verifyToken(req.headers.authorization.split(' ')[1])
    next()
  } catch (err) {
    const status = 401
    const message = 'Error: access_token is not valid'
    res.status(status).json({ status, message })
  }
})


server.post('/api/user/register', function (req, res) {
  console.log(req.body)
  var data = querystring.stringify(req.body);

  var options = {
    host: 'http://localhost',
    port: 3000,
    path: '/users',
    method: 'POST',
   headers: {'Content-Type':'application/x-www-form-urlencoded'}
  };


  var httpreq = http.request(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      console.log("body: " + chunk);
    });
    response.on('end', function() {
      res.send('ok');
    })
  });
  httpreq.write(data);
  httpreq.end();

});

const PORT = 8000;
server.listen(PORT, () => {
  console.log('Listening Auth server at: ' + PORT);
})