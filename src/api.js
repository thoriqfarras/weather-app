export async function getForecast(city, days) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=494b4005bb82497883871927232508&q=${city}&days=${days}&aqi=yes`,
      { mode: 'cors' }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export function getForecastViaPromise(city, days) {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=494b4005bb82497883871927232508&q=${city}&days=${days}`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
