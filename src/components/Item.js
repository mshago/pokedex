import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import TextApp from './TextApp';

import { useFetchPokemonPreview } from '../hooks/useFetchPokemonPreviewInfo';

const URI_ICONS = '../assets/img/icons/types/Types-'
const ICONS = {
    bug:require(URI_ICONS+'Bug.png'),
    dark:require(URI_ICONS+'Dark.png'),
    dragon:require(URI_ICONS+'Dragon.png'),
    electric:require(URI_ICONS+'Electric.png'),
    fairy:require(URI_ICONS+'Fairy.png'),
    fight:require(URI_ICONS+'Fight.png'),
    fire:require(URI_ICONS+'Fire.png'),
    flying:require(URI_ICONS+'Flying.png'),
    ghost:require(URI_ICONS+'Ghost.png'),
    grass:require(URI_ICONS+'Grass.png'),
    ground:require(URI_ICONS+'Ground.png'),
    ice:require(URI_ICONS+'Ice.png'),
    normal:require(URI_ICONS+'Normal.png'),
    poison:require(URI_ICONS+'Poison.png'),
    psychic:require(URI_ICONS+'Psychic.png'),
    rock:require(URI_ICONS+'Rock.png'),
    steel:require(URI_ICONS+'Steel.png'),
    water:require(URI_ICONS+'Water.png'),
}

const TypeImage = ({ type }) => {

    return (
        <Image
            style={styles.type}
            source={ICONS[type?type:'normal']}
            />
    )
}

const Item = ({ url, onPress }) => {

  const [pressed, setPressed] = useState(false)

  const { data:pokemon, loading } = useFetchPokemonPreview(url)

  const { types } = pokemon;

  const justifyTypes = StyleSheet.flatten([
      styles.typesContainer,
      {
       justifyContent: types?.length>1?'space-between':'flex-end',
      }
    ])

  return (
    <TouchableOpacity
      onPressOut={() => setPressed(!pressed)}
      onPressIn={() => setPressed(!pressed)}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        {
          backgroundColor: pressed
          ? 'rgb(210,230,255)'
          : 'white'
        },
        styles.item
        ]}>
      <>
        <View style={styles.pokemon}>
          <Image source={{
              uri: pokemon.sprite,
              }} style={styles.photo}/>
          <View style={styles.info}>
              <TextApp style={styles.name} title={pokemon.name}/>
              <TextApp style={styles.number} title={'#'+pokemon.number}/>
          </View>
        </View>
        <View style={justifyTypes}>
          <TypeImage type={types?types[0]:'normal'} />
          {
            types && types.length>1
            ?
            <TypeImage type={types[1]} />
            :
            null
          }
        </View>
      </>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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

export default Item;