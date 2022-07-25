const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./folder/first.txt", "utf-8");
const second = readFileSync("./folder/second.txt", "utf-8");

//reading content from file
// console.log(first, second);

//writing content to the file

// writeFileSync(
//   "./folder/result-file",
//   `the result is : ${first} and ${second} !!!`
// );

writeFileSync(
  "./folder/result-file",
  `the result is : ${first} and ${second} !!!`,
  { flag: "a" }
);
