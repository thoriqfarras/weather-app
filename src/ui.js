import { format } from 'date-fns';
import { searchCity } from './api';

export default function App() {
  let activeSlideIdx = 0;
  let lastClickedForecastControl = '';
  let weatherData = {};

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

  function clearForecastSection() {
    const forecastSection = document.getElementById('forecast');
    while (forecastSection.firstChild)
      forecastSection.removeChild(forecastSection.firstChild);
  }

  function renderCurrentWeatherInfo({
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
    console.log(time);
    dateTimePara.innerText = `${format(
      new Date(date),
      'EEEE d MMMM yyyy'
    )} ${time}`;

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
    precPara.innerText = `${Math.floor(precipitation)}%`;

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

  function createHourlyCard({ time, condition, icon }) {
    const card = document.createElement('div');
    card.classList.add(
      ...'flex w-full items-center gap-2 sm:flex-col sm:h-full text-center'.split(
        ' '
      )
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

  function createDailyCard({
    date,
    condition,
    icon,
    precipitation,
    uv,
    humidity,
    windSpeed,
    windDir,
    sunrise,
    sunset,
  }) {
    const div = document.createElement('div');
    div.classList.add(
      ...'forecast-card w-full flex flex-col bg-blue-200/50 rounded-2xl px-4 py-2 ease-in-out transition-all hover:bg-blue-500 cursor-pointer'.split(
        ' '
      )
    );
    div.innerHTML += `
      <div class="flex items-center">
        <p class="font-bold">${format(new Date(date), 'EEEE, d MMM')}</p>
        <p class="ml-auto font-bold">${condition}</p>
        <img
          src="${icon}"
          alt="condition icon"
          class="condition-icon h-10 aspect-square"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="h-8 fill-zinc-50 transition-all ease-linear"
        >
          <path
            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
          />
        </svg>
      </div>
      <div
        class="extra max-h-0 overflow-hidden flex flex-col ease-in-out transition-[max-height] md:grid md:grid-cols-2 md:gap-x-4"
      >
        <div class="flex items-center text-zinc-100 text-lg pb-1">
          <p class="">Precipitation</p>
          <p id="precipitation" class="ml-auto">${Math.floor(
            precipitation
          )}%</p>
        </div>
        <div class="flex items-center gap-2 text-zinc-100 text-lg pb-1">
          <p class="">Wind</p>
          <p id="wind" class="ml-auto">${Math.floor(
            windSpeed
          )}kmh ${windDir}</p>
        </div>
        <div class="flex items-center text-zinc-100 text-lg pb-1">
          <p class="">UV Index</p>
          <p id="uv" class="ml-auto">${uv}</p>
        </div>
        <div class="flex items-center text-zinc-100 text-lg pb-1">
          <p class="">Humidity</p>
          <p id="humidity" class="ml-auto">${Math.floor(humidity)}%</p>
        </div>
        <div class="flex items-center text-zinc-100 text-lg pb-1">
          <p class="">Sunrise | Sunset</p>
          <p id="sun" class="ml-auto">${convertTo24hr(
            sunrise
          )} | ${convertTo24hr(sunset)}</p>
        </div>
      </div>
    `;
    return div;
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

  function moveForecastSlides(direction) {
    const slides = document.querySelector('.slides');
    if (direction === 'right') slides.scrollBy(1, 0);
    else if (direction === 'left') slides.scrollBy(-1, 0);
  }

  function renderNext24hrsForecast(forecastDays) {
    const currentHour = weatherData.location.localtime.slice(-5, -3);
    console.log(currentHour);
    const forecastSection = document.getElementById('forecast');
    forecastSection.classList.remove('flex-col');
    clearForecastSection();

    const forecastControlLeft = `
    <svg
      id="forecast-control-left"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="h-8 fill-zinc-50 transition-all ease-linear rotate-90 opacity-0"
    >
      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    </svg>
    `;
    forecastSection.innerHTML += forecastControlLeft;

    const slides = document.createElement('div');
    slides.classList.add(
      ...'slides flex overflow-x-hidden scroll-smooth scroll-snap-x-mandatory w-full'.split(
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
    let currentSlide = slideOne;
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
          currentSlide.appendChild(card);
          if (counter === 8) currentSlide = slideTwo;
          else if (counter === 16) currentSlide = slideThree;
          counter += 1;
        }
      });
    });

    const forecastControlRight = `
    <svg
      id="forecast-control-right"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="h-8 fill-zinc-50 transition-all ease-linear -rotate-90 cursor-pointer"
    >
      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    </svg>
  `;
    forecastSection.innerHTML += forecastControlRight;
  }

  function renderNext3daysForecast(forecastDays) {
    clearForecastSection();
    const forecastSection = document.getElementById('forecast');
    forecastSection.classList.add('flex-col');
    forecastDays.forEach((day) => {
      const card = createDailyCard({
        date: day.date,
        condition: day.day.condition.text,
        icon: day.day.condition.icon,
        precipitation: day.day.daily_chance_of_rain,
        uv: day.day.uv,
        humidity: day.day.avghumidity,
        windSpeed: day.day.maxwind_kph,
        windDir: '',
        aqi: '',
        sunrise: day.astro.sunrise,
        sunset: day.astro.sunset,
      });
      forecastSection.appendChild(card);
    });
  }

  function toggleForecastCard() {
    const extra = this.querySelector('.extra');
    const arrow = this.querySelector('svg');
    arrow.classList.toggle('rotate-180');
    if (extra.style.maxHeight) {
      extra.style.maxHeight = null;
    } else {
      extra.style.maxHeight = `${extra.scrollHeight}px`;
    }
  }

  function next24HoursForecastSectionClickHandler(e) {
    if (
      e.target.id === 'forecast-control-left' ||
      e.target.parentNode.id === 'forecast-control-left'
    ) {
      moveForecastSlides('left');
      lastClickedForecastControl = 'left';
    } else if (
      e.target.id === 'forecast-control-right' ||
      e.target.parentNode.id === 'forecast-control-right'
    ) {
      moveForecastSlides('right');
      lastClickedForecastControl = 'right';
    }
  }

  function updateForecastControlOpacity() {
    const forecastControlLeft = document.getElementById(
      'forecast-control-left'
    );
    const forecastControlRight = document.getElementById(
      'forecast-control-right'
    );

    if (activeSlideIdx > 0 && lastClickedForecastControl === 'left')
      activeSlideIdx -= 1;
    else if (activeSlideIdx < 2 && lastClickedForecastControl === 'right')
      activeSlideIdx += 1;

    if (activeSlideIdx === 0) {
      forecastControlLeft.style.opacity = 0;
      forecastControlLeft.classList.toggle('cursor-pointer');
    } else if (activeSlideIdx === 2) {
      forecastControlRight.style.opacity = 0;
      forecastControlRight.classList.toggle('cursor-pointer');
    } else {
      forecastControlLeft.style.opacity = 1;
      forecastControlRight.style.opacity = 1;
      forecastControlLeft.classList.add('cursor-pointer');
      forecastControlRight.classList.add('cursor-pointer');
    }
  }

  function switchForecastMode(e) {
    const nextTwentyFourHrsBtn = document.getElementById('next-24');
    const nextThreeDaysBtn = document.getElementById('next-3');

    if (e.target === nextTwentyFourHrsBtn) {
      nextTwentyFourHrsBtn.classList.remove('opacity-50');
      nextThreeDaysBtn.classList.add('opacity-50');
      activeSlideIdx = 0;
      renderNext24hrsForecast(weatherData.forecast.forecastday);
      const slides = document.querySelector('.slides');
      slides.addEventListener('scrollend', updateForecastControlOpacity);
    } else {
      nextThreeDaysBtn.classList.remove('opacity-50');
      nextTwentyFourHrsBtn.classList.add('opacity-50');
      renderNext3daysForecast(weatherData.forecast.forecastday);
      const forecastCards = document.querySelectorAll('.forecast-card');
      forecastCards.forEach((card) => {
        card.addEventListener('click', toggleForecastCard);
      });
    }
  }

  function updateFooterText() {
    // Updates the year accordingly in the footer
    const footer = document.querySelector('footer');
    const footerText = footer.querySelector('p');
    footerText.innerText = `${new Date().getFullYear()} \u00A9 Thoriq Farras`;
  }

  const searchBtn = document.querySelector('button');
  searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      weatherData = await searchCity(document.querySelector('input').value);
      renderCurrentWeatherInfo({
        location: weatherData.location,
        date: weatherData.location.localtime.split(' ')[0],
        time: weatherData.location.localtime.split(' ')[1],
        temp: weatherData.current.temp_c,
        tempHigh: weatherData.forecast.forecastday[0].day.maxtemp_c,
        tempLow: weatherData.forecast.forecastday[0].day.mintemp_c,
        tempFeel: weatherData.current.feelslike_c,
        precipitation: weatherData.current.precip_mm,
        windSpeed: weatherData.current.wind_kph,
        windDirection: weatherData.current.wind_dir,
        uvIndex: weatherData.current.uv,
        aqi: weatherData.current.air_quality['us-epa-index'],
        humidity: weatherData.current.humidity,
        sunriseTime: weatherData.forecast.forecastday[0].astro.sunrise,
        sunsetTime: weatherData.forecast.forecastday[0].astro.sunset,
        icon: weatherData.current.condition.icon,
      });
      renderNext24hrsForecast(weatherData.forecast.forecastday);
      const slides = document.querySelector('.slides');
      slides.addEventListener('scrollend', updateForecastControlOpacity);
    } catch (error) {
      alert(error);
    }
  });

  const forecastSwitch = document.getElementById('forecast-switch');
  forecastSwitch.addEventListener('click', switchForecastMode);

  const forecastSection = document.getElementById('forecast');
  forecastSection.addEventListener(
    'click',
    next24HoursForecastSectionClickHandler
  );

  searchCity('Gunungpati').then((data) => {
    weatherData = data;
    renderCurrentWeatherInfo({
      location: data.location,
      date: data.location.localtime.split(' ')[0],
      time: data.location.localtime.split(' ')[1],
      temp: data.current.temp_c,
      tempHigh: data.forecast.forecastday[0].day.maxtemp_c,
      tempLow: data.forecast.forecastday[0].day.mintemp_c,
      tempFeel: data.current.feelslike_c,
      precipitation: data.current.precip_mm,
      windSpeed: data.current.wind_kph,
      windDirection: data.current.wind_dir,
      uvIndex: data.current.uv,
      aqi: data.current.air_quality['us-epa-index'],
      humidity: data.current.humidity,
      sunriseTime: data.forecast.forecastday[0].astro.sunrise,
      sunsetTime: data.forecast.forecastday[0].astro.sunset,
      icon: data.current.condition.icon,
    });
    renderNext24hrsForecast(data.forecast.forecastday);
    const slides = document.querySelector('.slides');
    slides.addEventListener('scrollend', updateForecastControlOpacity);
  });
  updateFooterText();
}
