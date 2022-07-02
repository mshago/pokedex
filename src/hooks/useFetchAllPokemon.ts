import { useEffect, useState } from "react";
import { getAllPokemon } from "../helpers/getPokemon";
import { DataListT } from "../types";

export const useFetchAllPokemon = ():useFetchAllPokemonT => {
  const [state, setState] = useState<useFetchAllPokemonT>({
    data: undefined,
    loading: true,
  });

  useEffect(() => {
    getAllPokemon().then((x) =>
      setState({
        data: x,
        loading: false,
      })
    );
  }, []);

  return state;
};

type useFetchAllPokemonT = {
  data: DataListT[] | undefined
  loading:boolean
}

