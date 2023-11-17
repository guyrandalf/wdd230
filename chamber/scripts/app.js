let menuToggle = document.getElementById("hamburger");
let menuToggleSpan = document.querySelector("span");
let nav = document.querySelector(".bottom");

menuToggle.onclick = () => {
  if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "block";
    menuToggleSpan.classList.remove("menu-button");
    menuToggleSpan.classList.add("closing");
  } else {
    nav.style.display = "none";
    menuToggleSpan.classList.remove("closing");
    menuToggleSpan.classList.add("menu-button");
  }
};

const datefield = document.querySelector(".date");
const meetingfield = document.querySelector(".meeting-notice");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

if (now.getDay() == 2 || now.getDay() == 3) {
  datefield.innerHTML =
    `<em>${fulldate}</em>` +
    "<br/>Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}

let currentdate = document.lastModified;
document.getElementById(
  "lastModified"
).textContent = `Last Updated: ${currentdate}`;

