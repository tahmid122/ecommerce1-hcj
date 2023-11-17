const bar = document.querySelector("#bar");
const close = document.querySelector("#close");
const menu = document.querySelector("#mennu");

if (bar) {
  bar.addEventListener("click", () => {
    menu.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}

let cr1 = document.querySelector(".cr1");
let cr2 = document.querySelector(".cr2");
let cr3 = document.querySelector(".cr3");

let cb1 = document.querySelector(".cb1");
let cb2 = document.querySelector(".cb2");
let cb3 = document.querySelector(".cb3");

cb1.addEventListener("click", () => {
  cr1.style.display = "none";
});
cb2.addEventListener("click", () => {
  cr2.style.display = "none";
});
cb3.addEventListener("click", () => {
  cr3.style.display = "none";
});
