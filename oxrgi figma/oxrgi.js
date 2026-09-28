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

var rail = document.getElementById('rail');
var cardGap = 22;
function cardWidth(){
  var card = rail.querySelector('.car-card');
  return card ? card.offsetWidth + cardGap : 400;
}
document.getElementById('nextBtn').addEventListener('click', function(){
  rail.scrollBy({ left: cardWidth(), behavior: 'smooth' });
});
document.getElementById('prevBtn').addEventListener('click', function(){
  rail.scrollBy({ left: -cardWidth(), behavior: 'smooth' });
});

document.querySelectorAll('.tabs button').forEach(function(btn){
  btn.addEventListener('click', function(){
    document.querySelectorAll('.tabs button').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
  });
});