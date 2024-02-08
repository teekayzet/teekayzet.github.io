    // Fetching weather data from OpenWeatherMap API
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Harare&appid=554871bfeddb818f89851fd21bec81f5&units=metric')
        .then(response => response.json())
        .then(data => {
            // Update temperature
            const currentTemp = data.main.temp;
            document.getElementById('current-temp').textContent = currentTemp + "°C";

            // Update weather description
            const weatherDescription = data.weather[0].description;
            document.getElementById('weather-description').textContent = weatherDescription;

            // Update weather icon
            const weatherIcon = data.weather[0].icon;
            const iconUrl = "http://openweathermap.org/img/wn/" + weatherIcon + ".png";
            document.getElementById('weather-icon').src = iconUrl;
            document.getElementById('weather-icon').alt = weatherDescription;

            // Call function to update visit count
            updateVisitCount();
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });