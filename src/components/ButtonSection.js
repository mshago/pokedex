import React from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import TextApp from '../components/TextApp'
const WIDTH = Dimensions.get('window').width

export default ({ title, backgroundColor,selected, onPress }) => {

  return (
    <TouchableOpacity
    onPress={onPress}
    style={[styles.section,{
      backgroundColor:selected?backgroundColor:'#fff'}]}
    >
      <TextApp style={{
        color:selected?'#fff':backgroundColor
        }} 
        title={title} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  section:{
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:10,
    width:(WIDTH/3)-20,
    borderRadius:20,
  }
})