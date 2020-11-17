// //importing node framework
// var express = require("express");
 
// //<<<<<<< HEAD
// var app = express();
// //Respond with "hello world" for requests that hit our root "/"
// app.get("/", function (req, res) {
//  res.send("hello world, This is mukum, testing jenkins");
// });
// //listen to port 3000 by default
// app.listen(process.env.PORT || 3000, () =>{
//     console.log("Listening on port : 3000")
// });

// // var app = express();
// // //Respond with "hello world" for requests that hit our root "/"
// // app.get("/", function (req, res) {
// //  res.send("CI CD Test - Mukum ");
// // });
// // //listen to port 3000 by default
// // app.listen(process.env.PORT || 3000, () =>{
// //     console.log("Listening on port : 3000")
// // });
// >>>>>>> origin/master
 
// module.exports = app;


const http = require('http');
console.log('Server starting...');
http.createServer((req, res) => {
    console.log('Request received...');
    res.end('Hello Sherma, How are you? Jenkins is setup now Great Good!!! ');
}).listen(80, () => {
    console.log('started.');
});
