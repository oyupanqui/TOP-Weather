const giphyKey = "tO9l2feYc3Uot5303yfSlDOFs3GJzFdz"
const weatherAPI = "4968ce87e17e44e083313750231310"

const submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click", function (event) {
    event.preventDefault()

    const prompt = document.getElementById("prompt").value
    console.log(prompt)
})

