const hambutton = document.querySelector(".ham");
const menu = document.querySelector(".menu");
hambutton.addEventListener("click", function () {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
