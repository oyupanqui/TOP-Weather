import { weatherAPI, giphyKey } from './keys'

export async function getWeatherData (prompt) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${prompt}&aqi=no`
    const response = await fetch(url, {
        mode: "cors"
    }).then(function (response) {
        return response.json()
    })
    return response
}

export async function getGiphyData (prompt) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${String(prompt).replaceAll(" ", "+")}&api_key=${giphyKey}&limit=10`
    const response = await fetch(url, {
        mode: "cors"
    }).then(function (response) {
        return response.json()
    })
    return response
}