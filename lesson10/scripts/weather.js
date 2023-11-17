const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

let lat = 49.75799225169025
let lon = 6.62693287559525

let latFixed = lat.toFixed(2)
let lonFixed = lon.toFixed(2)

const url =
  `https://api.openweathermap.org/data/2.5/weather?lat=${latFixed}&lon=${lonFixed}&appid=1aa127830d80bc4014569d5f214be441`
async function apiFetch(){
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            displayResults(data)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        
    }
}

function displayResults(data) {
    farenheitValue = data.main.temp
    // celciusValue = (5 * (farenheitValue - 32) /9).toFixed(0)
    currentTemp.innerHTML = `${farenheitValue}&deg;F`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', desc)
    captionDesc.textContent = `${desc}`
}

apiFetch()

