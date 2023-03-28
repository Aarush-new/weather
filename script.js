$(document).ready(function() {
    $('#weatherForm').submit(function(event) {
      event.preventDefault();
      const location = $('#locationInput').val();
      const apiKey = 'e882b31d379fb898583148de637d0a83'; // replace with your own API key
  
      $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`, function(data) {
        const weatherOutput = `
          <h2>Weather for ${data.name}, ${data.sys.country}</h2>
          <div class="weather-info">
            <div class="left-col">
              <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
              <p>Pressure: ${data.main.pressure} hPa</p>
              <p>Sea Level: ${data.main.sea_level ? data.main.sea_level : 'N/A'}</p>
              <p>Humidity: ${data.main.humidity}%</p>
              <p>Description: ${data.weather[0].description}</p>
              <p>Wind Speed: ${data.wind.speed} m/s</p>
              <p>Latitude: ${data.coord.lat}</p>
              <p>Longitude: ${data.coord.lon}</p>
            </div>
            <div class="right-col">
              <p><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"></p>
            </div>
          </div>
        `;
        $('#weatherOutput').html(weatherOutput);
      });
    });
  });
  