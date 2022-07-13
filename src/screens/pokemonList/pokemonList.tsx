import React from "react";
import { useFetchAllPokemon } from "../../hooks/useFetchAllPokemon";
import { EPokemonNavigationRoutes } from "../../navigators/pokemonNavigation/PokemonNavigation.type";
import { PokemonListView } from "./pokemonList.view";


const RECORDS_PER_FETCH = 10;

export const PokemonList = ({ navigation }) => {
  const handlePress = (url:string) => navigation.navigate(EPokemonNavigationRoutes.POKEMON_INFO, { url: url });

  const { data, loading } = useFetchAllPokemon();

  return (
    <PokemonListView
      data={data}
      isLoading={loading}
      handlePress={handlePress}
    />
  );
};
