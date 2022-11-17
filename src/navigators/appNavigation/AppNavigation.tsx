import React from 'react';
import {
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {COLORS} from '@assets'
import { TAppNavigationRoutes, EAppNavigationRoutes } from './AppNavigation.type';

const Tab = createBottomTabNavigator<TAppNavigationRoutes>()

export const AppNavigation = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={EAppNavigationRoutes.POKEMON}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName

            if(route.name === 'Pokemon'){
              iconName = focused
                ? require('../../assets/img/icons/pokemon-active-icon.png')
                : require('../../assets/img/icons/pokemon-icon.png')
            } else if (route.name === 'Moves'){
              iconName = focused
                ? require('../../assets/img/icons/moves-active-icon.png')
                : require('../../assets/img/icons/moves-icon.png')
            } else if (route.name === 'Items'){
              iconName = focused
                ? require('../../assets/img/icons/items-active-icon.png')
                : require('../../assets/img/icons/items-icon.png')
            }

            return <Image source={iconName} style={{height:size, width:size}} />
          }
        })}
        sceneContainerStyle={{height:80}}
        tabBarOptions={{
          activeTintColor:COLORS.active,
          inactiveTintColor:COLORS.inactive,
          tabStyle:{backgroundColor:COLORS.gray},
          labelStyle:{fontSize:14},
          style:{
            backgroundColor:COLORS.gray,
          },
        }}>
        <Tab.Screen name={EAppNavigationRoutes.POKEMON_LIST} component={PokemonNavigation} />
        <Tab.Screen name={EAppNavigationRoutes.MOVES_LIST} component={MovesNavigation} />
        <Tab.Screen name={EAppNavigationRoutes.ITEMS_LIST} component={ItemsNavigation} />
      </Tab.Navigator>
      </NavigationContainer>
  )
}