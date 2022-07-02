import { StackNavigationProp } from "@react-navigation/stack"

export enum EMovesNavigationRoutes {
  MOVES_LIST = 'Moves_List',
  MOVE_INFO = 'Move_Info',
}

export type TMovesNavigationRoutes = {
  [EMovesNavigationRoutes.MOVES_LIST]: undefined
  [EMovesNavigationRoutes.MOVE_INFO]: undefined
}

export type TMovesNavigation = StackNavigationProp<TMovesNavigationRoutes>