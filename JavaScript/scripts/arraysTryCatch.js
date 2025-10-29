// lists site topics
let siteTopics = ["balls", "bats", "gloves", "cleats ", "cups"];

// days of the week
let dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// my first name
let firstName = "Jerry";

// the year I was born
let YOB = 2010;

// adds string to the siteTopics array
siteTopics.push("dugout");

// logs the length of the siteTopics array
console.log("The length of the siteTopics array is " + siteTopics.length);

// logs every value of the siteTopics array using a while loop
let siteTopicsNum = 0;
while (siteTopicsNum < 6) {
  console.log(siteTopics[siteTopicsNum]);
  siteTopicsNum++;
}

// flips the dayNames array order
dayNames.reverse();

// logs every value of the dayNames array using a for loop
for (let i = 0; i < 7; i++) {
  console.log(dayNames[i]);
}

// removes the first value of the dayNames array (Sunday)
dayNames.shift();

// checks if Sunday is a value in the dayNames array
// if it is, it throws an error
try {
  if (dayNames[0] === "Sunday") {
    throw "Error: Sunday should be missing!";
  }
} catch (error) {
  // logs the error
  console.log(error);
} finally {
  console.log(
    firstName +
      " was born in the year " +
      YOB +
      ". I think the day was either a " +
      dayNames[1] +
      " or " +
      dayNames[3]
  );
}
