// sentence variables
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