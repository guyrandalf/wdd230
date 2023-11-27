const requestURL = "json/spotlight.json";
const spotlight = document.querySelector(".spotlight-list");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const ads = jsonObject["spotlight"];
    ads.forEach(displayAds);
  });
function displayAds(ads) {
  let cardDiv = document.createElement("div");
  cardDiv.className = "card";
  let img = document.createElement("img");
  let p = document.createElement("p");

  p.textContent = ads.desc;

  img.setAttribute("src", ads.imageurl);
  img.setAttribute("alt", ads.name);
  img.setAttribute("loading", "lazy");

  // cardDiv.appendChild(img);
  cardDiv.appendChild(p);

  spotlight.appendChild(cardDiv);
}
