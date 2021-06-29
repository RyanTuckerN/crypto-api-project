const intro = document.querySelector(".intro");
const iconHeader = document.querySelector(".icon-header");
const iconArr = document.querySelectorAll(".icon");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    iconArr.forEach((icon, index) => {
      setTimeout(() => {
        icon.classList.add("active");
      }, (index + 1) * 100);
    });
    setTimeout(()=>{
      intro.style.top = '-100vh'
    }, 2100)
  });
});


//From https://www.youtube.com/watch?v=2ak37WrbSDg
//Conor Bailey : Create an Animated Website Intro / Splash Screen With HTML /CSS / JavaScript