// const http = require('http');
// console.log('Server starting...');
// http.createServer((req, res) => {
//     console.log('Request received...');
//     res.end("JENKINS");
// }).listen(80, () => {
//     console.log('started.');
// });

//importing node framework
var express = require("express");
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
 res.send("mukum");
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
