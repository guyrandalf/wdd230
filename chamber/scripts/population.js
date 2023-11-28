const url =
  "https://get-population.p.rapidapi.com/population/country?country=Nigeria";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "743ff4d1ddmsh9777f8ff964f941p13b6ecjsn02836b796212",
    "X-RapidAPI-Host": "get-population.p.rapidapi.com",
  },
};

const country = document.getElementById("country");
const population = document.getElementById("population");

async function fetchPopulationData() {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const result = await response.json();

    const countryVal = result.country;
    const count = result.readable_format;

    country.textContent = countryVal;
    population.textContent = count;

  } catch (error) {
    console.error(error);
    populationDataElement.textContent = "Error fetching population data";
  }
}

// Call the function to fetch and display the data
fetchPopulationData();
