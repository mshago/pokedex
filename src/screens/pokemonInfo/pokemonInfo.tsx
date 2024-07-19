import React, { useState } from "react";
import { View, Text } from "react-native";

//components
import { COLORS_TYPE } from "../../assets/colors/colors";
import { Container } from "../../components";

//custom hooks
import { useFetchPokemon } from "../../hooks/useFetchPokemon";
import { PokemonInfoView } from "./pokemonInfo.view";

export const PokemonInfo = ({ navigation, route }) => {
  const { url } = route.params;
  const [selectedView, setSelectedView] = useState("stats");
  const { data: pokemon, loading } = useFetchPokemon(url);

  let COLOR = COLORS_TYPE["normal"];
  if (!loading && pokemon !== null) {
    COLOR = COLORS_TYPE[pokemon?.types[0]];
  }

  console.log('pokemon', pokemon);

  return (
    <PokemonInfoView
      backgroundColor={COLOR}
      selectedView={selectedView}
      setSelectedView={setSelectedView}
      pokemon={pokemon}
      isLoading={loading}
    />
  );
};
