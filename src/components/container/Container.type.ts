import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export type TContainer = {
  children: ReactNode
  isLoading?:boolean
  safeAreaStyle?:ViewStyle
  containerStyle?:ViewStyle
  contentStyle?:ViewStyle
  isScrollViewDisabled?:boolean
}