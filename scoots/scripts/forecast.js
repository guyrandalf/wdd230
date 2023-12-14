let lat = 20.421337263545986;
let lon = -86.92473242786201;

let latFixed = lat.toFixed(2);
let lonFixed = lon.toFixed(2);

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latFixed}&lon=${lonFixed}&units=metric&appid=1aa127830d80bc4014569d5f214be441`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return response.json();
  })
  .then((data) => {
    const currentTemp = data.list[0].main.temp;
    const currentHumidity = data.list[0].main.humidity;
    const currentCondition = data.list[0].weather[0].main;
    const currentIcon = data.list[0].weather[0].icon;

    const forecastTemp = data.list[1].main.temp;
    const forecastHumidity = data.list[1].main.humidity;
    const forecastCondition = data.list[1].weather[0].main;
    const forecastIcon = data.list[1].weather[0].icon;

    document.getElementById("currentTemp").textContent = `${currentTemp}°C`;
    document.getElementById("condition").textContent = currentCondition;
    document.getElementById("humidity").textContent = `${currentHumidity}%`;

    document.getElementById("forecastTemp").textContent = `${forecastTemp}°C`;
    document.getElementById("forecastCondition").textContent =
      forecastCondition;
    document.getElementById(
      "forecastHumidity"
    ).textContent = `${forecastHumidity}%`;

    const iconUrlA = `http://openweathermap.org/img/wn/${currentIcon}.png`;
    const iconUrlB = `http://openweathermap.org/img/wn/${forecastIcon}.png`;
    document.getElementById("weatherIconA").src = iconUrlA;
    document.getElementById("weatherIconB").src = iconUrlB;

    const meetingField = document.querySelector(".weather-notice");
  
  const message = document.createElement("p");
  message.textContent =
    `Highest temperature for today is: ${data.list[0].main.temp_max}°C`;

    const closeButton = document.createElement("span");
    closeButton.classList.add("close-btn");
    closeButton.textContent = "❌ Close";
    closeButton.setAttribute("title", "Click to close");

    meetingField.appendChild(message);
    meetingField.appendChild(closeButton);

    document.body.appendChild(meetingField);

    closeButton.addEventListener("click", function () {
      meetingField.style.display = "none";
    });
  })
  .catch((error) => {
    console.error("There was a problem fetching the weather data:", error);
  });