const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:8080/hello.html?id=100&status=active"
);

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Get Host name - Domain
console.log(myUrl.host); // Port included

//Get Host Name - Domain
console.log(myUrl.hostname); //doesn't include the port

//Path Name
console.log(myUrl.pathname); //actual file

//Serialized Query
console.log(myUrl.search);

//Serialized Query - Params Object
console.log(myUrl.searchParams);

//Serialized Query - Add Params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});
