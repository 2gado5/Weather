var card_weather = document.querySelector('.card-weather');
var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var time = document.querySelector('.time');
var date = document.querySelector('.date');
var temperature_item = document.querySelector('.temperature-item');
var weather = document.querySelector('.weather');
var foresight = document.querySelector('.foresight');
var windSpeed = document.querySelector('.windSpeed');
var humidity = document.querySelector('.humidity');
var body = document.querySelector('body')

async function changeWeatherUI(input) {
    var Api = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;

    let data = await fetch(Api).then(function (response) {
        return response.json();
    })
    if (data.cod === 200) {
        city.innerText = data.name;
        country.innerText = data.sys.country;
        const variable = Math.floor(data.main.temp);
        temperature_item.innerText = variable;
        weather.innerText = data.weather[0].main;
        foresight.innerText = data.visibility + ' (m)';
        windSpeed.innerText = data.wind.speed + ' (m/s)';
        humidity.innerText = data.main.humidity + ' (%)';
        time.innerText = new Date().toLocaleTimeString('vi');
        date.innerText = new Date().toLocaleDateString('vi');

        body.setAttribute('class', 'hot');
        card_weather.classList.add('hot-item');
        if (variable >= 30) {
            body.setAttribute('class', 'hot');
        }
        if (variable >= 20 && variable <= 29) {
            body.setAttribute('class', 'autumn');
        }
        if (variable < 20) {
            body.setAttribute('class', 'cold');
        }
    } else {
        alert('Địa điểm này không tồn tại');
    }

}

search.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        var input = search.value.trim();
        changeWeatherUI(input)
    }
})

changeWeatherUI('ha noi');