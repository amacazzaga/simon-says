const boxUnoA = document.getElementById("box-1-a");
const boxUnoB = document.getElementById("box-1-b");

boxUnoA.addEventListener("click", () => {
  boxUnoA.style.display = "none";
  boxUnoB.style.display = "block";
  const myTimeout = setTimeout(myDisplay, 1250);
  function myDisplay() {
    boxUnoA.style.display = "block";
    boxUnoB.style.display = "none";
  }
});
