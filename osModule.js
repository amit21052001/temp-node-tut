//built-in modules

const os = require("os");
const user = os.userInfo();
console.log(user);

//methods returns the system uptime inseconds
console.log(`the system's Uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMen: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
