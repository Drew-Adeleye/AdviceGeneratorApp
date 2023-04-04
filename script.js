const adviceBtn = document.getElementById("btn");
const adviceH2 = document.querySelector("[data-advice]");
const adviceId = document.querySelector("[data-id]");

document.addEventListener("DOMContentLoaded", () => {
  getAdvice();
});

adviceBtn.addEventListener("click", () => {
  getAdvice();
});

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  updateDom(data.slip.advice, data.slip.id);
}

function updateDom(advice, Id) {
  adviceH2.innerText = advice;
  adviceId.innerText = `advice #${Id}`;
}
