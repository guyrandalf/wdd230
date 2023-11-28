document.addEventListener("DOMContentLoaded", function () {
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
    let p = document.createElement("p");

    p.textContent = ads.desc;    

    // cardDiv.appendChild(img);
    cardDiv.appendChild(p);

    spotlight.appendChild(cardDiv);
  }
});
