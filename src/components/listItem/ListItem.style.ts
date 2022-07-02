import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  item: {
    paddingHorizontal:10,
    paddingVertical:10,
    alignSelf:'stretch',
    justifyContent:'space-between',
    flexDirection:'row',
    borderBottomColor:'#c4c4c4',
    borderBottomWidth:1,
  },
  pokemon:{
    width:'70%',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  photo:{
      width:60,
      height:60,
  },
  info:{
    flexDirection:'column',
    width:'60%',
    justifyContent:'space-around',
    paddingVertical:10,
  },
  name: {
    fontSize: 18,
    textTransform:'capitalize',
  },
  number:{
    fontSize:14,
    color:'#a4a4a4'
  },
  typesContainer:{
      flexDirection:'row',
      alignItems:'center',
      width:'30%',
  },
  type:{
      height:60,
      width:60,
  }
})