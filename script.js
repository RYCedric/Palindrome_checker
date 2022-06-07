const txtInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", () => {
  let reverseInput = filterInput.split("").reverse().join("");
  infoTxt.style.display = "block";
  return filterInput != reverseInput
    ? (infoTxt.innerHTML = `No, <span>${txtInput.value}</span> isn't a palindrome`)
    : (infoTxt.innerHTML = `Yes, <span>${txtInput.value}</span> is a palindrome`);
});

txtInput.addEventListener("keyup", () => {
  // remove spaces & all special characters
  filterInput = txtInput.value.replace(/[^A-Z0-9]/gi, "").toLowerCase();

  if (filterInput) {
    return checkBtn.classList.add("active");
  }

  infoTxt.style.display = "none";
  checkBtn.classList.remove("active");
});
