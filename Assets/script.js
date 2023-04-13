//var api = "42bf66daa37111c923b4ae8bc2f7c3e5"
var api = "f64f9e2d4fda40afd330c539b14a2d45";
var city = document.getElementById("search").value;
var secondApi =
  "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";

var firstApi = `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${city}&appid=${api}`;

document.getElementById("btn").onclick = () => {
  var city = document.getElementById("search").value;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" +
      city +
      "&appid=" +
      api
  )
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      var lat = result.coord.lat;
      var lon = result.coord.lon;
      //console.log(result.main.temp);
      document.getElementById("temperature").textContent =result.main.temp
      //console.log(result.wind.speed)
      document.getElementById("windspeed").textContent =result.wind.speed
      //console.log(result.main.humidity)
      document.getElementById("humidity").textContent =result.main.humidity
      //console.log(result.weather[0].icon)
      document.getElementById("weather-icon").src="https://openweathermap.org/img/wn/" +result.weather[0].icon +".png"
      document.getElementById("searched-city").textContent=result.name
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=" +
          api
      )
        .then((res) => res.json())
        //.then((result) => console.log("result", result));

        fetch(
          "https://api.openweathermap.org/data/2.5/weather?units=imperial&cnt=5&q=" +
          city +
          "&appid=" +
          api
        )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          var lat = result.coord.lat;
          var lon = result.coord.lon;
          console.log(result)
        });
    });
    
  }