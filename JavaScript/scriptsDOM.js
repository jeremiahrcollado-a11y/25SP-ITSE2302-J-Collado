const mainParagraph = document.querySelector(".intro p");

mainParagraph.textContent =
  "True progress is earned through consistency and discipline. Every setback is a lesson, every challenge a chance to develop strength. Growth is not instant—it is built through patience and deliberate action. Stay focused, stay committed, and your goals will take shape.";

const newImages = [
  "image/corvette.jpg",
  "image/motorcycle.jpg",
  "image/police.jpg",
];

const newHeadings = [
  "High-Performance Corvette",
  "Custom Blood-Red Motorcycle",
  "Police Pursuit Interceptor",
];

const newParagraphs = [
  "A precisely engineered Corvette built for power, control, and unmatched performance on the open road.",
  "A hand-crafted blood-red motorcycle designed for riders who value freedom, precision, and adrenaline.",
  "A specialized police interceptor built for speed, safety, and high-stakes pursuit when every second matters.",
];

const reasons = document.querySelectorAll("img");

for (let i = 0; i < newImages.length; i++) {
  reasons[i].src = newImages[i];
}

let headings = document.getElementsByClassName("content-title");
for (let i = 0; i < newHeadings.length; i++) {
  // console.log(headings);
  headings[i].textContent = newHeadings[i];
}

let paragraphs = [
  document.querySelector("#firstText"),
  document.querySelector("#secondText"),
  document.querySelector("#thirdText"),
];
for (let i = 0; i < newParagraphs.length; i++) {
  paragraphs[i].textContent = newParagraphs[i];
}

const header = document.querySelector(".headings");

const buttons = [
  document.getElementById("ColorChanging"),
  document.getElementById("ColorChanged"),
  document.getElementById("ColorChange"),
];

function changeHeaderColor(color) {
  header.style.backgroundColor = color;
}

buttons[0].addEventListener("click", function () {
  changeHeaderColor("black");
});

buttons[1].addEventListener("click", function () {
  changeHeaderColor("DarkRed");
});

buttons[2].addEventListener("click", function () {
  changeHeaderColor("Indigo");
});
