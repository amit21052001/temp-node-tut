//npm i <packageName>
//npm remove <packagename>


const _ = require("lodash");
const arr = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(arr);
console.log(newItems);
