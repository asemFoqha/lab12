// var http = require("http");
// var dt = require("./myModule");

// // http
// //   .createServer(function (req, res) {
// //     res.writeHead(200, { "Content-Type": "text/html" });
// //     res.write("miu asem");
// //     res.write("The date and time are currently: " + dt.myDate());
// //     res.end();
// //   })
// //   .listen(8080);

// // var http = require("http");
// // http
// //   .createServer(function (req, res) {
// //     res.writeHead(200, { "Content-Type": "text/html" });
// //     res.write(req.url);
// //     res.end();
// //   })
// //   .listen(8080);

// var url = require("url");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.end(txt);
//   })
//   .listen(8080);

// var http = require("http");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello World!");
//   })
//   .listen(8080);

// var http = require("http");
// var dt = require("./myModule");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("The date and time are currently: " + dt.myDate());
//     res.end();
//   })
//   .listen(8080);

var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    res.end();
  })
  .listen(8080);
