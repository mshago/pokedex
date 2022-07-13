import React, { useState } from "react";

//components
import { COLORS_TYPE } from "../../assets/colors/colors";

//custom hooks
import { useFetchPokemon } from "../../hooks/useFetchPokemon";
import { PokemonInfoView } from "./pokemonInfo.view";

export const PokemonInfo = ({ navigation, route }) => {
  const { url } = route.params;
  const [selectedView, setSelectedView] = useState("stats");
  const { data: pokemon, loading } = useFetchPokemon(url);

  const COLOR = loading ? COLORS_TYPE["normal"] : COLORS_TYPE[pokemon.types[0]];

  return (
    <PokemonInfoView
      backgroundColor={COLOR}
      selectedView={selectedView}
      setSelectedView={setSelectedView}
      pokemon={pokemon}
    />
  );
};
