// Close Btn Nav
const input = document.getElementById("inputNav");
const closeBtn = document.getElementById("closeInputNav");

closeBtn.addEventListener("click", function () {
  input.value = "";
});
// End Close Btn Nav

// Login page
const loginBtn = document.getElementById("loginBtn");
const loginPage = document.getElementById("loginPage");
const closeLogin = document.getElementById("closeLogin");

loginBtn.addEventListener("click", function () {
  loginPage.classList.add("flex");
  loginPage.classList.remove("hidden");
});

closeLogin.addEventListener("click", function () {
  loginPage.classList.remove("flex");
  loginPage.classList.add("hidden");
});
// End Login page
