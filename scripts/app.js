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

const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
  if (kp1.value !== kp2.value) {
    message.textContent = "❗Passwords DO NOT MATCH!";
    message.style.visibility = "show";
    kp2.style.backgroundColor = "#fff0f3";
    kp2.value = "";
    kp1.focus();
  } else {
    message.style.display = "none";
    kp2.style.backgroundColor = "#fff";
    kp2.style.color = "#000";
  }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}