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
const gameList = document.querySelector(".gameList");
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

// Sliding banner
const sliderContainer = document.getElementById("sliderContainer");
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % 3;
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 5000);
// End Sliding banner

// Btn navigasi
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const gameList1 = document.getElementById("gameList1");
const gameList2 = document.getElementById("gameList2");
const loadingCanvas = document.getElementById("loadingCanvas");
const indicator = document.getElementById("pageIndicator");

btn2.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  gameList1.classList.remove("flex");
  gameList1.classList.add("hidden");

  btn2.classList.add("bg-amber-800");
  btn2.classList.add("border-amber-500");
  btn2.classList.remove("border-white");

  btn1.classList.remove("bg-amber-800");
  btn1.classList.remove("border-amber-500");

  indicator.innerHTML = "Page 2 of 2";

  loadingCanvas.classList.add("flex");
  loadingCanvas.classList.remove("hidden");

  setTimeout(() => {
    gameList2.classList.add("flex");
    gameList2.classList.remove("hidden");

    gameList1.classList.add("hidden");
    gameList1.classList.remove("flex");

    loadingCanvas.classList.remove("flex");
    loadingCanvas.classList.add("hidden");
  }, 2000);
});

btn1.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  loadingCanvas.classList.add("flex");
  loadingCanvas.classList.remove("hidden");

  gameList2.classList.remove("flex");
  gameList2.classList.add("hidden");

  btn1.classList.add("bg-amber-800");
  btn1.classList.add("border-amber-500");

  btn2.classList.remove("bg-amber-800");
  btn2.classList.remove("border-amber-500");
  btn2.classList.add("border-white");

  indicator.innerHTML = "Page 1 of 2";

  setTimeout(() => {
    gameList1.classList.remove("hidden");
    gameList1.classList.add("flex");

    gameList2.classList.remove("flex");
    gameList2.classList.add("hidden");

    loadingCanvas.classList.remove("flex");
    loadingCanvas.classList.add("hidden");
  }, 2000);
});
// End Btn navigasi
