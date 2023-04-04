const adviceBtn = document.getElementById("btn");
const adviceH2 = document.querySelector("[data-advice]");

document.addEventListener("DOMContentLoaded", () => {
  getAdvice();
});

adviceBtn.addEventListener("click", () => {
  getAdvice();
});

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  updateDom(data.slip.advice);
}

function updateDom(advice) {
  adviceH2.innerText = advice;
}
