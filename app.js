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
simonMoves = []; // not using
//BOX 1//
boxUnoA.addEventListener("click", () => {
  if (turn === "pc") {
    //respeta el turno!
    return;
  }
  boxUnoA.style.display = "none";
  boxUnoB.style.display = "block";
  const myTimeout = setTimeout(myDisplay, 1270);
  function myDisplay() {
    boxUnoA.style.display = "block";
    boxUnoB.style.display = "none";
    userArr.push(boxUnoA.id);
    turn = "pc";
    // console.log(userArr);
    // console.log(turn);
    if (turn === "pc") {
      generateTurn();
    }
  }
});
// BOX 2//
boxDosA.addEventListener("click", () => {
  if (turn === "pc") {
    //respeta el turno!
    return;
  }
  boxDosA.style.display = "none";
  boxDosB.style.display = "block";
  const myTimeout = setTimeout(myDisplay, 1270);
  function myDisplay() {
    boxDosA.style.display = "block";
    boxDosB.style.display = "none";
    userArr.push(boxDosA.id);
    turn = "pc";
    if (turn === "pc") {
      generateTurn();
    }
    // console.log(userArr);
    //  console.log(turn);
  }
});
//BOX 3//
boxTresA.addEventListener("click", () => {
  if (turn === "pc") {
    //respeta el turno!
    return;
  }
  boxTresA.style.display = "none";
  boxTresB.style.display = "block";
  const myTimeout = setTimeout(myDisplay, 1270);
  function myDisplay() {
    boxTresA.style.display = "block";
    boxTresB.style.display = "none";
    userArr.push(boxTresA.id);
    turn = "pc";
    // console.log(userArr);
    // console.log(turn);
    if (turn === "pc") {
      generateTurn();
    }
  }
});

//BOX 4// //turnos///maquina o user// otra let q indique el largo de la secuen del user
boxCuatroA.addEventListener("click", () => {
  if (turn === "pc") {
    //respeta el turno!
    return;
  }
  boxCuatroA.style.display = "none";
  boxCuatroB.style.display = "block";
  const myTimeout = setTimeout(myDisplay, 1270);
  function myDisplay() {
    boxCuatroA.style.display = "block";
    boxCuatroB.style.display = "none";
    userArr.push(boxCuatroA.id);
    turn = "pc";
    if (turn === "pc") {
      const simonPlays = simonArr.map((el) => {
        const simonMoved = el.slice(0, 6).concat("b");
        // console.log(simonMoved);

        const simonPlaysFiltered = arrOfBoxesB.filter((elem) => {
          return elem.id == simonMoved;
        });
        console.log(simonPlaysFiltered);
      });
      generateTurn(); // ser una copia del arr
    }

    /* necesitas saber si la primera posicion de userArr coincide con la primera de
    simonArr, No guardar un historial de userArr. Si coincide, borras y seguis comparando
    con el siguiente click*/
    // console.log(turn);
    // generateTurn(2); //por ej, pero eso va ahi, esta bien
  }
});
// turnos, y comparar //
// contador de la secuenaci actual//
// generatTurn, toma turn lengght q es el largo de la secuen//
// el user va consuminedo el array de simon y quita del array lo q consume, pero no lo
//modifica a simonArr, solo compara la primera posicion de ambos
//y al final llama a generateTurn, una secuencia mas larga//
//START//

startButton.addEventListener("click", () => generateTurn());

function generateTurn() {
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
  const myTimeout = setTimeout(myDisplay, 1270);
  function myDisplay() {
    turnSimon.style.display = "none";
    slicedConcat[0].style.display = "block";
  }
  simonArr.push(slicedConcat[0].id);
  console.log(simonArr);

  turn = "user";
  // console.log(turn);
}
