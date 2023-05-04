var cur = "square";

var shape = [
  "square",
  "circle",
  "triangle-up",
  "triangle-down",
  "triangle-left",
  "triangle-right",
  "triangle-topleft",
  "triangle-topright",
  "triangle-bottomleft",
  "triangle-bottomright",
  "trapezoid",
  "parallelogram",
  "star-six"
];

var color = ["red", "orange", "green", "maroon", "pink", "violet"];

document.getElementById("btn2").onclick = function () {
  var random = shape[Math.floor(Math.random() * shape.length)];
  document.getElementById(cur).setAttribute("id", random);
  cur = random;
  document.getElementById("btn2").innerText = random;
};

document.getElementById("btn1").onclick = function () {
  var random = color[Math.floor(Math.random() * color.length)];
  document.getElementById("outcircle").style.backgroundColor = random;
  document.getElementById("btn1").innerText = random;
};

// var circleColorChange = document.getElementById("btn1");

// circleColorChange.addEventListener("click", changeColor);

// var i = 3;
// function changeColor() {
//   var circleElement = document.getElementById("outcircle");
//   // var circleColor = getComputedStyle(circleElement).backgroundColor;

//   if (i % 2 !== 0) {
//     circleElement.style.backgroundColor = "green";
//     i = 2;
//   } else {
//     circleElement.style.backgroundColor = "blueviolet";
//     i = 3;
//   }
// }

// var squareShapeChange = document.getElementById("btn2");

// squareShapeChange.addEventListener("click", changeShape);
// var j = 3;
// function changeShape() {
//   var triangleElement = document.getElementById("triangle");
//   var squareElement = document.getElementById("square");

//   if (j % 2 !== 0) {
//     triangleElement.style.display = "block";
//     squareElement.style.display = "none";
//     j = 2;
//   } else {
//     triangleElement.style.display = "none";
//     squareElement.style.display = "block";
//     j = 3;
//   }
// }
