

document.addEventListener("DOMContentLoaded", () => {

  const mainParagraph = document.querySelector(".intro p");
  if(mainParagraph){
    mainParagraph.textContent =
      "True progress is earned through consistency and discipline. Every setback is a lesson, every challenge a chance to develop strength. Growth is not instant—it is built through patience and deliberate action. Stay focused, stay committed, and your goals will take shape.";
  }


  const newImages = [
    "image/corvette.jpg",
    "image/motorcycle.jpg",
    "image/police.jpg"
  ];

  const newHeadings = [
    "High-Performance Corvette",
    "Custom Blood-Red Motorcycle",
    "Police Pursuit Interceptor"
  ];

  const newParagraphs = [
    "A precisely engineered Corvette built for power, control, and unmatched performance on the open road.",
    "A hand-crafted blood-red motorcycle designed for riders who value freedom, precision, and adrenaline.",
    "A specialized police interceptor built for speed, safety, and high-stakes pursuit when every second matters."
  ];

  const reasons = document.querySelectorAll(".reason");

  reasons.forEach((reason, i) => {

    const img = reason.querySelector("img");
    if(img && newImages[i]){
      img.src = newImages[i];
      img.alt = newHeadings[i];
      img.width = 615;
      img.height = 461;
    }

   
    const heading = reason.querySelector(".content-title");
    if(heading && newHeadings[i]){
      heading.textContent = newHeadings[i];
    }


    const para = reason.querySelector("p");
    if(para && newParagraphs[i]){
      para.textContent = newParagraphs[i];
    }
  });


  const header = document.querySelector(".headings");

  const buttonColorMap = {
    ColorChanging: "black",
    ColorChanged: "darkred",
    ColorChange: "navy"
  };

  function changeHeaderColor(color){
    if(header){
      header.style.backgroundColor = color;
      // Automatic contrast adjustment
      header.style.color = (color === "black" || color === "darkred" || color === "navy") ? "white" : "black";
    }
  }

  Object.keys(buttonColorMap).forEach(buttonId => {
    const btn = document.getElementById(buttonId);
    if(btn){
      btn.addEventListener("click", () => changeHeaderColor(buttonColorMap[buttonId]));
    }
  });

});
