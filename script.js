const adviceBtn = document.getElementById("btn");
const adviceH2 = document.querySelector("[data-advice]");

adviceBtn.addEventListener("click", () => {
  getAdvice();
  console.log("click registered");
});

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  updateDom(data.slip.advice);
}

function updateDom(advice) {
  adviceH2.innerText = advice;
}

