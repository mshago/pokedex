import React from "react";
import { useFetchAllPokemon } from "../../hooks/useFetchAllPokemon";
import { PokemonListView } from "./pokemonList.view";
import {EAppNavigationRoutes} from '../../navigators/appNavigation/AppNavigation.type'

const RECORDS_PER_FETCH = 10;

export const PokemonList = ({ navigation }) => {
  const handlePress = (url: string) =>
    navigation.navigate(EAppNavigationRoutes.POKEMON_INFO, { url: url });

  const { data, loading } = useFetchAllPokemon();

  return (
    <PokemonListView
      data={data}
      isLoading={loading}
      handlePress={handlePress}
    />
  );
};
