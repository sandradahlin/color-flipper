const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNr = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNr];
  color.innerHTML = colors[randomNr];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
