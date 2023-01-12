// Author: Devin Augot
// Date: Jan 12, 2023

// The moment() mdule is widley used to format dates and strings

// initalize moment() module
const moment = require("moment");

// setting moment under a variable for easier use
var rightNow = moment();

// setting the format to your prefernce for date and time
console.log(
  `The Current Date and Time is: ${rightNow.format("MMMM Do YYYY, h:mm:ss a")}`
);

// using moment() to get the current day of the week

console.log(`The Day of the week is: ${rightNow.format("dddd")}`);

// having a little fun with a if statement
if (rightNow.format("dddd") === "Friday") {
  console.log("WooHoo! its Friday! Have a Good Weekend");
} else {
  console.log(`Boo its ${rightNow.format("dddd")}`);
}
