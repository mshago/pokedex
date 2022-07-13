import { StyleSheet,Dimensions } from "react-native"
const HEIGHT = Dimensions.get('window').height

export const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  loading:{
    flex:1,
    justifyContent:'center',
    alignContent:'center'
  },
  info:{
    alignSelf:'stretch',
    alignItems:'center',
    backgroundColor:'#fff',
    paddingTop:50,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    top:HEIGHT/5,
    flexGrow:1,
  },
  title:{
    fontSize:40,
    includeFontPadding:false,
    textTransform: 'capitalize',
  },
  tag:{
    height:60,
  },
  desc:{
    marginVertical:20,
    marginHorizontal:20,
    textAlign:'center',
    fontSize:14,
  },
})