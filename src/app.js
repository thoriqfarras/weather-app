import { getForecast } from './api';
import {
  renderNext24hrsForecast,
  renderCurrentWeatherInfo,
  switchForecastMode,
  moveForecastSlides,
  updateForecastControlOpacity,
} from './ui';
import './styles.css';

export default function App() {
  async function searchCity(city) {
    try {
      const data = await getForecast(city, 3);
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
      // renderNext24hrsForecast(data.forecast.forecastday);
    } catch (error) {
      alert(error);
    }
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

  const btn = document.querySelector('button');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    searchCity(document.querySelector('input').value);
  });

  const forecastSwitch = document.getElementById('forecast-switch');
  forecastSwitch.addEventListener('click', switchForecastMode);

  // testing dropdown
  const forecastCards = document.querySelectorAll('.forecast-card');
  forecastCards.forEach((card) => {
    card.addEventListener('click', toggleForecastCard);
  });

  // testing forecast slides control
  let activeSlide = 0;
  const slidesContainer = document.querySelector('.slides');
  const forecastControlRight = document.getElementById(
    'forecast-control-right'
  );
  const forecastControlLeft = document.getElementById('forecast-control-left');

  forecastControlRight.addEventListener('click', () => {
    moveForecastSlides('right');
    if (activeSlide < 2) activeSlide += 1;
  });

  forecastControlLeft.addEventListener('click', () => {
    moveForecastSlides('left');
    if (activeSlide > 0) activeSlide -= 1;
  });

  slidesContainer.addEventListener('scrollend', () => {
    if (activeSlide === 0) {
      forecastControlLeft.style.opacity = 0;
      forecastControlLeft.classList.toggle('cursor-pointer');
    } else if (activeSlide === 2) {
      forecastControlRight.style.opacity = 0;
      forecastControlRight.classList.toggle('cursor-pointer');
    } else {
      forecastControlLeft.style.opacity = 1;
      forecastControlRight.style.opacity = 1;
      forecastControlLeft.classList.add('cursor-pointer');
      forecastControlRight.classList.add('cursor-pointer');
    }
  });

  searchCity('Gunungpati');
}
