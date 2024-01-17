const URL = 'https://pokeapi.co/api/v2/pokemon/';

const searchInput = document.getElementById("search");
const pokedexContainer = document.getElementById("pokedex");


async function searchPokemon() {
    const searchedPokemon = searchInput.value.toLowerCase();

    try{
        const response = await fetch(URL + searchedPokemon)
        const data = await response.json();

        pokedexContainer.innerHTML = 
        `<h2>${data.name}</h2
        <img src="${data.sprites.front_default}">
        <p>Numero: ${data.id} </p>
        <p>Altura ${data.height} </p>
        <p>Peso ${data.weight} </p>`
;
    } catch(error){
        console.error(error);
    }
}

document.getElementById("btn-search").addEventListener("click",searchPokemon);