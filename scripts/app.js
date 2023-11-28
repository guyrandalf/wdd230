let menuToggle = document.getElementById("button-container");
let menuToggleSpan = document.querySelector("span");
let nav = document.querySelector("nav ul");

menuToggle.onclick = () => {
  if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "flex";
    menuToggleSpan.classList.remove("menu-button");
    menuToggleSpan.classList.add("closing");
  } else {
    nav.style.display = "none";
    menuToggleSpan.classList.remove("closing");
    menuToggleSpan.classList.add("menu-button");
  }
};

let currentdate = document.lastModified;
document.getElementById(
  "lastModified"
).textContent = `Last Updated ${currentdate}`;

let visitCountElement = document.getElementById("visitCount");

if (localStorage.getItem("pageVisits")) {
  let count = parseInt(localStorage.getItem("pageVisits"));
  visitCountElement.textContent = count;
} else {
  localStorage.setItem("pageVisits", 1);
  visitCountElement.textContent = 1;  
}
