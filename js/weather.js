const weatherDiv = document.querySelector("#weather");
const mylocation = weatherDiv.querySelector("span:first-child");
const nowWeather = weatherDiv.querySelector("span:last-child");
const API_KEY = "2931f5f22fe3a2de0716d4aedb2f7eec";

navigator.geolocation.getCurrentPosition(wellworking, notworking);

function wellworking(a) {
    const lat = a.coords.latitude;
    const lon = a.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((a) => a.json()).then((a) =>
    {
        mylocation.innerText = a.name;
        nowWeather.innerText = `/${a.weather[0].main} / ${a.main.temp}`;
        console.log(a);
    });
}



function notworking(a) {
    alert("oh my god, Can't load weather!!");
}
