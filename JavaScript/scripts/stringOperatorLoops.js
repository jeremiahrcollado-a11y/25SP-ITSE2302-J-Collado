let sentence1 = "Oscar has 5 kids and a beautiful wife named Stella. 4 of the children are identical twins and the other child is the oldest by 1 year.";

// Store the second sentence in a variable
let sentence2 = "The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area.";

// Store the third sentence in a variable
let sentence3 = "This summer they plan on traveling to El Paso to visit as many family members as possible.";

// Extract numbers from sentence1 as strings
// 5 kids, 4 twins, 1 oldest child
let num1_5 = "5";
let num1_4 = "4";
let num1_1 = "1";

// Extract numbers from sentence2 as strings
// 6 relatives in San Antonio, 2 relatives nearby, 100 miles distance
let num2_6 = "6";
let num2_2 = "2";
let num2_100 = "100";

// From "100", extract "10" and "0" as new strings
let num_10 = num2_100.substring(0, 2); // "10"
let num_0 = num2_100.substring(2);     // "0"

// Convert all string numbers to actual numbers using parseInt
let number5 = parseInt(num1_5);
let number4 = parseInt(num1_4);
let number1 = parseInt(num1_1);
let number6 = parseInt(num2_6);
let number2 = parseInt(num2_2);
let number10 = parseInt(num_10);

// Add the numbers 5 + 4 + 1 + 6 + 2 + 10 and store in sumTotal
let sumTotal = number5 + number4 + number1 + number6 + number2 + number10;

// Display the sumTotal message in the console
console.log("The variable sumTotal is storing " + sumTotal);

// Extract the string "San Antonio" from sentence2
let sanAntonio = sentence2.substring(sentence2.indexOf("San Antonio"), sentence2.indexOf("San Antonio") + "San Antonio".length);

// Change sentence3 to use "San Antonio" instead of "El Paso"
sentence3 = "This summer they plan on traveling to " + sanAntonio + " to visit as many family members as possible.";

// Display the updated sentence3 in the console
console.log(sentence3);

// Use a while loop to print "I saw X car(s) on my trip." from 1 to 10
let counter = number1; // start at 1
while (counter <= number10) {
    console.log("I saw " + counter + " car(s) on my trip.");
    counter++;
}
