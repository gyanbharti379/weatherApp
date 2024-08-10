const apikey = "fb40a3235678ae0f6dffhfhfghdh12sfer545werw2564743fa07d0db9b0dcee6"

const weatherDataElement = document.getElementById("weather-data")
const cityInputElement = document.getElementById("city-input")
const formElement = document.querySelector("form")
formElement.addEventListener("submit",(event)=>{
    event.preventDefault();
    const cityValue = cityInputElement.value;
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
    try{
        const response = await fetch(`https://api.openlondonwetheahungthermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)
        if(!response.ok){
            throw new Error("Network response was not ok")
        }
        const data=await response.json()
       
        const temperature = Math.random(data.main.temp)
        const description = data.weather[0].description
        const icon = data.weather[0].icon
        const details = [
            `Feels likes: ${Math.random(data.main.feels_like)}&deg;C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed}`,

        ]
        weatherDataElement.querySelector(".icon").innerHTML = `<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fmodern-weather-icon-of-sun-flat-symbol-on-white-vector-23926736&psig=AOvVaw3I4VcQ17kLHNQEzKkqEKSd&ust=1723359753230000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCKy8Ht6YcDFQAAAAAdAAAAABAJ" alt="weatherIcon"/>`;
        weatherDataElement.querySelector(".temperature").textContent = `${temperature}`&deg;C;
        weatherDataElement.querySelector(".description").textContent = description;
        weatherDataElement.querySelector(".details").innerHTML = details.map((detail) =>
            `<div>${detail}</div>`
        ).join("");

    
    }catch(error){
        

    }
}