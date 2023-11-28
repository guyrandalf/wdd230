const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("#desc");

const captionDesc = document.querySelector("figcaption");
const city = document.querySelector(".location");
const country = document.querySelector("#country");

let lat = 7.385555104478326;
let lon = 3.9476320227986013;

let latFixed = lat.toFixed(2);
let lonFixed = lon.toFixed(2);

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latFixed}&lon=${lonFixed}&units=metric&appid=1aa127830d80bc4014569d5f214be441`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayResults(data) {
  const currentTemperature = data.list[0].main.temp;
  const currentDescription = data.list[0].weather[0].description;
  currentTemp.innerHTML = `${currentTemperature}&deg;C`;
  captionDesc.textContent = currentDescription.toUpperCase();
  city.innerHTML = data.city.name;
  country.innerHTML = data.city.country;

  const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
  let desc = data.list[0].weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
}
apiFetch();
