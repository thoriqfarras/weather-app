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
  icon,
}) {
  const locationHeader = document.getElementById('location');
  locationHeader.innerText = `${location.name}, ${location.country}`;

  const dateTimePara = document.getElementById('datetime');
  dateTimePara.innerText = `${new Date(date).toLocaleDateString()} ${time}`;

  const conditionIcon = document.getElementById('condition-icon');
  conditionIcon.setAttribute('src', icon);

  const tempLowPara = document.getElementById('temp-low');
  tempLowPara.innerText = `${Math.floor(tempLow)}\u00B0C`;

  const tempCurrPara = document.getElementById('temp-current');
  tempCurrPara.innerText = `${Math.floor(temp)}\u00B0C`;

  const tempHighPara = document.getElementById('temp-high');
  tempHighPara.innerText = `${Math.floor(tempHigh)}\u00B0C`;

  const tempFeelsPara = document.getElementById('temp-feels');
  tempFeelsPara.innerText = `Feels like ${Math.floor(tempFeel)}\u00B0C`;

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
