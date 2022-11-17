import { StyleSheet, Platform } from "react-native"

export const styles = StyleSheet.create({
  text:{
    fontFamily:Platform.OS === 'ios'?'Avenir':'normal'
  }
})