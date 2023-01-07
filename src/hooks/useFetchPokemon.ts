import { useEffect, useState } from "react";
import { getPokemon, getPokemonDesc } from "../helpers/getPokemon";
import { PokemonDataT } from "../types";

export const useFetchPokemon = (url: string): useFetchPokemonT => {
  const regex = /(\s)/gi;
  const [state, setState] = useState<useFetchPokemonT>({
    data: undefined,
    loading: true,
  });

  useEffect(() => {
    getPokemon(url).then((x) => {
      console.log('pokemon',x)
      getPokemonDesc(x.desc).then((desc) =>
        setState({
          data: {
            abilities: x.abilities,
            desc: desc.replace(regex, " "),
            name: x.name,
            types: x.types,
            sprite: x.sprite,
            stats: x.stats,
          },
          loading: false,
        })
      );
    });
  }, []);

  return state;
};

type useFetchPokemonT = {
  data: PokemonDataT | undefined;
  loading: boolean;
};
