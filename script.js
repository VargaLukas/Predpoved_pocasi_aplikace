const cityInput = document.querySelector(".search-bar");
const searchButtton = document.querySelector(".search-button");
const currentWeatherDiv = document.querySelector(".current-weather");
const weatherCardsDiv = document.querySelector(".weather-cards");

// API klíč ze zdroje openweathermap.org
const API_KEY = "7ecd4168c56c40154dd28d2c52537872";

const createWeatherCard = (cityName, weatherItem, index) => {

  // Zobrazení aktuálního počasí v dané lokalitě
  if (index === 0) {
    return `<div class="details">
              <h2 class="city">Aktuální počasí v ${cityName}</h2>        
              <h1 class="temperature">${(weatherItem.main.temp - 273.15).toFixed(2)} °C</h1>
              <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png" alt="" class="icon">
              <div class="description"></div>
              <div class="humidity">Vlhkost: ${weatherItem.main.humidity} %</div>
              <div class="wind">Rychlost větru: ${weatherItem.wind.speed} km/h</div>
            </div>`;
  } else {

    // Zobrazení dalších dní předpovědi počasí
    return `<li class="card">
            <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
            <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png" alt="" class="icon">
            <div class="temperature">${(weatherItem.main.temp - 273.15).toFixed(2)} °C</div> 
            <div class="humidity">Vlhkost: ${weatherItem.main.humidity} %</div>
            <div class="wind">Vítr: ${weatherItem.wind.speed} km/h</div>
          </li>`;
  };
};

const getWeatherDetails = (cityName, lat, lon) => {
  const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(WEATHER_API_URL)
    .then((response) => response.json())
    .then((data) => {

      // Vyfiltruje záznamy tak, aby zobrazovali pouze denní předpoveď
      const uniqueForecastDays = [];
      const fiveDaysForecast = data.list.filter((forecast) => {
        const forecastDate = new Date(forecast.dt_txt).getDate();
        
        if (!uniqueForecastDays.includes(forecastDate)) {
          return uniqueForecastDays.push(forecastDate);
        }
      });

      // Vymazání předešlých dat z HTML
      cityInput.value = "";
      currentWeatherDiv.innerHTML = "";
      weatherCardsDiv.innerHTML = "";

      // Vytvoření karet s počasím pro následující dny a jejich přidání do DOM
      fiveDaysForecast.forEach((weatherItem, index) => {
        if(index === 0) {
          currentWeatherDiv.insertAdjacentHTML("beforeend", createWeatherCard(cityName, weatherItem, index));
        } else {
          weatherCardsDiv.insertAdjacentHTML("beforeend", createWeatherCard(cityName, weatherItem, index));
        }
        
      });
    })
    .catch(() => {
      alert("Chyba. Nepovedlo se načíst aktální předpověď počasí. Zkuste to prosím později.");
    });
};

const getCityCoordinates = () => {
  const cityName = cityInput.value.trim();
  if (!cityName) return;

  const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;

  // Načítání souřadnic zadaného města (délka, šířka a název města) za použití API
  fetch(GEOCODING_API_URL)
    .then((response) => response.json())
    .then((data) => {
      if (!data.length) return `Nepovedlo se načíst souřadnice pro ${cityName}`;
      const { name, lat, lon } = data[0];
      getWeatherDetails(name, lat, lon);
    })
    .catch(() => {
      alert("Chyba. Nepovedlo se načíst souřadnice. Zkuste to prosím později.");
    });
};

searchButtton.addEventListener("click", getCityCoordinates);
cityInput.addEventListener("keyup", e => e.key === "Enter" && getCityCoordinates());

/*
let weather = {
  apiKey: "7ecd4168c56c40154dd28d2c52537872", fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  
  displayWeather: function (data) {
    const { name } = data;    
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;    

    document.querySelector(".city").innerText = "Aktuální počasí v " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    /*document.querySelector(".description").innerText = description;
    document.querySelector(".temperature").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Vlhkost: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Rychlost větru: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
  },
  search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value); 
  }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Opava"); */
