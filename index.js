const humberger = document.querySelector(".humberger");
const navmenu = document.querySelector(".navmenu");
humberger.addEventListener("click", () => {
  humberger.classList.toggle("active");
  navmenu.classList.toggle("active");
})
document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () => {
  humberger.classList.remove("active");
  navmenu.classList.remove("active");


}))