//var api = "42bf66daa37111c923b4ae8bc2f7c3e5"
var api= "f64f9e2d4fda40afd330c539b14a2d45"
var city = document.getElementById('search').value
var secondApi = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'

var firstApi= `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${city}&appid=${api}`

document.getElementById('btn').onclick =

()=>{

    var city = document.getElementById('search').value
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    api)
    .then(res=> res.json())
    .then(result=> {console.log(result)
    var lat = result.coord.lat
    var lon = result.coord.lon

    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    api)
    .then(res=> res.json())
    .then(result=> console.log("result", result))
    })
}