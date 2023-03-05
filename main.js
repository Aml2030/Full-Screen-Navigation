let toggle = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let spanclose = document.querySelector(".close");

toggle.onclick = function () {
  nav.classList.add("open");
};
spanclose.onclick = function () {
  nav.classList.remove("open");
};

document.onkeyup = function (e) {
  if (e.key === "Escape") {
    nav.classList.remove("open");
  }
};
