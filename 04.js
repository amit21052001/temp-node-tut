const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("this is my home page..");
//   res.end();
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("This is our about section...");
  }
});

server.listen(5000);
