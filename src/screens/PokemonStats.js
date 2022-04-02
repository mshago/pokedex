import React from 'react'
import { View } from 'react-native'

//components
import Stats from '../components/Stats'
import Abilities from '../components/Weaknesses'

export const PokemonStats = ({ color, stats, abilities }) => {

    return (
        <View>
            <Stats color={color} stats={stats} />
            <Abilities abilities={abilities} color={color}/>
        </View>
    )
}