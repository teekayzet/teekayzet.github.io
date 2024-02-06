// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

// Declare a const variable named "url" and assign it a valid URL string
const url = "https://api.openweathermap.org/data/2.5/weather";

// Define an asynchronous function named "apiFetch()"
async function apiFetch() {
  try {
    // Fetch data from the API
    const response = await fetch(
      `${url}?lat=49.75&lon=6.64&units=imperial&appid=d2847e338767667f53e72a4a0c90ca1d`
    );

    // Check if response is OK
    if (response.ok) {
      // Convert response to JSON
      const data = await response.json();
      // Output data to the console for testing
      console.log(data);
      // Call the displayResults function to update the HTML
      displayResults(data);
    } else {
      // If response is not OK, throw an error with the response text
      throw new Error(response.statusText);
    }
  } catch (error) {
    // Output any errors to the console
    console.error("Error fetching data:", error);
  }
}

// Define the displayResults function to update the HTML with weather data
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = `${desc}`;
}

// Invoke the apiFetch() function
apiFetch();
