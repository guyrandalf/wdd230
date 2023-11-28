document.addEventListener("DOMContentLoaded", function () {
  fetch("json/events.json")
    .then((response) => response.json())
    .then((data) => {
      const eventList = document.querySelector(".event-list");

      data.events.forEach((event) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.setAttribute("src", event.imageSrc);
        image.setAttribute("alt", event.altText);
        if ("loading" in HTMLImageElement.prototype) {
          image.setAttribute("loading", "lazy");
        } else {
          console.log("Browser does not support lazy loading");
        }

        const paragraph = document.createElement("p");
        paragraph.textContent = event.description;

        card.appendChild(image);
        card.appendChild(paragraph);

        eventList.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
