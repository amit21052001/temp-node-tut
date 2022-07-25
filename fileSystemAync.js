const { readFile, writeFile, read, write, writeSync } = require("fs");

console.log("Start...");

readFile("./folder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log("End of first Read");
  readFile("./folder/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log("End of second Read");
    writeFile(
      "./folder/myresult-Async",
      `Result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("End of final write..");
        console.log("my task is done...");
      }
    );
  });
});

console.log("End of the script..");
