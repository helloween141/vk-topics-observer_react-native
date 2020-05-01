import { createStackNavigator } from 'react-navigation-stack'
import { TopicsScreen } from '../screens/TopicsScreen'
import { AppHeader } from '../components/header'
import React from 'react'

const TopicsStack = createStackNavigator(
  {
    Topics: {
      screen: TopicsScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => (
            <AppHeader navigation={navigation} title='Мои топики' />
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

export default TopicsStack
