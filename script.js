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

//for the download
const cardSection = document.querySelector(".card-section");
const downloadBtn = document.querySelector(".download-btn");

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

//to create an error msg
function createErrMsg(input, msg) {
  const errMsg = document.createElement("p");
  errMsg.textContent = msg;
  errMsg.style.color = "red";
  errMsg.style.fontSize = "0.7rem";
  errMsg.style.marginTop = "5px";

  input.style.border = "1px solid red";
  input.insertAdjacentElement("afterend", errMsg);
}

let error;

function displayError(input) {
  const existErrMsg = input.nextElementSibling;
  const isPresent = existErrMsg;

  error = true;

  //for displaying empty inputs
  if (input.value === "") {
    if (!isPresent) {
      createErrMsg(input, "Can't be blank");
    }
  } else {
    input.style.border = "1px solid hsl(270, 3%, 87%)";
    input.classList.remove("border-2", "border-red-400");
    if (isPresent) {
      existErrMsg.remove();
    }
    error = false;
  }

  //for checking name length
  if (
    input === nameInput &&
    nameInput.value != "" &&
    nameInput.value.trim().split(" ").length < 2
  ) {
    createErrMsg(nameInput, "Name must not be less than two");
  }

  //for checking card length
  if (
    input === cardNumInput &&
    cardNumInput.value != "" &&
    cardNumInput.value.replace(/\s+/g, "").length < 16
  ) {
    createErrMsg(cardNumInput, "Card number must be upto 16");
  }

  //for month and year value
  if (input === monthInput && monthInput.value != "" && monthInput.value < 1) {
    createErrMsg(monthInput, "Kindly enter a valid month");
  }

  if (input === yearInput && yearInput.value != "" && yearInput.value < 10) {
    createErrMsg(yearInput, "Kindly enter a valid year");
  }

  //for cvc length
  if (input === cvcInput && cvcInput.value != "" && cvcInput.value.length < 3) {
    createErrMsg(cvcInput, "Cvc number must be upto 3");
  }
}

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  displayError(nameInput);
  displayError(cvcInput);
  displayError(monthInput);
  displayError(yearInput);
  displayError(cardNumInput);

  if (error) {
    return;
  }

  document.querySelector("form").classList.add("fade");
  document.querySelector(".complete-state").classList.add("show");
});

downloadBtn.addEventListener("click", () => {
  domtoimage.toBlob(cardSection).then(function (blob) {
    window.saveAs(blob, "card-view");
    console.log("worked");
  });
  console.log("went through");
});
