export const getAllPokemon = async (limit = 10, offset = 0) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const resp = await fetch(url);
    const { results } = await resp.json();

    return results.map( pkm => {
        return {
            name: pkm.name,
            url: pkm.url
        }
    });
}

const getPokemonTypes = (types) => {
    return types.map(({ type }) => {
        return type.name
    });
}

const getPokemonAbilities = (abilities) => {
    return abilities.map(({ ability }) => {
        return ability.name;    
    });
}

const getPokemonStats = (stats) => {
    return stats.map((stat) => {
        return {
            base_stat: stat.base_stat,
            name_stat: stat.stat.name,
        }
    });
}

export const getPokemonPreviewInfo = async (url) => {
    const resp = await fetch(url);
    const { name, order, sprites, types } = await resp.json();

    return {
        name: name,
        number: order,
        sprite: sprites.other['official-artwork'].front_default,
        types: getPokemonTypes(types)
    }
}

export const getPokemon = async (url) => {
    const resp = await fetch(url);
    const { abilities, name, types, stats, sprites, species, } = await resp.json();
    return {
        abilities: getPokemonAbilities(abilities),
        name,
        types: getPokemonTypes(types),
        stats: getPokemonStats(stats),
        sprite: sprites.other['official-artwork'].front_default,
        desc: species.url,
    }
}

export const getPokemonDesc = async (url) => {
    const resp = await fetch(url);
    const species = await resp.json();
    return species.flavor_text_entries[7].flavor_text
}