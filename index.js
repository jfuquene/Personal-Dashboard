let geoUrl = "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}" 
let apiKey = ""

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.body.innerHTML += data.user.name
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })


    fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    }).then( data => {
        document.getElementById("symbol").innerHTML = `
        <img src=${data.image.small} />
        <span>${data.name}</span>
        `;

        document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })

    let getTime = () => {
        let time = document.getElementById("time")
    const date = new Date()
    time.innerHTML = ` Welcome John <br></br>
    ${date.toLocaleTimeString("en-us", {timeStyle: "medium"})}`
    }
    

    setInterval(getTime, 1000)



    navigator.geolocation.getCurrentPosition(position => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=`)
        .then(res => {
            if (!res.ok){
                throw Error("Weather data not available")
             }
             return res.json()})
        .then(data => console.log(data))
        .catch(err => console.log(err))
    });

    // coords: 
    // GeolocationCoordinates
    //  {latitude: 38.8498562, 
    // longitude: -77.0510555, 
    // altitude: null, 
    // accuracy: 11.577, 
    // altitudeAccuracy: null, …}

// async function getWeather(){
//     let response = await fetch("api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=3")
//     let data = await response.json()
//     console.log(data)
// }
// getWeather()