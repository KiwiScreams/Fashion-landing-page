let lastScrollTop = 0;
const nav = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    nav.style.top = "-160px";
  } else {
    nav.style.top = "0px";
  }
  lastScrollTop = scrollTop;
});
