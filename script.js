const adviceBtn = document.getElementById("btn");
console.log(adviceBtn);

generateBtn.addEventListener("click", () => {
  getAdvice();
  console.log(generateBtn);
});

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com");
  const data = await response.json();
  console.log(data);
  console.log("hah");
}

// https://api.adviceslip.com
