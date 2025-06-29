async function getWeather() {
  const location = document.getElementById('locationInput').value;
  const display = document.getElementById('weatherDisplay');

  if (!location) {
    display.innerText = 'Please enter a city name.';
    return;
  }

  const apiKey = 'YOUR_API_KEY_HERE'; // 🔑 Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      display.innerHTML = `
        <strong>${data.name}</strong><br>
        Weather: ${data.weather[0].description}<br>
        Temperature: ${data.main.temp}&#8451;<br>
        Humidity: ${data.main.humidity}%<br>
        Wind: ${data.wind.speed} m/s
      `;
    } else {
      display.innerText = 'City not found.';
    }
  } catch (error) {
    display.innerText = 'Error fetching weather data.';
  }
}
