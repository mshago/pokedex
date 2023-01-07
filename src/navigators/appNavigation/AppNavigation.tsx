import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "@colors";
import {
  TAppNavigationRoutes,
  EAppNavigationRoutes,
  TTabNavigationRoutes,
  ETabNavigationRoutes,
} from "./AppNavigation.type";
import { PokemonList, PokemonInfo } from "../../screens";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator<TTabNavigationRoutes>();

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={EAppNavigationRoutes.TAB}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={EAppNavigationRoutes.TAB} component={TabNavigation} />
      <Stack.Screen
        name={EAppNavigationRoutes.POKEMON_INFO}
        component={PokemonInfo}
      />
    </Stack.Navigator>
  );
};

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={ETabNavigationRoutes.POKEMON_LIST}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;

          if (route.name === ETabNavigationRoutes.POKEMON_LIST) {
            iconName = focused
              ? require("../../assets/img/icons/pokemon-active-icon.png")
              : require("../../assets/img/icons/pokemon-icon.png");
          } else if (route.name === ETabNavigationRoutes.MOVES_LIST) {
            iconName = focused
              ? require("../../assets/img/icons/moves-active-icon.png")
              : require("../../assets/img/icons/moves-icon.png");
          } else if (route.name === ETabNavigationRoutes.ITEMS_LIST) {
            iconName = focused
              ? require("../../assets/img/icons/items-active-icon.png")
              : require("../../assets/img/icons/items-icon.png");
          }

          return (
            <Image source={iconName} style={{ height: size, width: size }} />
          );
        },
      })}
      sceneContainerStyle={{ height: 80 }}
      tabBarOptions={{
        activeTintColor: COLORS.active,
        inactiveTintColor: COLORS.inactive,
        tabStyle: { backgroundColor: COLORS.gray },
        labelStyle: { fontSize: 14 },
        style: {
          backgroundColor: COLORS.gray,
        },
      }}
    >
      <Tab.Screen
        name={ETabNavigationRoutes.POKEMON_LIST}
        component={PokemonList}
      />
      {/* <Tab.Screen name={EAppNavigationRoutes.MOVES} component={MovesNavigation} />
        <Tab.Screen name={EAppNavigationRoutes.ITEMS} component={ItemsNavigation} /> */}
    </Tab.Navigator>
  );
};
