// >>>>>>>>>>>
// Loading Page
// >>>>>>>>>>>>
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loading").style.display = "none";
  }, 4000);
});
// >>>>>>>>>>>>>>Scroll Navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  const homeSec = document.getElementById("home");
  if (window.scrollY > homeSec.offsetHeight - 60) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
let counter = 1;
let index = 0;
let text = document.querySelector("header .text p span");
const autoWriting = () => {
  let words = ["Ahmed Mohamed", "FrontEnd Developer", "Designer"];
  text.innerHTML = words[index].slice(0, counter);
  counter++;
  if (counter > words[index].length) {
    index++;
    counter = 1;
    if (index > words.length - 1) {
      index = 0;
    }
  }
};
let stopAutoFun = setInterval(autoWriting, 300);
const list = document.querySelector(" nav ul");
const links = list.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    links[i].classList.add("active");
  });
}
