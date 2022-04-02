import React from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';

import { useFetchAllPokemon } from '../hooks/useFetchAllPokemon'
import Header from '../components/Header'
import Item from '../components/Item'

export default ({ navigation }) => {

  const handlePress = url => navigation.navigate('Pokemon',{url:url})

  const { data:pokemon, loading } = useFetchAllPokemon()

  return (
    <>
      <StatusBar barStyle='default' />
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.container}>
        <Header title={'Pokemon'} />
          { loading && <Text>Loading</Text> }
          <FlatList
            data={pokemon}
            renderItem={({item}) => <Item url={item.url} onPress={() => handlePress(item.url)} />}
            keyExtractor={({name}) => String(name)}
          />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff'
  },
  loading:{
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  topSafeArea:{
    flex:0,
    backgroundColor: '#f00000'
  }
})