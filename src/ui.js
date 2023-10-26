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

function createHourlyCard({ time, condition, icon }) {
  const card = document.createElement('div');
  card.classList.add(
    ...'flex w-full items-center gap-2 sm:flex-col sm:h-full'.split(' ')
  );
  card.innerHTML = `
    <p class="font-bold sm:order-1">${time}</p>
    <p class="font-bold ml-auto sm:order-3 sm:ml-0">${condition}</p>
    <img
      src="${icon}"
      alt="condition icon"
      class="condition-icon h-10 aspect-square sm:order-2"
    />
  `;
  return card;
}

function clearForecastSection(forecastSection) {
  while (forecastSection.firstChild)
    forecastSection.removeChild(forecastSection.firstChild);
}

function createForecastSlideDiv() {
  const slide = document.createElement('div');
  slide.classList.add(
    ...'slide w-full flex flex-col gap-4 relative scroll-snap-align-start flex-shrink-0 transition-[transform] items-center sm:flex-row'.split(
      ' '
    )
  );
  return slide;
}

export function moveForecastSlides(direction) {
  const slides = document.querySelector('.slides');
  if (direction === 'right') slides.scrollBy(1, 0);
  else if (direction === 'left') slides.scrollBy(-1, 0);
  // moveForecastSlidesBar(direction);
}

export function renderNext24hrsForecast(forecastDays) {
  const currentHour = new Date().getHours();
  const forecastSection = document.getElementById('forecast');
  clearForecastSection(forecastSection);

  const slides = document.createElement('div');
  slides.classList.add(
    ...'slides flex overflow-x-auto scroll-smooth scroll-snap-x-mandatory w-full'.split(
      ' '
    )
  );
  forecastSection.appendChild(slides);

  const slideOne = createForecastSlideDiv();
  const slideTwo = createForecastSlideDiv();
  const slideThree = createForecastSlideDiv();
  slideOne.classList.add('forecast-slide-1');
  slideTwo.classList.add('forecast-slide-2');
  slideThree.classList.add('forecast-slide-3');
  slides.appendChild(slideOne);
  slides.appendChild(slideTwo);
  slides.appendChild(slideThree);
  let counter = 1;
  let activeSlide = slideOne;
  forecastDays.forEach((day, index) => {
    day.hour.forEach((hour, hourValue) => {
      if (
        (index === 0 && hourValue > currentHour) ||
        (index === 1 && hourValue <= currentHour)
      ) {
        const card = createHourlyCard({
          time: `${hourValue < 10 ? `0${hourValue}` : hourValue}:00`,
          condition: hour.condition.text,
          icon: hour.condition.icon,
        });
        activeSlide.appendChild(card);
        if (counter === 8) activeSlide = slideTwo;
        else if (counter === 16) activeSlide = slideThree;
        counter += 1;
      }
    });
  });
  // testing forecast slides control
  const forecastControlRight = document.getElementById(
    'forecast-control-right'
  );
  const forecastControlLeft = document.getElementById('forecast-control-left');

  forecastControlRight.addEventListener('click', () => {
    moveForecastSlides('right');
    // moveForecastSlidesBar('right');
  });

  forecastControlLeft.addEventListener('click', () => {
    moveForecastSlides('left');
  });
}

export function updateForecastControlOpacity(activeSlide) {
  const forecastControlRight = document.getElementById(
    'forecast-control-right'
  );
  const forecastControlLeft = document.getElementById('forecast-control-left');

  if (activeSlide === 0) {
    forecastControlLeft.style.opacity = 0;
    forecastControlLeft.classList.toggle('cursor-pointer');
  } else if (activeSlide === 2) {
    forecastControlRight.style.opacity = 0;
    forecastControlRight.classList.toggle('cursor-pointer');
  } else {
    forecastControlRight.style.opacity = 1;
    forecastControlLeft.style.opacity = 1;
    forecastControlLeft.classList.add('cursor-pointer');
    forecastControlRight.classList.add('cursor-pointer');
  }

  console.log(activeSlide);
}
