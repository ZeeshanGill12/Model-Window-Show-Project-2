const model = document.querySelector(".model1");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-model");

// First model display
document.querySelector(".modelbtn1").addEventListener("click", function () {
  document.querySelector(".model1").style.display = "block";
  overlay.style.display = "block";
});
// Second Model Display
document.querySelector(".modelbtn2").addEventListener("click", function () {
  document.querySelector(".model2").style.display = "block";
  overlay.style.display = "block";
});
// Third Model Display
document.querySelector(".modelbtn3").addEventListener("click", function () {
  document.querySelector(".model3").style.display = "block";
  overlay.style.display = "block";
});
const closeModelButton = function () {
  document.querySelector(".model1").style.display = "none";
  document.querySelector(".model2").style.display = "none";
  document.querySelector(".model3").style.display = "none";
  overlay.style.display = "none";
};
// Model Exit Button Feature
document
  .querySelector(".close-model1")
  .addEventListener("click", closeModelButton);

document
  .querySelector(".close-mode2")
  .addEventListener("click", closeModelButton);

document
  .querySelector(".close-mode3")
  .addEventListener("click", closeModelButton);

overlay.addEventListener("click", closeModelButton);
