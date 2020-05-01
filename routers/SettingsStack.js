import { createStackNavigator } from 'react-navigation-stack'
import { SettingsScreen } from '../screens/SettingsScreen'
import { AppHeader } from '../components/header'
import React from 'react'

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => (
            <AppHeader navigation={navigation} title='Настройки' />
          ),
        }
      },
    },
  },
  {
    defaultNavigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#4a76a8',
        height: 90,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  }
)

export default SettingsStack
