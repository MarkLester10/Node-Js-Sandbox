const fs = require("fs");
const path = require("path");

//Create Folder
fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder Created");
});

//Create and Write to File
fs.writeFile(
  path.join(__dirname, "test", "hello.txt"),
  "Hello Node Js",
  (err) => {
    if (err) throw err;
    console.log("File Written To....");

    //Append Text to File
    fs.appendFile(
      path.join(__dirname, "test", "hello.txt"),
      "I love Node Js",
      (err) => {
        if (err) throw err;
        console.log("File Written To....");
      }
    );
  }
);

//Read File
fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//Rename File
fs.rename(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "helloword.txt"),
  (err) => {
    if (err) throw err;
    console.log("File Rename");
  }
);
