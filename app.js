const http = require('http');
console.log('Server starting...');
http.createServer((req, res) => {
    console.log('Request received...');
    res.end('JENKINS IS GREAT 3');
}).listen(80, () => {
    console.log('started.');
});
