const btnToggleFunction = function (elem) {
    elem.classList.toggle('active');
}

const navbar = document.querySelector('.menu-bar');
const navbarOpenBtn = document.querySelector('.nav-open');
const navbarCloseBtn = document.querySelector('.nav-close');

navbarOpenBtn.addEventListener ('click', function () {
    btnToggleFunction(navbar);
});

navbarCloseBtn.addEventListener ('click', function (){
    btnToggleFunction(navbar);
});

const goTopBtn = document.querySelector("[data-go-top]");

// window scroll event for go top button
window.addEventListener("scroll", function () {

  if (this.window.scrollY >= 500) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});