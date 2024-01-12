const setPokemonImg = (url) => {
    const imgPlaceholder = document.getElementById('pokemon-img')
    imgPlaceholder.src = url
}

const setPokemonIDName = (id,name) => {
    const namePlaceholder = document.getElementById('pokemon-name')
    namePlaceholder.innerText = id + ' ' + name
}

const setPokemonDesc = (desc) => {
    const descPlaceholder = document.getElementById('pokemon-description')
    descPlaceholder.innerText = desc
}

const setPokemonType = (types) => {
    const typeContainer = document.getElementById('pokemon-type')
    typeContainer.innerHTML = ''
    types.forEach(type => {
        const typeH2 = document.createElement('h2')
        typeH2.classList = `pokemon-type ${type}`
        typeH2.innerText = type.toUpperCase()

        typeContainer.appendChild(typeH2)
    });
}

const setPokemonHeightWeight = (height,weight) => {
    const heightPlaceholder = document.getElementById('pokemon-height')
    const weightPlaceholder = document.getElementById('pokemon-weight')

    heightPlaceholder.innerText = height/10 + " m"
    weightPlaceholder.innerHTML = weight/10 + " kg"
}

const setPokemonInfo = (info) => {
    const infoPlaceholder = document.getElementById('pokemon-info')
    infoPlaceholder.innerText = info
}

const getPokemon = async (id) => {
    const pokemon = {}

    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(res => res.json())
        const specieData = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(res => res.json())

        pokemon.id = String(id).padStart(3,'0')
        pokemon.name = data.name.toUpperCase()
        pokemon.height = data.height
        pokemon.weight = data.weight
        pokemon.types = data.types.map(item => item.type.name)
        pokemon.sprite = data.sprites.front_default
        pokemon.description = specieData.genera.filter(desc => desc.language.name == 'en').map(desc => desc.genus)[0]
        pokemon.info = specieData.flavor_text_entries[1].flavor_text.replace(/[\n\f]/g, ' ')

        setPokemonImg(pokemon.sprite)
        setPokemonIDName(pokemon.id,pokemon.name)
        setPokemonDesc(pokemon.description)
        setPokemonType(pokemon.types)
        setPokemonHeightWeight(pokemon.height,pokemon.weight)
        setPokemonInfo(pokemon.info)

        return pokemon
    } catch (error) {
        throw error
    }
}

async function fetchAndDisplayPokemon(id) {
    try {
        const pokemon = await getPokemon(id);
        console.table(pokemon);
    } catch (error) {
        console.error(error);
    }
}

let pokemonID = 1

document.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowDown'){
        if(pokemonID < 1008)pokemonID++
        else pokemonID = 1
    }
    if (e.key == 'ArrowUp'){
        if(pokemonID > 1)pokemonID--
        else pokemonID = 1008
    }
    fetchAndDisplayPokemon(pokemonID)
})


const form = document.getElementById('search-form')
const input = document.getElementById('search-input')

form.addEventListener('submit', (event) => {

    event.preventDefault()

    pokemonID = input.value
    fetchAndDisplayPokemon(pokemonID);
})


fetchAndDisplayPokemon(pokemonID);



