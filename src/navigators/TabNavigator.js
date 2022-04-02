import React, { useContext } from 'react';
import {
  StatusBar,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import PokemonNavigator from './PokemonNavigator'
import ItemsNavigator from './ItemsNavigator'
import MovesNavigator from './MovesNavigator'
import ThemeContext from '../hooks/context'

const Tab = createBottomTabNavigator()

export default () => {

  let theme = useContext(ThemeContext)

  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={theme} />
      <Tab.Navigator
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName

            if(route.name === 'Pokemon'){
              iconName = focused
                ? require('../assets/img/icons/pokemon-active-icon.png')
                : require('../assets/img/icons/pokemon-icon.png')
            } else if (route.name === 'Moves'){
              iconName = focused
                ? require('../assets/img/icons/moves-active-icon.png')
                : require('../assets/img/icons/moves-icon.png')
            } else if (route.name === 'Items'){
              iconName = focused
                ? require('../assets/img/icons/items-active-icon.png')
                : require('../assets/img/icons/items-icon.png')
            }

            return <Image source={iconName} style={{height:size, width:size}} />
          }
        })}
        sceneContainerStyle={{height:80}}
        tabBarOptions={{
          activeTintColor:'#f00000',
          inactiveTintColor:'gray',
          tabStyle:{backgroundColor:'#f0f0f0'},
          labelStyle:{fontSize:14},
          style:{
            backgroundColor:'#f0f0f0',
          },
        }}>
        <Tab.Screen name='Pokemon' component={PokemonNavigator} />
        <Tab.Screen name='Moves' component={MovesNavigator} />
        <Tab.Screen name='Items' component={ItemsNavigator} />
      </Tab.Navigator>
      </NavigationContainer>
  )
}