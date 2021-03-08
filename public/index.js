const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu").classList;

burger.addEventListener("click", () => {
  menu.toggle("hidden");
});
