import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Pokemon'
import Pokemon from '../screens/PokemonInfo'

const PokemonStack = createStackNavigator()

export default () => {
  return (
    <PokemonStack.Navigator
        initialRouteName='Home'
        headerMode={'none'}>
        <PokemonStack.Screen name='Home' component={Home} />
        <PokemonStack.Screen name='Pokemon' component={Pokemon} />
    </PokemonStack.Navigator>
  )
}