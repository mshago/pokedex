import React from "react";
import { useFetchAllPokemon } from "../../hooks/useFetchAllPokemon";
import { PokemonListView } from "./pokemonList.view";
import {EAppNavigationRoutes} from '../../navigators/appNavigation/AppNavigation.type'

export const PokemonList = ({ navigation }) => {
  const handlePress = (url: string) =>
    navigation.navigate(EAppNavigationRoutes.POKEMON_INFO, { url: url });

  const { data, loading } = useFetchAllPokemon();

  console.log('data', data);

  return (
    <PokemonListView
      data={data}
      isLoading={loading}
      handlePress={handlePress}
    />
  );
};
