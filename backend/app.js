'use strict';

const express = require('express');
const app = express();
const route = require('./router');
// const admin = require('./management');
let port = 7000;

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:7000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

app.use(function(req, res, next) {
//set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// app.use((req,res,next)=>{
//   admin.auth().getUser('38ItqzSU4DdKQaCfFbycPSHgtvq2').then(data=>{
//     console.log(data);
//   });
// });

app.use('/', route);

app.listen(port, ()=>{
  console.log(`Listening on port ${port}...`);
});


// class Server{

// }

module.exports = app;