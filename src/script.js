// Close Btn Nav
const input = document.getElementById("inputNav");
const closeBtn = document.getElementById("closeInputNav");

closeBtn.addEventListener("click", function () {
  input.value = "";

  // Tampilkan kembali semua game
  Array.from(games).forEach((game) => {
    game.style.display = "";
  });
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

// Search Game
const searchInput = document.getElementById("inputNav");
const gameList = document.getElementById("gameList");
const games = gameList.getElementsByTagName("li");

// Fungsi filter game
searchInput.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();

  Array.from(games).forEach((game) => {
    const gameName = game.textContent.toLowerCase();

    if (gameName.includes(searchTerm)) {
      game.style.display = "";
    } else {
      game.style.display = "none";
    }
  });
});
// End Search game

const sliderContainer = document.getElementById("sliderContainer");
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % 3;
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 5000);