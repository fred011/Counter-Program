// Counter Program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const counteLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
  count++;
  counteLabel.textContent = count;
};
decreaseBtn.onclick = function () {
  count--;
  counteLabel.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  counteLabel.textContent = count;
};
