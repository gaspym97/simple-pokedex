

async function fetchJson(url) {
    const res = await fetch(url)
    if (!res.ok) throw new Error('Pokemon not found')
    return res.json()
} 

function getEnglishDescription(speciesData) {
    const entry = speciesData.flavor_text_entries.find(e => e.language.name === 'en')
    return entry ? entry.flavor_text.replace(/\f|\n/g, ' ') : 'No description available.'
}

function formatGeneration (genName) {
    return genName.replace("generation-", "").toUpperCase()
}

function unique(arr) {
    return [...new Set(arr)]
}

async function getWeaknessesFromTypes(types) {
    const typeDataList = await Promise.all(
        types.map((type) => fetchJson(`https://pokeapi.co/api/v2/type/${type}`))
    )

    const weaknesses = typeDataList.flatMap((typeData) => typeData.damage_relations.double_damage_from.map(t => t.name))

    return unique(weaknesses)
}

function getMainAbility(pokemonData) {
    return pokemonData.abilities.find(a => !a.is_hidden)?.ability.name ?? "Unknown"
}

async function fetchPokemonByName(name) {
    const normalized = name.toLowerCase().trim()

    const [pokemonData, speciesData] = await Promise.all([
        fetchJson(`https://pokeapi.co/api/v2/pokemon/${normalized}`),
        fetchJson(`https://pokeapi.co/api/v2/pokemon-species/${normalized}`)
    ])

    return {
        id: pokemonData.id,
        name: pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1),
        image: pokemonData.sprites.other["official-artwork"].front_default,
        height: pokemonData.height, // meters
        weight: pokemonData.weight, // kg
        types: pokemonData.types.map(t => t.type.name),
        weaknesses: await getWeaknessesFromTypes(types),
        mainAbility: getMainAbility(pokemonData),
        generation: formatGeneration(speciesData.generation.name),
        description: getEnglishDescription(speciesData)
    }
}

export default fetchPokemonByName