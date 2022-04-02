import React from 'react'
import { StyleSheet, View } from 'react-native'
import Title from './Title'

import * as colors from '../assets/colors/colors'
import TextApp from './TextApp'

const abilities = [
    {ability:{
        name:'torrent',
        url:"https://pokeapi.co/api/v2/ability/67/"
    }},
    {ability:{
        name:'rain-dish',
        url:"https://pokeapi.co/api/v2/ability/44/"
    }}
]

const short_effect_0 = "Strengthens water moves to inflict 1.5× damage at 1/3 max HP or less."
const short_effect_1 = "Heals for 1/16 max HP after each turn during rain."

const Ability = ({ability}) => {
    return (
        <View style={styles.ability}>
            <TextApp title={ability} style={{fontSize:16,color:colors.COLOR_TYPE_WATER,fontWeight:'bold'}} />
            <TextApp title={short_effect_0} />
        </View>
    )
}

export default ({abilities, color}) => {
    return (
        <View style={styles.container}>
            <Title title={'Abilities'} color={color} />
            <Ability ability={abilities[0]} />
            <Ability ability={abilities[1]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignSelf:'stretch',
        marginHorizontal:20,
        alignItems:'center',
    },
    ability:{
        alignSelf:'stretch',
        marginBottom:5,
    }
})