// Author: Devin Augot
// Date: Jan 12, 2023

// The os module/global object allows you to get information about the computer's operating system your currently working on which can be useful knowing your operating system information depending on the type of project your currently working on and if your system meets the requirement needs. this object has many methods including arch(), freemem(),hostname() and many more. I will give a few examples below.

// require the os class/global object
const opSys = require("os");

// Returns the operating systems CPU architecture
console.log(`CPU Processor: ${opSys.arch()}`);

// freemem() returns the amount of available space on your computer in kilobytes
console.log(`Free Memory Available: ${opSys.freemem()} kB`);

// hostname() returns the hostname of the OS
console.log(`Hostname is: ${opSys.hostname()}`);

// loadavg() returns an an array with average load times on system activity in 1, 5 & 15 minute load averages
console.log(`Load average (1 minute): ${opSys.loadavg()[0]}`);
console.log(`Load average (5 minute): ${opSys.loadavg()[1]}`);
console.log(`Load average (15 minute): ${opSys.loadavg()[2]}`);

// type() Returns the name of the operating system
console.log(`The Name of your OS is: ${opSys.type()}`);
