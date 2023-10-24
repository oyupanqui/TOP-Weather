import { mapListener } from './map'
import { getWeatherData, getGiphyData } from './search' 

const countryDiv = document.getElementById("country")
const regionDiv = document.getElementById("region")
const nameDiv = document.getElementById("name")
const cloudDiv = document.getElementById("cloud")
const conditionDiv = document.getElementById("condition")
const humidityDiv = document.getElementById("humidity")
const precipitationDiv = document.getElementById("precipitation")
const temperatureDiv = document.getElementById("temperature")
const windDiv = document.getElementById("wind")

const giphyDiv = document.getElementById("giphy")

function weatherUI (response) {
    countryDiv.textContent = response.location.country
    nameDiv.textContent = response.location.name
    regionDiv.textContent = response.location.region
    cloudDiv.textContent = response.current.cloud
    conditionDiv.textContent = response.current.condition.text
    humidityDiv.textContent = response.current.humidity
    precipitationDiv.textContent = response.current.precip_mm
    temperatureDiv.textContent = response.current.temp_c
    windDiv.textContent = response.current.wind_mph
}

function giphyUI (response) {
    console.log(response)
    const link = response.data[Math.floor(Math.random()*response.data.length)].embed_url
    giphyDiv.src = link
    return link
}

export function submitListener () {
    const submitBtn = document.getElementById("submit")

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault()
    
        const prompt = document.getElementById("prompt").value
        
        getWeatherData(prompt)
            .then((response) => {
                weatherUI(response)
                mapListener(response)
                getGiphyData(response.location.country)
                    .then(giphyUI)
            })
    })
    return submitBtn
}



