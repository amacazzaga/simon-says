const boxUnoA = document.getElementById("box-1-a");
const boxUnoB = document.getElementById("box-1-b");
const boxDosA = document.getElementById("box-2-a");
const boxDosB = document.getElementById("box-2-b");
const boxTresA = document.getElementById("box-3-a");
const boxTresB = document.getElementById("box-3-b");
const boxCuatroA = document.getElementById("box-4-a");
const boxCuatroB = document.getElementById("box-4-b");
const startButton = document.getElementById("button_start");
const arrOfBoxesA = [boxUnoA, boxDosA, boxTresA, boxCuatroA];
const arrOfBoxesB = [boxUnoB, boxDosB, boxTresB, boxCuatroB];
userArr = [];
//BOX 1//
boxUnoA.addEventListener("click", () => {
  boxUnoA.style.display = "none";
  boxUnoB.style.display = "block";
  const myTimeout = setTimeout(myDisplay, 1270);
  function myDisplay() {
    boxUnoA.style.display = "block";
    boxUnoB.style.display = "none";
    userArr.push(boxUnoA.id);
    console.log(userArr);
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
    userArr.push(boxDosA.id);
    console.log(userArr);
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
    userArr.push(boxTresA.id);
    console.log(userArr);
  }
});

//BOX 4// //turnos///maquina o user// otra let q indique el largo de la secuen del user
boxCuatroA.addEventListener("click", () => {
  boxCuatroA.style.display = "none";
  boxCuatroB.style.display = "block";
  const myTimeout = setTimeout(myDisplay, 1270);
  function myDisplay() {
    boxCuatroA.style.display = "block";
    boxCuatroB.style.display = "none";
    userArr.push(boxCuatroA.id);
    console.log(userArr);
  }
});

//START//
simonArr = [];
startButton.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * arrOfBoxesB.length);
  const turnSimon = arrOfBoxesB[randomNum];
  console.log(turnSimon);
  turnSimon.style.display = "block";
  const sliced = turnSimon.id.slice(0, 6);
  const concat = sliced.concat("a");
  const slicedConcat = arrOfBoxesA.filter((x) => {
    return x.id === concat;
  });
  slicedConcat[0].style.display = "none";
  console.log(slicedConcat);
});
