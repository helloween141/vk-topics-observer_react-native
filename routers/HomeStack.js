import { createStackNavigator } from 'react-navigation-stack'
import { HomeScreen } from '../screens/HomeScreen'
import { AppHeader } from '../components/header'
import React from 'react'

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => (
            <AppHeader navigation={navigation} title='Список сообщений' />
          ),
        }
      },
    },
  },
  {
    defaultNavigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#4a76a8',
        color: '#fff',
        height: 90,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  }
)

export default HomeStack
