const http = require("http");
const path = require("path");
const fs = require("fs");
const { connect } = require("http2");

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content); //output the content of a file
  //     }
  //   );
  // }
  // if (req.url === "/api/users") {
  //   const users = [
  //     { name: "Mark Morta", age: 21 },
  //     { name: "Mark Lester", age: 23 },
  //     { name: "Lester Morta", age: 22 },
  //     { name: "Eminem Morta", age: 24 },
  //   ]; //normally fetch from a database
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(users));
  // }

  //DYNAMIC FILE PATH

  //Build Path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //Extension
  let extname = path.extname(filePath);

  //Initial Content-Type
  let contentType = "text/html";

  //Check extname and set content-type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  //Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        //Page Not Found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
          }
        );
      } else {
        //Some Server Error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
