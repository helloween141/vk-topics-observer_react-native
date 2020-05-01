import { createDrawerNavigator } from 'react-navigation-drawer'
import HomeStack from './HomeStack'
import TopicsStack from './TopicsStack'
import SettingsStack from './SettingsStack'
import { LogoutScreen } from '../screens/LogoutScreen'
import React from 'react'
import { Icon } from 'react-native-elements'

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    navigationOptions: {
      drawerIcon: () => <Icon name='message' style={{ color: '#ccc' }} />,
      drawerLabel: 'Список сообщений',
    },
    screen: HomeStack,
  },
  Topics: {
    navigationOptions: {
      drawerIcon: () => <Icon name='list' style={{ color: '#ccc' }} />,
      drawerLabel: 'Мои топики',
    },
    screen: TopicsStack,
  },
  Settings: {
    navigationOptions: {
      drawerIcon: () => <Icon name='settings' style={{ color: '#ccc' }} />,
      drawerLabel: 'Настройки',
    },
    screen: SettingsStack,
  },
  Logout: {
    navigationOptions: {
      drawerIcon: () => <Icon name='exit-to-app' style={{ color: '#ccc' }} />,
      drawerLabel: 'Выйти',
    },
    screen: LogoutScreen,
  },
})

export default AppDrawerNavigator
