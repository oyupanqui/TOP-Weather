import { weatherAPI } from './keys'

export async function getWeatherData (prompt) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${prompt}&aqi=no`
    const response = await fetch(url, {
        mode: "cors"
    }).then(function (response) {
        return response.json()
    })
    return response
}