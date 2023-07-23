fetch("https://www.swapi.tech/api/people")
.then(data => {
    return data.json();
})
.then(people=>{
    console.log(people.result.properties.name)
})


// function dropDown(){
//     let names = "";
//     let characterName = people.result.properties.name;
//     for (let i = 0; i <characterName; i++);{
//         names += characterName[i];
//     }
//     document.getElementById('characterList').innerHTML = names
// }

// function characterInfo(output){
//     console.log(output.data)
//     let name = document.querySelector('#name');
//     name.innerHtml = `${people.result.properties.name}`
// }


// res.json())
// .then(data => console.log(data))
// .catch(err => console.error(err))

// function dropDown(list)
//     console.log(list.data)

//     let url = 'https://www.swapi.tech/api/people'





fetch('https://www.swapi.tech/api/films')
.then(data => {
    return data.json();
})
.then(films =>{
    console.log(films.result.properties.title)
})
// fetch("https://www.swapi.tech/api/films")
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.error(err))
// // async function getCharacter()
