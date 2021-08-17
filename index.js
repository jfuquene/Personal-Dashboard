let url = 

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        //  
        document.body.innerHTML += data.user.name
    })