// menu hamburger //

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
  navMenu.classList.toggle("stop-scrolling")
});

hamburger.querySelectorAll('nav-list--link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
}));



// sticky nav //

window.onscroll = function () { myFunction() };

let navbar = document.querySelector(".reward");
let header = document.querySelector(".header");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.innerWidth > 768 && window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else if (window.innerWidth < 768 && window.pageYOffset >= sticky) {
    header.classList.remove("sticky")
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// boutton café //

function boutonCafe(intNbrButton) {

  let refButtonActive = document.getElementById(intNbrButton);
  let refTitre = document.querySelector('.coffe_title');
  let refcoffe_text= document.querySelector('.coffe_text');
  let refImage = document.querySelector('.coffee_stars-image');

  for (let intCpt = 1; intCpt <= 5; intCpt++) {

    let refButtonNow = document.getElementById(intCpt)

    if (intNbrButton === refButtonNow.value) {
      refButtonActive.classList.add('btn-active')
      refTitre.innerHTML = objJson[intNbrButton]["titre"];
      refcoffe_text.innerHTML = objJson[intNbrButton]["text"];
      refImage.src = objJson[intNbrButton]["image"];
    } else {
      refButtonNow.classList.remove('btn-active')
    }
  }

}




document.getElementById("1").addEventListener('click', function () {
  boutonCafe('1')
});

document.getElementById("2").addEventListener('click', function () {
  boutonCafe('2')
});

document.getElementById("3").addEventListener('click', function () {
  boutonCafe('3')
});

document.getElementById("4").addEventListener('click', function () {
  boutonCafe('4')
});

document.getElementById("5").addEventListener('click', function () {
  boutonCafe('5')
});
