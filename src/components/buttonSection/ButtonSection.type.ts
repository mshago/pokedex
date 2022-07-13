import { ViewStyle } from "react-native"

export type ButtonSectionT = {
  title?:string
  isSelected?:boolean
  onPress?: () => void
  styles?:ViewStyle
  color?:string
}