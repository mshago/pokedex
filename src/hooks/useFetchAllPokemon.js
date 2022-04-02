import { useEffect, useState } from "react";
import { getAllPokemon } from "../helpers/getPokemon";

export const useFetchAllPokemon = () => {
  const [state, setState] = useState({
    data: [],
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

