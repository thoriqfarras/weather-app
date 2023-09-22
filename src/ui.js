export default function renderCurrentWeatherInfo({
  city,
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
  const cityHeader = document.getElementById('city');
  cityHeader.innerText = city;

  const dateTimePara = document.getElementById('datetime');
  dateTimePara.innerText = `${date} ${time}`;

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
