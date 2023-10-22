import { getWeatherData } from './search' 

const countryDiv = document.getElementById("country")
const latitudeDiv = document.getElementById("latitude")
const longitudeDiv = document.getElementById("longitude")
const nameDiv = document.getElementById("name")
const timeDiv = document.getElementById("time")

const cloudDiv = document.getElementById("cloud")
const conditionDiv = document.getElementById("condition")
const humidityDiv = document.getElementById("humidity")
const precipitationDiv = document.getElementById("precipitation")
const temperatureDiv = document.getElementById("temperature")
const windDiv = document.getElementById("wind")

function responseUI (response) {
    countryDiv.textContent = response.location.country
    latitudeDiv.textContent = response.location.lat
    longitudeDiv.textContent = response.location.lon
    nameDiv.textContent = response.location.name
    timeDiv.textContent = response.location.localtime
    cloudDiv.textContent = response.current.cloud
    conditionDiv.textContent = response.current.condition.text
    humidityDiv.textContent = response.current.humidity
    precipitationDiv.textContent = response.current.precip_mm
    temperatureDiv.textContent = response.current.temp_c
    windDiv.textContent = response.current.wind_mph
}

export function submitListener () {
    const submitBtn = document.getElementById("submit")

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault()
    
        const prompt = document.getElementById("prompt").value
        
        getWeatherData(prompt)
            .then((response) => responseUI(response))
    })
    return submitBtn
}



