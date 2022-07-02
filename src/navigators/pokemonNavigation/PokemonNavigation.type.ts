import { StackNavigationProp } from "@react-navigation/stack"

export enum EPokemonNavigationRoutes {
  POKEMON_LIST = 'Pokemon_List',
  POKEMON_INFO = 'Pokemon_Info',
}

export type TPokemonNavigationRoutes = {
  [EPokemonNavigationRoutes.POKEMON_INFO]: undefined
  [EPokemonNavigationRoutes.POKEMON_LIST]: undefined
}

export type TPokemonNavigation = StackNavigationProp<TPokemonNavigationRoutes>