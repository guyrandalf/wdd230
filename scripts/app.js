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

if (typeof Storage !== "undefined") {
  let visitCount = localStorage.getItem("visitCount");
  let countDisplay = document.querySelector('#visitCount')

  if (visitCount) {
    visitCount = parseInt(visitCount) + 1;
  } else {
    visitCount = 1;
  }

  localStorage.setItem("visitCount", visitCount)

  countDisplay.textContent = visitCount

} else {
  console.log("Sorry, your browser does not support local storage.");
}
