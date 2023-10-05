export default function renderCurrentWeatherInfo({
  location,
  date,
  time,
  temp,
  tempHigh,
  tempLow,
  tempFeel,
  precipitation,
  windSpeed,
  windDirection,
  uvIndex,
  aqi,
  humidity,
  sunriseTime,
  sunsetTime,
}) {
  const locationHeader = document.getElementById('location');
  locationHeader.innerText = `${location.name}, ${location.country}`;

  const dateTimePara = document.getElementById('datetime');
  dateTimePara.innerText = `${new Date(date).toLocaleDateString()} ${time}`;

  const tempPara = document.getElementById('temp');
  tempPara.innerText = `${temp} High: ${tempHigh} Low: ${tempLow} Feels like: ${tempFeel}`;

  const precPara = document.getElementById('precipitation');
  precPara.innerText = `Precipitation: ${precipitation}`;

  const windPara = document.getElementById('wind');
  windPara.innerText = `Wind speed: ${windSpeed} Wind direction: ${windDirection}`;

  const uvPara = document.getElementById('uv');
  uvPara.innerText = `UV index: ${uvIndex}`;

  const aqiPara = document.getElementById('aqi');
  aqiPara.innerText = `Air quality: ${aqi}`;

  const humidityPara = document.getElementById('humidity');
  humidityPara.innerText = `Humidity: ${humidity}`;

  const sunPara = document.getElementById('sun');
  sunPara.innerText = `Sunrise: ${sunriseTime} Sunset: ${sunsetTime}`;
}
