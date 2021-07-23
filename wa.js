// Date + time
let now = new Date();
let h2 = document.querySelector("h2");


let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

h2.innerHTML = `${day} ${date}.July ${year},${hour}:${minutes}`;
// Searching town + temperature
function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let weather = document.querySelector("#tempDisplay");
  weather.innerHTML = `${temperature}°C`;
  let mainCity = document.querySelector("h1");
  mainCity.innerHTML = response.data.name;
}
function enterCity(event) {
  event.preventDefault();
  let apiKey = "af87a624e39d4b2fea09075a0839db55";
  let unit = "metric";
  let searchInput = document.querySelector("#search-text-input");
  let citySearch = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showWeather);
}
// Current location
function currentPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = "af87a624e39d4b2fea09075a0839db55";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}
function currentLocationButton(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentPosition);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", enterCity);

let currentLocation = document.querySelector("#current-location-button");
currentLocation.addEventListener("click", currentLocationButton);
