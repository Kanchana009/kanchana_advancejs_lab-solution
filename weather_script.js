let inputCity = document.getElementById("enterCity");

inputCity.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        getResults(event.target.value);
    }
});

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const api = {
    url: "https://api.openweathermap.org/data/2.5/weather?q=",
    key: "2362a6ff9b31731ed50937e020b9a283"
}

function getResults(cityName) {

    fetch(`${api.url}${cityName}&appid=${api.key}&units=metric`)
        .then((result) => result.json())
        .then((res) => displayResults(res));

}

function displayResults(result) {
    console.log(result);

    let cityName = document.getElementById("cityName");
    let date = document.getElementById("date");
    let temperature = document.getElementById("temperature");
    let weatherDom = document.getElementById("weather");
    let highlowDom = document.getElementById("highlow");

    cityName.innerText = result.name + "," + result.sys.country;
    date.innerText = formatDate();
    temperature.innerText = `${Math.round(result.main.temp)}°c`;
    weatherDom.innerText = result.weather[0].main;
    highlowDom.innerText = `${Math.floor(result.main.temp_min)}°c /${Math.floor(result.main.temp_min)}°c`;
}

function formatDate() {

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let currentDate = new Date();
    let day = days[currentDate.getDay()];
    let month = months[currentDate.getMonth()];
    let year = currentDate.getFullYear();
    let date = currentDate.getDate();
    return `${day} ${date} ${month} ${year} `;
}

window.onload = getResults("Chennai");