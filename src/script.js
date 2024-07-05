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
const loginParent = document.getElementById("loginParent");
const closeLogin = document.getElementById("closeLogin");

loginBtn.addEventListener("click", function () {
  loginPage.classList.add("z-10");
  loginPage.classList.remove("-z-10");
  loginPage.classList.add("backdrop-blur-md");
  loginPage.classList.remove("backdrop-blur-0");

  setTimeout(() => {
    loginParent.classList.add("scale_1");
  }, 200);

  setTimeout(() => {
    loginParent.classList.remove("scale_0");
    loginPage.classList.remove("-z-10");
  }, 500);
});

closeLogin.addEventListener("click", function () {
  loginParent.classList.add("scale_0");
  loginParent.classList.remove("scale_1");

  setTimeout(() => {
    loginPage.classList.remove("backdrop-blur-md");
    loginPage.classList.add("backdrop-blur-0");
  }, 200);

  setTimeout(() => {
    loginPage.classList.add("-z-10");
    loginPage.classList.remove("z-10");
  }, 500);
});

window.addEventListener("click", function (event) {
  if (event.target === loginPage) {
    loginParent.classList.add("scale_0");
    loginParent.classList.remove("scale_1");

    setTimeout(() => {
      loginPage.classList.remove("backdrop-blur-md");
      loginPage.classList.add("backdrop-blur-0");
    }, 200);

    setTimeout(() => {
      loginPage.classList.add("-z-10");
      loginPage.classList.remove("z-10");
    }, 500);
  }
});
// End Login page
