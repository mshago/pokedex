import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

//components
import TextApp from '../../components/TextApp'
import ButtonSection from '../../components/ButtonSection'
import {COLORS_TYPE} from '../../assets/colors/colors'
import { PokemonStats } from '../PokemonStats';
import PokemonEvolutions from '../PokemonEvolutions'
import PokemonMoves from '../PokemonMoves'

//custom hooks
import { useFetchPokemon } from '../../hooks/useFetchPokemon';

//consts
const HEIGHT = Dimensions.get('window').height

export default ({ navigation, route }) => {

  const { url } = route.params
  const [view, setView] = useState('stats')
  const {data:pokemon, loading} = useFetchPokemon(url)

  const handlePress = (new_view) => {
    setView(new_view)
  }

  const COLOR = loading?COLORS_TYPE['normal']:COLORS_TYPE[pokemon.types[0]]

  return (
    <ScrollView style={{
      backgroundColor:loading?
      '#fff'
      :
      COLOR
    }}
      contentContainerStyle={
        loading?
        styles.loading
        :
        styles.container
      }>
      {
        loading?
        <ActivityIndicator size={'large'} color={'#f00000'} />
        :
        <>
          <StatusBar backgroundColor={COLOR} barStyle={'light-content'} />
          <View style={styles.info}>
            <TextApp 
            style={styles.title} 
            title={pokemon.name} />
            <TextApp 
            style={styles.desc}
            title={pokemon.desc}
            />
            <View style={{
              flexDirection:'row',
              alignSelf:'stretch',
              marginHorizontal:20,
              justifyContent:'space-between',
              }}>
              <ButtonSection 
              title={'STATS'}
              backgroundColor={COLOR}
              onPress={() => handlePress('stats')}
              selected={view==='stats'?true:false} />
              <ButtonSection 
              title={'EVOLUTIONS'}
              backgroundColor={COLOR}
              onPress={() => handlePress('evolutions')}
              selected={view==='evolutions'?true:false} />
              <ButtonSection 
              title={'MOVES'}
              backgroundColor={COLOR}
              onPress={() => handlePress('moves')}
              selected={view==='moves'?true:false} />
            </View>
            {
              view==='stats'?
              <PokemonStats color={COLOR} stats={pokemon.stats} abilities={pokemon.abilities}/>
              :
              (
                view==='evolutions'?
                <PokemonEvolutions/>
                :
                <PokemonMoves/>
              )
            }
          </View>
          <Image 
            resizeMode={'contain'}
            style={{
              width:175,
              height:175,
              position:'absolute',
              top:50
            }}
            source={{uri:pokemon.sprite}} />
        </>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
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
    textAlign:'center'
  },
})