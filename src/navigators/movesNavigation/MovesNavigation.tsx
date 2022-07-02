import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  EMovesNavigationRoutes,
  TMovesNavigationRoutes
} from "./MovesNavigation.type";

const Stack = createStackNavigator<TMovesNavigationRoutes>();

export const MovesNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={EMovesNavigationRoutes.MOVES_LIST}
    >
      {/* <Stack.Screen
        name={EMovesNavigationRoutes.MOVES_LIST}
        component={PokemonList}
      />
      <Stack.Screen
        name={EMovesNavigationRoutes.MOVE_INFO}
        component={Pokemon}
      /> */}
    </Stack.Navigator>
  );
};

