import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  TItemsNavigationRoutes,
  EItemsNavigationRoutes,
} from "./ItemsNavigation.type";

const Stack = createStackNavigator<TItemsNavigationRoutes>();

export const ItemsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={EItemsNavigationRoutes.ITEMS_LIST}
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
