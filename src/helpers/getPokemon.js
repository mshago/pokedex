import { getData, storeData } from "../utils/localStorage";
import APIs from "api/api-urls";
import getApi from "./getFromApi";

export const getAllPokemon = async (limit = 20, offset = 1) => {
  // const dataFromLocalStorage = await getData("pokemonList");
  // console.log("pokemon", dataFromLocalStorage);
  // if (dataFromLocalStorage) {
  //   return dataFromLocalStorage;
  // }
  const url = `${APIs.POKEMON}?limit=${limit}&offset=${offset}`;
  const response = await getApi(url);

  const pokemonList = response.map((pkm) => {
    return {
      name: pkm.name,
      url: pkm.url,
    };
  });

  // await storeData("pokemon", pokemonList);

  return pokemonList;
};

const getPokemonTypes = (types) => {
  return types.map(({ type }) => {
    return type.name;
  });
};

const getPokemonAbilities = async (abilities) => {
  const getAbilities = await abilities.map(async ({ ability }) => {
    const ability_desc = await fetch(ability.url);
    const { effect_entries } = await ability_desc.json();
    let result;

    effect_entries.map(({ effect, language }) => {
      if (language.name === "en") result = effect;
    });

    return {
      name: ability.name,
      effect: result,
    };
  });

  const ab = await Promise.all(getAbilities);

  return ab;
};

const getPokemonStats = (stats) => {
  return stats.map((stat) => {
    return {
      base_stat: stat.base_stat,
      name_stat: stat.stat.name,
    };
  });
};

export const getPokemonPreviewInfo = async (url) => {
  const resp = await fetch(url);
  const { name, order, sprites, types } = await resp.json();

  return {
    name: name,
    number: order,
    sprite: sprites.other["official-artwork"].front_default,
    types: getPokemonTypes(types),
  };
};

export const getPokemon = async (url) => {
  const resp = await fetch(url);
  const { abilities, name, types, stats, sprites, species } = await resp.json();
  return {
    abilities: await getPokemonAbilities(abilities),
    name,
    types: getPokemonTypes(types),
    stats: getPokemonStats(stats),
    sprite: sprites.other["official-artwork"].front_default,
    desc: species.url,
  };
};

export const getPokemonDesc = async (url) => {
  const resp = await fetch(url);
  const species = await resp.json();
  return species.flavor_text_entries[7].flavor_text;
};
