export async function getForecast(city, days) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=494b4005bb82497883871927232508&q=${city}&days=${days}&aqi=yes`,
    { mode: 'cors' }
  );
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error(data.error.message);
  }
  console.log(data, response);
  return data;
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
