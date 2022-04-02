import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import TextApp from '../components/TextApp'

export default ({ title, back }) => {
  return (
    <View style={styles.header}>
      <TextApp title={title} style={styles.title} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    backgroundColor: '#f00000',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    /*shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.22,
    elevation: 6,*/
  },
  title:{
      fontSize:20,
      color:'#fff'
  }
})