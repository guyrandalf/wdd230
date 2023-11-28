document.addEventListener("DOMContentLoaded", function () {
  // Lazy loading images on scroll
  let lazyLoadImages = document.querySelectorAll('img[loading="lazy"]');

  let lazyLoad = function () {
    lazyLoadImages.forEach(function (img) {
      if (
        img.getBoundingClientRect().top < window.innerHeight * 2 &&
        img.getBoundingClientRect().bottom >= 0 &&
        getComputedStyle(img).display !== "none"
      ) {
        img.src = img.getAttribute("data-src");
        img.classList.remove("lazy");

        lazyLoadImages = Array.from(lazyLoadImages).filter(function (image) {
          return image !== img;
        });

        if (lazyLoadImages.length === 0) {
          document.removeEventListener("scroll", lazyLoad);
          window.removeEventListener("resize", lazyLoad);
          window.removeEventListener("orientationchange", lazyLoad);
        }
      }
    });
  };

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);

  const visitMessageElement = document.getElementById("visitMessage");
  const lastVisit = localStorage.getItem("lastVisit");

  if (!lastVisit) {
    visitMessageElement.textContent =
      "Welcome! Let us know if you have any questions.";
  } else {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastVisit;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff < 1) {
      visitMessageElement.textContent = "Back so soon! Awesome!";
    } else if (daysDiff === 1) {
      visitMessageElement.textContent = "You last visited 1 day ago.";
    } else {
      visitMessageElement.textContent = `You last visited ${daysDiff} days ago.`;
    }
  }

  localStorage.setItem("lastVisit", new Date().getTime());
});
