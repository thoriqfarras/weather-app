function convertTo24hr(time) {
  const hour = +time.slice(0, 2);
  if (hour === 12 && time.includes('AM')) return `00${time.slice(2, -2)}`;
  if (hour !== 12 && time.includes('PM'))
    return `${12 + hour}${time.slice(2, -2)}`;
  return `${time.slice(0, -2)}`;
}

function translateUvIndex(index) {
  if (index < 3) return 'Low';
  if (index < 6) return 'Medium';
  if (index < 8) return 'High';
  if (index < 11) return 'Very High';
  return 'Extreme';
}

function translateAqi(index) {
  switch (index) {
    case 1:
      return 'Good';
    case 2:
      return 'Moderate';
    case 3:
      return 'Unhealthy*';
    case 4:
      return 'Unhealthy';
    case 5:
      return 'Very Unhealthy';
    case 6:
      return 'Hazardous';
    default:
      return 'N/A';
  }
}

export function renderCurrentWeatherInfo({
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
  precPara.innerText = `${precipitation}%`;

  const windPara = document.getElementById('wind');
  windPara.innerText = `${Math.round(windSpeed)}kmh ${windDirection}`;

  const uvPara = document.getElementById('uv');
  uvPara.innerText = `${uvIndex} • ${translateUvIndex(uvIndex)}`;

  const aqiPara = document.getElementById('aqi');
  aqiPara.innerText = `${aqi} • ${translateAqi(aqi)}`;

  const humidityPara = document.getElementById('humidity');
  humidityPara.innerText = `${humidity}%`;

  const sunPara = document.getElementById('sun');
  sunPara.innerText = `${convertTo24hr(sunriseTime)} | ${convertTo24hr(
    sunsetTime
  )}`;
}

export function switchForecastMode(e) {
  const nextTwentyFourHrsBtn = document.getElementById('next-24');
  const nextThreeDaysBtn = document.getElementById('next-3');

  if (e.target === nextTwentyFourHrsBtn) {
    nextTwentyFourHrsBtn.classList.remove('opacity-50');
    nextThreeDaysBtn.classList.add('opacity-50');
  } else {
    nextThreeDaysBtn.classList.remove('opacity-50');
    nextTwentyFourHrsBtn.classList.add('opacity-50');
  }
}
