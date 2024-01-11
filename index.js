const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEI = document.getElementById("question");

const inputEI = document.getElementById("input");

const formEI = document.getElementById("form");

const scoreEI = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEI.innerText = `score:${score}`;

questionEI.innerText = `what is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

formEI.addEventListener("submit", () => {
   const userAns = +inputEI.value
   if (userAns === correctAns) {
     score++
  updateLocalStorage();
} else {
    score--
updateLocalStorage();
}
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score))
}
