// Author: Devin Augot
// Date: Jan 12, 2023

/* Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc. Lodash’s modular methods are great for:

Iterating arrays, objects, & strings
Manipulating & testing values
Creating composite functions
*/

// initalizing the lodash package
const { camelCase } = require("lodash");
const _ = require("lodash");

// Random number generator with lodash
const ranNum = _.random(0, 100);

console.log(`Your random number is: ${ranNum}`);

// this greeting function used in conjunction with lodash and will only happen once due to the .once method used
const greeting = _.once(() => {
  console.log("Hello! Dont expect another greeting!🤣");
});

greeting();

// these examples below using lodash with the .  camelCase() method will make any string camel case instead of writing a more complex camlize(str) type of function that would require regexp or replace, toUpperCase() methods.

console.log(`Foo Bar to camelCase = ${_.camelCase("Foo Bar")}`);
console.log(`--foo-bar-- to camelCase = ${_.camelCase("--foo-bar--")}`);
console.log(`__FOO_BAR__ to camelCase = ${_.camelCase("__FOO_BAR__")}`);
