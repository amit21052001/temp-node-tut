// functions

const sayHi = (name) => {
  console.log(name);
};

const hello = () => {
  console.log("hello world ....");
};

module.exports = { sayHi, hello };

module.exports.myApp = () => {
  console.log("this is myAppp.....");
};
