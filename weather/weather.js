// url for weather by city - https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=5b2e7abcace088ef05fea9afddc76b8c
const weatherCard = document.createElement("div");

weatherCard.style.border = "1px solid";
weatherCard.style.borderRadius = "5px";
weatherCard.style.padding = "8px";
weatherCard.style.textAlign = "center";
weatherCard.style.display = "inline-block";

const getWeather = async () => {
  const inpElement = document.querySelector("input");

  if (inpElement.value) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inpElement.value}&appid=5b2e7abcace088ef05fea9afddc76b8c`
    );

    const weather = await response.json();

    weatherCard.innerHTML = `<h3>${weather.name}</h3>
    <p>Humidity: ${weather.main.humidity}</p>
    <p>Temp: ${weather.main.temp}</p>
    <p>Pressure: ${weather.main.pressure}</p>`;
    document.body.appendChild(weatherCard);
  }
  inpElement.value = "";
};
