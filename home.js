const homeBtn = document.querySelector("#home-btn");
const historyBtn = document.querySelector("#history-btn");
const historyBox = document.querySelector("#history-box");
const currentBalance = document.querySelector("#current-balance");
const main = document.querySelector("#main");
const addBtn = document.querySelector("#add-money");
const addMoneyForm = document.querySelector("#add-money-form");
const addMoneyBtn = document.querySelector("#add-money-btn");
const selector = document.querySelector("#selector");
const USERPIN = "123456";
const message = document.querySelector("#message");
const buyGame = document.querySelector("#free-fire");
const modalTitle = document.querySelector("#modal-title");
const modalMain = document.querySelector("#modal-main");
const price = "50";
let balance = "";

historyBtn.addEventListener("click", function () {
  main.classList.add("hidden");
  addMoneyForm.classList.add("hidden");
  historyBox.classList.remove("hidden");
});

homeBtn.addEventListener("click", function () {
  main.classList.remove("hidden");
  addMoneyForm.classList.add("hidden");
  historyBox.classList.add("hidden");
});

addBtn.addEventListener("click", function () {
  main.classList.add("hidden");
  addMoneyForm.classList.remove("hidden");
  historyBox.classList.add("hidden");
});

addMoneyBtn.addEventListener("click", validForm);
buyGame.addEventListener("click", purchaseGame);

function validForm() {
  const option = selector;
  const accNumber = document.querySelector("#accNumber");
  const amount = document.querySelector("#amount");
  const pin = document.querySelector("#pin");

  if (option.value === "Select bank") {
    message.innerText = "Plese slect a bank";
    removeLine();
    return;
  }

  if (
    accNumber.value === "" ||
    accNumber.value.length < 11 ||
    !/^\d+$/.test(accNumber.value)
  ) {
    message.innerText = "Enter a valid Account Number";
    removeLine();
    return;
  }

  if (amount.value === "" || !/^\d+$/.test(amount.value)) {
    message.innerText = "Enter Amount to Add";
    removeLine();
    return;
  }

  if (pin.value === "" || pin.value != USERPIN || !/^\d+$/.test(pin.value)) {
    message.innerText = "Pin is invalid";
    removeLine();
    return;
  }

  balance = eval(`${currentBalance.innerText} + ${amount.value}`);
  accNumber.value = "";
  currentBalance.innerText = balance;
  amount.value = "";
  pin.value = "";
  selector.value = "Select bank";

  modalTitle.innerText = "Money Added";
  modalMain.innerText = `${balance} tk Added`;
  my_modal_1.showModal();

  addHistory("bg-success", `You added ${balance} tk at`);
}

function removeLine() {
  const alertBox = document.getElementById("my-element");

  alertBox.classList.remove("translate-x-[150%]");
  alertBox.classList.add("translate-x-0");

  setTimeout(() => {
    alertBox.classList.remove("translate-x-0");
    alertBox.classList.add("translate-x-[150%]");
  }, 3000);
}

function purchaseGame() {
  if (balance < price) {
    modalTitle.innerText = "Ops!";
    modalMain.innerText =
      "Insufficient balance. Please recharge your account and try again.";
    my_modal_1.showModal();
    return;
  }

  modalTitle.innerText = "Precious time!!!";
  modalMain.innerText =
    "Enjoy this awesome game! You can buy another one later.";
  my_modal_1.showModal();

  balance = balance - price;
  console.log(balance);
  currentBalance.innerText = balance;
  buyGame.disabled = true;

  addHistory("bg-warning", `You bought a game by ${price} tk at`);
}

function addHistory(bgColor, text) {
  const div = document.createElement("div");
  div.className = `p-5 rounded-lg w-120 mx-auto text-white font-semibold mt-3 ${bgColor}`;
  div.innerText = `${text} ${new Date()}`;

  historyBox.prepend(div);
}
