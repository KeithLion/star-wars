const resultElement = document.getElementById('characterInfo')



fetch("https://www.swapi.tech/api/people/1/")
    .then(response => response.json())
    .then(data => {
        const name = data.result.properties.name;


        resultElement.innerHTML = `
            <ul>
            <li><p>${name}</p></li>
            </ul>
        `;
})
    .catch(error => {
        console.error('err',error)
})


// .then(people=>{
//     console.log(people.result.properties.name)


// fetch("https://www.swapi.tech/api/people/1/")
// .then(res => res.json())
// .then(data => console.log(data.result.properties.name))
// .catch(err => console.error(err))


// fetch('https://www.swapi.tech/api/films/1')
// .then(data => {
//     return data.json();
// })
// .then(films =>{
//     console.log(films.result.properties.title)
// })
// fetch("https://www.swapi.tech/api/films")
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.error(err))
// // async function getCharacter()
