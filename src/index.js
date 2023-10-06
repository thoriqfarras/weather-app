import './styles.css';
import { getForecast, getForecastViaPromise } from './api';
import renderCurrentWeatherInfo from './ui';

async function searchCity(e) {
  e.preventDefault();
  const city = document.querySelector('input').value;
  if (city) {
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
    } catch (error) {
      alert(error);
    }
  }
}

const btn = document.querySelector('button');
btn.addEventListener('click', searchCity);
