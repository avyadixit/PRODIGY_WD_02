const API = "bd576e7b118a4a610a2a1281a7cc1d20";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button");

const weathericon = document.querySelector(".image");


async function checkweather(city) {
    const response = await fetch(API_URL + city + `&appid=${API}`);
    var data = await response.json();
    
    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temprature").innerHTML = Math.round(data.main.temp) + " °C";
 document.querySelector(".sppedwind").innerHTML= data.wind.speed + " km/h";
 document.querySelector(".myhumidity").innerHTML= data.main.humidity + " %";

 if (data.weather[0].main=="Clouds") {

    weathericon.src = "C:\Users\Lenovo\Downloads\Cloudy.png";
    
 }

 else if (data.weather[0].main=="Clear") {
    weathericon.src = "C:\Users\Lenovo\Downloads\sunny.png";
 }

 else if (data.weather[0].main=="Rain") {
    weathericon.src = "C:\Users\Lenovo\Downloads\rain.png";
 }
 else if (data.weather[0].main=="Drizzle") {
    weathericon.src = "C:\Users\Lenovo\Downloads\snow fall.png";
 }
 else if (data.weather[0].main=="Mist") {
    weathericon.src = "C:\Users\Lenovo\Downloads\heavy.png";
 }

 document.querySelector(".weather").style.display="flex";
 



}

searchbutton.addEventListener("click",()=>{
    checkweather(searchbox.value);
})

checkweather();