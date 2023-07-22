fetch("https://www.swapi.tech/api/planets/5/")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err))

// let form = document.