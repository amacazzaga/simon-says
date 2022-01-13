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
simonMoves = [];

function button(a, b) {
  a.addEventListener("click", () => {
    if (turn === "pc") {
      //respeta el turno!
      return;
    }
    a.style.display = "none";
    b.style.display = "block";
    const myTimeout = setTimeout(myDisplay, 1270);
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

/* necesitas saber si la primera posicion de userArr coincide con la primera de
    simonArr, No guardar un historial de userArr. Si coincide, borras y seguis comparando
    con el siguiente click*/
// console.log(turn);
// generateTurn(2); //por ej, pero eso va ahi, esta bien

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
  simonMoves = [...simonArr];
  console.log(simonArr);

  turn = "user";
  // console.log(turn);
}
