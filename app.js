const boxUnoA = document.getElementById("box-1-a");
const boxUnoB = document.getElementById("box-1-b");
const boxDosA = document.getElementById("box-2-a");
const boxDosB = document.getElementById("box-2-b");
const boxTresA = document.getElementById("box-3-a");
const boxTresB = document.getElementById("box-3-b");
const boxCuatroA = document.getElementById("box-4-a");
const boxCuatroB = document.getElementById("box-4-b");
const startButton = document.getElementById("button_start");
let turn = "pc";
const arrOfBoxesA = [boxUnoA, boxDosA, boxTresA, boxCuatroA];
const arrOfBoxesB = [boxUnoB, boxDosB, boxTresB, boxCuatroB];
userArr = [];
simonArr = [];
simonMoves = []; // es copia de simonArr ([...simonArr])

function button(a, b) {
  a.addEventListener("click", () => {
    if (turn === "pc") {
      //respeta el turno!
      return;
    }
    a.style.display = "none";
    b.style.display = "block";
    const myTimeout = setTimeout(myDisplay, 1290);
    function myDisplay() {
      a.style.display = "block";
      b.style.display = "none";
      if (simonMoves[0] === a.id) {
        simonMoves = simonMoves.slice(1);
        if (simonMoves.length == 0) {
          turn = "pc";

          generateTurn();
        }
      } else alert("no era el correcto");
    }
  });
}
button(boxUnoA, boxUnoB);
button(boxDosA, boxDosB);
button(boxTresA, boxTresB);
button(boxCuatroA, boxCuatroB);

//START//

startButton.addEventListener("click", () => generateTurn());

function generateTurn() {
  // THIS REPEAT THE PC MOVE//
  const toShow = simonArr.map((element) => {
    const slicedToShow = element.slice(0, 6);
    const concatedToShow = slicedToShow.concat("b");
    const elemA = document.getElementById(element); // bring again from DOM
    const elemB = document.getElementById(concatedToShow); //bring again from DOM
    return [elemA, elemB];
  });
  toShow.forEach((elem, idx) => {
    setTimeout(turnOn, 1270);
    setTimeout(turnOff, 1270);

    function turnOn() {
      elem[0].style.display = "none";
      elem[1].style.display = "block";
    }
    function turnOff() {
      elem[0].style.display = "block";
      elem[1].style.display = "none";
    }
    console.log(elem[0], idx);
    console.log(elem[1], idx);
  });
  //UP TO HERE//
  //THIS CREATES THE LAST MOVE//
  const randomNum = Math.floor(Math.random() * arrOfBoxesB.length);
  const turnSimon = arrOfBoxesB[randomNum];
  //console.log(turnSimon);
  turnSimon.style.display = "block"; // muestro clase b
  const sliced = turnSimon.id.slice(0, 6);
  const concat = sliced.concat("a");
  const slicedConcat = arrOfBoxesA.filter((x) => {
    return x.id === concat;
  });
  slicedConcat[0].style.display = "none"; // oculto clase a seleccionada
  const myTimeout = setTimeout(myDisplay, 1290);
  function myDisplay() {
    turnSimon.style.display = "none";
    slicedConcat[0].style.display = "block";
  }
  simonArr.push(slicedConcat[0].id);
  simonMoves = [...simonArr]; //simonMoves es copia del simonArr
  //console.log(simonArr);

  turn = "user";
}
