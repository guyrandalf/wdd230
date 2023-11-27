const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const city = document.querySelector(".location");
const country = document.querySelector("#country");
const windSpeed = document.querySelector("#wind-speed");
const windChill = document.querySelector("#feels-like");
const forecastContainer = document.querySelector("#forecast"); // Container to display forecast

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
      // console.log(data);
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

  let w = data.list[0].wind.speed;
  windSpeed.textContent = w;
  let f = data.list[0].main.feels_like;

  const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
  let desc = data.list[0].weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);

  const forecastList = data.list.slice(1, 4);
  forecastContainer.innerHTML = "";

  forecastList.forEach((forecast, index) => {
    const temperature = forecast.main.temp;
    const forecastItem = document.createElement("div");
    forecastItem.innerHTML = `Day ${index + 1}: ${temperature.toFixed(
      0
    )}&deg;C`;
    forecastContainer.appendChild(forecastItem);
  });
}
apiFetch();
