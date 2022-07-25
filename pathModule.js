const path = require("path");

console.log(path.sep);

//join different paths or subfolders
const filePath = path.join("folder", "sub-folder", "test.txt");
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

const absolute = path.resolve(__dirname, "folder", "sub-folder", "test.txt");
console.log(absolute);
