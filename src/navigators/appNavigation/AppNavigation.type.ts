import { StackNavigationProp } from "@react-navigation/stack";

export enum ETabNavigationRoutes {
  POKEMON_LIST = "Pokemon",
  ITEMS_LIST = "Items",
  MOVES_LIST = "Moves",
}

export enum EAppNavigationRoutes {
  POKEMON_INFO= "Pokemon_Info",
  ITEMS_INFO= "Items_Info",
  MOVES_INFO= "Moves_Info",
  TAB = 'Tab'
}

export type TTabNavigationRoutes = {
  [ETabNavigationRoutes.POKEMON_LIST]: undefined;
  [ETabNavigationRoutes.ITEMS_LIST]: undefined;
  [ETabNavigationRoutes.MOVES_LIST]: undefined;
};

export type TAppNavigationRoutes = {
  [EAppNavigationRoutes.POKEMON_INFO]: undefined;
  [EAppNavigationRoutes.ITEMS_INFO]: undefined;
  [EAppNavigationRoutes.MOVES_INFO]: undefined;
  [EAppNavigationRoutes.TAB]: undefined;
};


export type TTabNavigation = StackNavigationProp<TTabNavigationRoutes>;
export type TAppNavigation = StackNavigationProp<TAppNavigationRoutes>;
