/**
 *
 */

var Md5BruteForceServer = require('./md5-bruteforce-server/Md5BruteForceServer').Md5BruteForceServer;

var server = new Md5BruteForceServer(function (err) {
    if (err) {
        console.log('Error ' + err);
        return;
    }
    server.httpServer.listen(10046);
    console.log('Md5 JavaScript ECDC server is listen on 0.0.0.0:80');
    console.log('Browse http://127.0.0.1/index.html\n');
});