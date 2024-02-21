// Select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

// Declare a const variable named "url" for the current weather API
const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=Harare&appid=554871bfeddb818f89851fd21bec81f5&units=metric";

// Declare a const variable named "forecastUrl" for the forecast API
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Harare&appid=554871bfeddb818f89851fd21bec81f5&units=metric";

// Define an asynchronous function named "fetchCurrentWeather()"
async function fetchCurrentWeather() {
  try {
    // Fetch current weather data from the API
    const response = await fetch(currentWeatherUrl);

    // Check if response is OK
    if (response.ok) {
      // Convert response to JSON
      const data = await response.json();
      // Output data to the console for testing
      console.log(data);
      // Call the displayCurrentWeather function to update the HTML
      displayCurrentWeather(data);
    } else {
      // If response is not OK, throw an error with the response text
      throw new Error(response.statusText);
    }
  } catch (error) {
    // Output any errors to the console
    console.error("Error fetching current weather data:", error);
  }
}

// Define an asynchronous function named "fetchForecast()"
async function fetchForecast() {
  try {
    // Fetch forecast data from the API
    const response = await fetch(forecastUrl);

    // Check if response is OK
    if (response.ok) {
      // Convert response to JSON
      const data = await response.json();
      // Output data to the console for testing
      console.log(data);
      // Call the displayForecast function to update the HTML
      displayForecast(data);
    } else {
      // If response is not OK, throw an error with the response text
      throw new Error(response.statusText);
    }
  } catch (error) {
    // Output any errors to the console
    console.error("Error fetching forecast data:", error);
  }
}

// Define the displayCurrentWeather function to update the HTML with current weather data
function displayCurrentWeather(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = `${desc}`;
}

// Define the displayForecast function to update the HTML with forecast data
function displayForecast(data) {
  // Filter forecast data for the next three days
  const today = new Date().getDate(); // Get today's date
  const forecastData = data.list.filter(item => {
    // Get the date of the forecast item
    const forecastDate = new Date(item.dt * 1000).getDate();
    // Return true if the forecast item date is within the next three days
    return forecastDate > today && forecastDate <= today + 3;
  });

  // Iterate over each forecast item and display the temperature
  forecastData.forEach((item, index) => {
    // Display the forecast temperature for the day
    const forecastTempElement = document.querySelector(`#forecast-temp-${index + 1}`);
    forecastTempElement.innerHTML = `${item.main.temp}&deg;C`;
  });
}


// Invoke the fetchCurrentWeather() and fetchForecast() functions
fetchCurrentWeather();
fetchForecast();
