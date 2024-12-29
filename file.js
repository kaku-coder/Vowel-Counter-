let textaeria = document.querySelector(".textarea");
let button = document.querySelector(".btn")
let output = document.querySelector(".output")
let index = 0;


button.addEventListener("click", () => {
  const value = textaeria.value;
  let count = 0;

  for (let i = 0; i < value.length; i++) {
    if (value[i] === "a" || value[i] === "e" || value[i] === "i" || value[i] === "o" || value[i] === "u") {
      count++;
    }
  }
  output.textContent = `the number of Vowel is ${count}`;
})