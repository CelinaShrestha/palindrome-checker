const txtInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
const result = document.querySelector(".result");
let filterInput;

txtInput.addEventListener("keyup", () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (filterInput) {
    return checkBtn.classList.add("active");
  }
  checkBtn.classList.remove("active");
  result.style.display = "none";
});

checkBtn.addEventListener("click", () => {
  let reverseInput = filterInput.split("").reverse().join("");
  result.style.display = "block";
  if (filterInput === reverseInput) {
    result.innerHTML = `'<span>${filterInput}</span>' is a palindrome`;
  } else {
    result.innerHTML = `'<span>${filterInput}</span>' is not a palindrome`;
  }
});
