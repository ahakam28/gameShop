const loginEmail = document.querySelector("#login-email");
const loginPass = document.querySelector("#login-pass");
const loginBtn = document.querySelector("#login-btn");
const message = document.querySelector("#message");
const Email = "example@gmail.com";
const Pass = "123456";

loginBtn.addEventListener("click", navigatePage);
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    navigatePage();
  }
});

function navigatePage() {
  const userEmail = loginEmail.value;
  const userPass = loginPass.value;

  if (userEmail === "" || userPass === "") {
    message.innerText = "Please fill the form!";
    removeLine();
    return;
  }

  if (userEmail != Email) {
    message.innerText = "Email did not match!!";
    removeLine();
    return;
  }

  if (userPass != Pass) {
    message.innerText = "Enter right password.";
    removeLine();
    return;
  }

  my_modal_2.showModal();
  setTimeout(() => {
    document.location = "./home.html";
    loginEmail.value = "";
    loginPass.value = "";
  }, 3000);
}

function removeLine() {
  const el = document.getElementById("my-element");
  setTimeout(() => {
    el.classList.add("right-10");

    el.classList.remove("after:w-full");
    el.classList.add("after:w-0");
    setTimeout(() => {
      el.classList.remove("right-10");

      el.classList.add("after:w-full");
      el.classList.remove("after:w-0");
    }, 3500);
  }, 100);
}
