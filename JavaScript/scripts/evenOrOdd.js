// variables
let var1;
let num1;
let total;

var1 = prompt("Please enter a number between 1 and 10: ");
num1 = parseInt(var1);

// loop to ask for a number
while (num1 < 1 || num1 > 10 || Number.isNaN(num1)) {
  alert("Please try again. Enter a number between 1 and 10: ");
  var1 = prompt("Please enter a number between 1 and 10: ");
  num1 = parseInt(var1);
}

// variables
let var2;
let num2;
var2 = prompt("Please enter a number between 10 and 100: ");
num2 = parseInt(var2);
// loop to ask for a number
while (num2 < 10 || num2 > 100 || Number.isNaN(num2)) {
  alert("Please try again. Enter a number between 10 and 100: ");
  var2 = prompt("Please enter a number between 10 and 100: ");
  num2 = parseInt(var2);
}

// multiplication calculations
total = num1 * num2;

//even or odd
if (total % 2 == 0) {
  console.log("The number, " + total + ", is even");
} else {
  console.log("Your number, " + total + ", is odd");
}
