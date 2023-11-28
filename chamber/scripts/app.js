document.addEventListener("DOMContentLoaded", function () {
  let homeLink = document.querySelector(".brand");

  if (homeLink) {
    homeLink.style.cursor = "pointer";
    homeLink.addEventListener("click", function () {
      location.href = "index.html";
    });
  } else {
    console.error("Element with class 'brand' not found.");
  }

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

  let currentdate = document.lastModified;
  document.getElementById(
    "lastModified"
  ).textContent = `Last Updated: ${currentdate}`;  
});
