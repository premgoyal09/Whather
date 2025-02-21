const inpBox = document.querySelector("#inp");
const weatherBox = document.querySelector("#weather-box");


inpBox.addEventListener(
    "keyup",
    async function (e) {
        if (e.key == "Enter") {
            e.target.disabled = true;
            weatherBox.innerHTML = `
                <h1 class="loader">Loading...</h1>
            `
            const city = e.target.value;
            const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21805bff7224936fa25d6cec016a0a4b&units=metric`
            // console.log(API);


            const response = await fetch(API);
            // console.log(response);
            e.target.disabled = false;
            if (response.status == 404) {
                weatherBox.innerHTML = `<h1>City not Found</h1>`
            }
            else {
                const data = await response.json();
                // console.log(data);
                weatherBox.innerHTML = `
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                <div>
                <h2>${data.main.temp}</h2>
                <h4>Haze</h4>
                </div>
               `
            }
        }
    }

)