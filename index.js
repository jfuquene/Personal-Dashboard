

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").textContent = `by: ${data.user.name}`
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
        console.log(data)
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
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=`)
        .then(res => {
            if (!res.ok){
                throw Error("Weather data not available")
             }
             return res.json()})
        .then(data => {
            console.log(data)
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp"> ${Math.round(data.main.temp)}º</p>
                <p class="weather-city" > ${data.name}</p>
            `
        })
        .catch(err => console.log(err))
    });


    function microsoft(){
        fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-upgrades-downgrades?symbol=MSFT&region=US", {
            "method": "GET",
            "headers":{
                "x-rapidapi-host": "",
		        "x-rapidapi-key": ""
            }
        })
        .then(res => res.json())
        .then(data => {
            document.getElementById("stock").innerHTML = `
            <p>Stock: ${data.price.symbol}</p>
            <p>Post Market: ${data.price.postMarketPrice.raw}</p> `
        })
    }
microsoft()