import {StyleSheet} from 'react-native'
import { COLORS } from '../../assets/colors/colors'

export const styles = StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    backgroundColor: COLORS.red,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
      fontSize:20,
      color:COLORS.white,
  }
})