"use script";

const userName = document.querySelector(".user-name");
const cvc = document.querySelector(".cvc");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const cardNum = document.querySelector(".card-num");
const cardNumInput = document.querySelector(".card-num-input");
const nameInput = document.querySelector(".name-input");
const cvcInput = document.getElementById("cvc");
const yearInput = document.getElementById("year-input");
const monthInput = document.getElementById("month-input");
const btnSubmit = document.querySelector(".btn-submit");

function updateCard(input, text) {
  input.addEventListener("input", (e) => {
    text.textContent = e.target.value;
  });
}

updateCard(nameInput, userName);
updateCard(cardNumInput, cardNum);
updateCard(cvcInput, cvc);
updateCard(monthInput, month);
updateCard(yearInput, year);

function displayError(input) {
  const errMsg = document.createElement("p");
  errMsg.textContent = "Can't be blank";
  errMsg.style.color = "red";
  errMsg.style.fontSize = "0.7rem";
  errMsg.style.marginTop = "5px";

  if (input.value === "") {
    input.classList.add("border-2", "border-red-400");
    input.insertAdjacentElement("afterend", errMsg);
  } else {
    errMsg.classList.add("hidden");
    input.classList.remove("border-2", "border-red-400");
  }
}

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  displayError(nameInput);
  displayError(cvcInput);
  displayError(monthInput);
  displayError(yearInput);
  displayError(cardNumInput);
});
