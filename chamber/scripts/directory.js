const requestURL = "json/members.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const companies = jsonObject["cards"];
    companies.forEach(displayCompanies);
  });

function displayCompanies(company) {
  let card = document.createElement("section");
  let h3 = document.createElement("h3");
  let portrait = document.createElement("img");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");

  h3.textContent = `${company.name}`;

  portrait.setAttribute("src", company.imageurl);
  portrait.setAttribute("alt", `Company image of ${company.name}`);
  portrait.setAttribute("loading", "lazy");

  p1.textContent = `Address: ${company.address}`;
  p1.classList.add("address");
  p2.textContent = `Phone: ${company.phone}`;
  p2.classList.add("phone");
  p3.textContent = `Website: ${company.website}`;
  p4.textContent = `Membership: ${company.membership}`;

  card.appendChild(h3);
  card.appendChild(portrait);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);
  card.appendChild(p4);

  document.querySelector("section.cards").appendChild(card);
}

const gridbutton = document.querySelector("#grid-button");
const listbutton = document.querySelector("#list-button");
const display = document.querySelector(".cards");

gridbutton.addEventListener("click", () => {
  display.classList.add("cardsgrid");
  display.classList.remove("cardslist");
});

listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("cardslist");
  display.classList.remove("cardsgrid");
}
