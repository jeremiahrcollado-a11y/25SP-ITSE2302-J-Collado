// sentence variables
// === Store sentences in variables ===
var sentence1 = "Oscar has 5 kids and a beautiful wife named Stella. 4 of the children are identical twins and the other child is the oldest by 1 year.";
let sentence2 = "The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area.";
let sentence3 = "This summer they plan on traveling to El Paso to visit as many family members as possible.";

//slices out the numerical values from the sentence variables
let num1 = sentence1.slice(10, 11);
let num2 = sentence1.slice(52, 53);
let num3 = sentence1.slice(127, 128);
let num4 = sentence2.slice(15, 16);
let num5 = sentence2.slice(63, 64);
let num6 = sentence2.slice(96, 99);

//parses the string to a number
num1 = parseInt(num1); //5
num2 = parseInt(num2); //4
num3 = parseInt(num3); //1
num4 = parseInt(num4); //6
num5 = parseInt(num5); //2

let num7 = num6.slice(0, 2)
let num8 = num6.slice(2)

num6 = parseInt(num6); //100
num7 = parseInt(num7); //10
num8 = parseInt(num8); //0

let sumTotal = num1 + num2 + num3 + num4 + num5 + num7;


console.log("The variable sumTotal is storing " + sumTotal);

//puts the string "San Antonio" in a new variable
let sanAntonio = sentence2.slice(41, 52)

//replaces the "El Paso" string with the variable holding "San Antonio"
let result = sentence3.replace("El Paso", sanAntonio);

console.log(result)

// while loop to print cars
while (num3 <= num7) {
  console.log("I saw " + num3 + " car(s) on my trip.");
  num3++;
}
// === Extract numbers from sentence1 ===
let nums1Strings = sentence1.match(/\d+/g);
let nums1 = [];
for (let i = 0; i < nums1Strings.length; i++) {
  nums1.push(Number(nums1Strings[i]));
}

let number5 = nums1[0]; // 5
let number4 = nums1[1]; // 4
let number1 = nums1[2]; // 1
console.log("From sentence1:", number5, number4, number1);

// === Extract numbers from sentence2 ===
let nums2Strings = sentence2.match(/\d+/g);
let nums2 = [];
for (let i = 0; i < nums2Strings.length; i++) {
  nums2.push(Number(nums2Strings[i]));
}

let number6 = nums2[0]; // 6
let number2 = nums2[1]; // 2
let number100 = nums2[2]; // 100
console.log("From sentence2:", number6, number2, number100);

// === Extract "10" and "0" from the string "100" ===
let num2_100_str = "100";
let num_10 = num2_100_str.substring(0, 2); // "10"
let num_0 = num2_100_str.substring(2);     // "0"

// Convert to integers
let number10 = parseInt(num_10);
let number0 = parseInt(num_0);

// === Add the numbers 5 + 4 + 1 + 6 + 2 + 10 ===
let sumTotal = number5 + number4 + number1 + number6 + number2 + number10;
console.log("The variable sumTotal is storing " + sumTotal);

// === Extract "San Antonio" from sentence2 ===
let sanAntonio = sentence2.substring(
  sentence2.indexOf("San Antonio"),
  sentence2.indexOf("San Antonio") + "San Antonio".length
);

// === Replace "El Paso" with "San Antonio" in sentence3 ===
sentence3 = sentence3.replace("El Paso", sanAntonio);
console.log(sentence3);

// === Use a while loop to print car messages from 1 to 10 ===
let counter = number1; // start at 1
while (counter <= number10) {
  console.log("I saw " + counter + " car(s) on my trip.");
  counter++;
}

// === End of program ===
