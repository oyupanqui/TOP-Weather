const giphyKey = "tO9l2feYc3Uot5303yfSlDOFs3GJzFdz"
const weatherAPI = "4968ce87e17e44e083313750231310"

const submitBtn = document.getElementById("submit")

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

async function getData (prompt, key) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${prompt}&aqi=no`
    const response = await fetch(url, {
        mode: "cors"
    }).then(function (response) {
        return response.json()
    }).then(function (response) {
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
        console.log(response)
    })
}

submitBtn.addEventListener("click", function (event) {
    event.preventDefault()

    const prompt = document.getElementById("prompt").value

    getData(prompt, weatherAPI)
})

