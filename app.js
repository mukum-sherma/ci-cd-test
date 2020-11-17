const http = require('http');
console.log('Server starting...');
http.createServer((req, res) => {
    console.log('Request received...');
    res.end('Hey , Hello Sherma, How are you? Jenkins is setup now Great Good!!! ');
}).listen(80, () => {
    console.log('started.');
});
