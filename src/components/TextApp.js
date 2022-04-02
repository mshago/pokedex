import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

export default ({ title, style }) => {

  const flattenStyle = StyleSheet.flatten([styles.text, style])

  return (
    <Text 
    adjustsFontSizeToFit={true}
    style={flattenStyle}>{title}</Text>
  )
}

const styles = StyleSheet.create({
  text:{
    //textTransform:'capitalize',
    fontFamily:'Avenir'
  }
})