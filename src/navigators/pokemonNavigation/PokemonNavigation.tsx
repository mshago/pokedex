import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PokemonList } from "../../screens/pokemonList/pokemonList";
import Pokemon from "../../screens/pokemonInfo/PokemonInfo";
import {
  EPokemonNavigationRoutes,
  TPokemonNavigationRoutes,
} from "./PokemonNavigation.type";

const Stack = createStackNavigator<TPokemonNavigationRoutes>();

export const PokemonNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={EPokemonNavigationRoutes.POKEMON_LIST}
    >
      <Stack.Screen
        name={EPokemonNavigationRoutes.POKEMON_LIST}
        component={PokemonList}
      />
      <Stack.Screen
        name={EPokemonNavigationRoutes.POKEMON_INFO}
        component={Pokemon}
      />
    </Stack.Navigator>
  );
};
