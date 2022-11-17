import { StackNavigationProp } from "@react-navigation/stack";

export enum EAppNavigationRoutes {
  POKEMON = "Pokemon",
  ITEMS = "Items",
  MOVES = "Moves",
}

export type TAppNavigationRoutes = {
  [EAppNavigationRoutes.POKEMON]: undefined;
  [EAppNavigationRoutes.ITEMS]: undefined;
  [EAppNavigationRoutes.MOVES]: undefined;
};

export type TAppNavigation = StackNavigationProp<TAppNavigationRoutes>;
