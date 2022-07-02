import { useEffect, useState } from "react";
import { getPokemonPreviewInfo } from "../helpers/getPokemon";
import { PokemonPreviewDataT } from "../types";

export const useFetchPokemonPreview = (url:string): useFetchPokemonPreviewT => {
  const [state, setState] = useState<useFetchPokemonPreviewT>({
    data: undefined,
    loading: true,
  });

  useEffect(() => {
    getPokemonPreviewInfo(url).then((x) =>
      setState({
        data: x,
        loading: false,
      })
    );
  }, []);

  return state;
};

type useFetchPokemonPreviewT = {
  data: PokemonPreviewDataT| undefined;
  loading: boolean;
};


