const path = require("path");

// Base File Name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File Extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename));

//Concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
