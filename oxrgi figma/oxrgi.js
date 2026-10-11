var modal = document.getElementById("login-modal");
var submitBtn = document.getElementById("submit-btn");
var signInLink = document.getElementById("signin-link");
var closeBtn = document.getElementById("close-btn");
var form = document.getElementById("login-form");

submitBtn.onclick = function (e) {
  e.preventDefault();
  modal.style.display = "flex";
};

signInLink.onclick = function (e) {
  e.preventDefault();
  modal.style.display = "flex";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

modal.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

form.onsubmit = function (e) {
  e.preventDefault();

  var name = document.getElementById("login-name").value;
  alert("Xush kelibsiz, " + name + "!");

  form.reset();
  modal.style.display = "none";
};

var calcBtn = document.getElementById("calc-btn");
var loanResult = document.getElementById("loan-result");

calcBtn.onclick = function () {
  var price = Number(document.getElementById("loan-price").value);
  var rate = Number(document.getElementById("loan-rate").value);
  var years = Number(document.getElementById("loan-term").value);
  var down = Number(document.getElementById("loan-down").value);

  var loan = price - down;
  var months = years * 12;
  var monthlyRate = rate / 100 / 12;

  if (loan <= 0 || months <= 0) {
    loanResult.innerHTML = "Please check your numbers.";
    return;
  }

  var payment;
  if (monthlyRate == 0) {
    payment = loan / months;
  } else {
    payment = (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  }

  loanResult.innerHTML = "Monthly payment: $" + payment.toFixed(2);
};

var rail = document.getElementById("rail");

document.getElementById("nextBtn").onclick = function () {
  rail.scrollBy({ left: 440, behavior: "smooth" });
};

document.getElementById("prevBtn").onclick = function () {
  rail.scrollBy({ left: -440, behavior: "smooth" });
};

var reviewRail = document.getElementById("review-rail");

document.getElementById("review-next").onclick = function () {
  reviewRail.scrollBy({ left: 286, behavior: "smooth" });
};

document.getElementById("review-prev").onclick = function () {
  reviewRail.scrollBy({ left: -286, behavior: "smooth" });
};