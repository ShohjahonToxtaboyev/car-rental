// Bo'sh havolalar bosilganda sahifa tepaga sakramasin
var links = document.querySelectorAll('a[href="#"]');

for (var l = 0; l < links.length; l++) {
  if (!links[l].classList.contains("to-top")) {
    links[l].addEventListener("click", function (e) {
      e.preventDefault();
    });
  }
}

// Mashinalar qatorini o'ng va chapga surish
var rail = document.getElementById("rail");

document.getElementById("nextBtn").onclick = function () {
  rail.scrollBy({ left: 543, behavior: "smooth" });
};

document.getElementById("prevBtn").onclick = function () {
  rail.scrollBy({ left: -543, behavior: "smooth" });
};

// Saqlash (bookmark) tugmasi: bosilganda to'ladi
var saveBtns = document.querySelectorAll(".save-btn");

for (var s = 0; s < saveBtns.length; s++) {
  saveBtns[s].onclick = function () {
    var icon = this.querySelector("i");
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
  };
}

// Sharhlar qatorini o'ng va chapga surish
var reviewRail = document.getElementById("review-rail");

document.getElementById("review-next").onclick = function () {
  reviewRail.scrollBy({ left: 284, behavior: "smooth" });
};

document.getElementById("review-prev").onclick = function () {
  reviewRail.scrollBy({ left: -284, behavior: "smooth" });
};

// Sign In oynasi: ochish va yopish
var modal = document.getElementById("login-modal");

document.getElementById("signin-link").onclick = function (e) {
  e.preventDefault();
  modal.style.display = "flex";
};

document.getElementById("submit-btn").onclick = function (e) {
  e.preventDefault();
  modal.style.display = "flex";
};

document.getElementById("close-btn").onclick = function () {
  modal.style.display = "none";
};

document.getElementById("login-form").onsubmit = function (e) {
  e.preventDefault();
  modal.style.display = "none";
};