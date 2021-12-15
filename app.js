const boxUnoA = document.getElementById("box-1-a");
const boxUnoB = document.getElementById("box-1-b");
const boxDosA = document.getElementById("box-2-a");
const boxDosB = document.getElementById("box-2-b");
const boxTresA = document.getElementById("box-3-a");
const boxTresB = document.getElementById("box-3-b");
const boxCuatroA = document.getElementById("box-4-a");
const boxCuatroB = document.getElementById("box-4-b");
const startButton = document.getElementById("button_start");

//BOX 1//
boxUnoA.addEventListener("click", () => {
  boxUnoA.style.display = "none";
  boxUnoB.style.display = "block";
  const myTimeout = setTimeout(myDisplay, 1270);
  function myDisplay() {
    boxUnoA.style.display = "block";
    boxUnoB.style.display = "none";
  }
});
// BOX 2//
boxDosA.addEventListener("click", () => {
  boxDosA.style.display = "none";
  boxDosB.style.display = "block";
  const myTimeout = setTimeout(myDisplay, 1270);
  function myDisplay() {
    boxDosA.style.display = "block";
    boxDosB.style.display = "none";
  }
});
//BOX 3//
boxTresA.addEventListener("click", () => {
  boxTresA.style.display = "none";
  boxTresB.style.display = "block";
  const myTimeout = setTimeout(myDisplay, 1270);
  function myDisplay() {
    boxTresA.style.display = "block";
    boxTresB.style.display = "none";
  }
});
//BOX 4//
boxCuatroA.addEventListener("click", () => {
  boxCuatroA.style.display = "none";
  boxCuatroB.style.display = "block";
  const myTimeout = setTimeout(myDisplay, 1270);
  function myDisplay() {
    boxCuatroA.style.display = "block";
    boxCuatroB.style.display = "none";
  }
});
//START//

console.dir(boxUnoA);
const arrOfBoxes = [boxUnoA, boxDosA, boxTresA, boxCuatroA];
startButton.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * arrOfBoxes.length);
  const turnSimon = arrOfBoxes[randomNum];
  turnSimon.click();
});
