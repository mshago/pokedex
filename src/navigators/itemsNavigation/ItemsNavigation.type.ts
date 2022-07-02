import { StackNavigationProp } from "@react-navigation/stack"

export enum EItemsNavigationRoutes {
  ITEMS_LIST = 'Items_List',
  ITEM_INFO = 'Move_Info',
}

export type TItemsNavigationRoutes = {
  [EItemsNavigationRoutes.ITEMS_LIST]: undefined
  [EItemsNavigationRoutes.ITEM_INFO]: undefined
}

export type TItemsNavigation = StackNavigationProp<TItemsNavigationRoutes>