const giphyKey = "tO9l2feYc3Uot5303yfSlDOFs3GJzFdz"
const weatherAPI = "4968ce87e17e44e083313750231310"

const submitBtn = document.getElementById("submit")

async function getData (prompt, key) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${prompt}&aqi=no`
    const response = await fetch(url, {
        mode: "cors"
    }).then(function (response) {
        return response.json()
    }).then(function (response) {
        console.log(response)
    })
}

submitBtn.addEventListener("click", function (event) {
    event.preventDefault()

    const prompt = document.getElementById("prompt").value

    getData(prompt, weatherAPI)
})

