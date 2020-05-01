import { createStackNavigator } from 'react-navigation-stack'
import { LoginScreen } from '../screens/LoginScreen'
import { RegistrationScreen } from '../screens/RegistrationScreen'

const AuthStack = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Registration: { screen: RegistrationScreen },
  },
  {
    defaultNavigationOptions: () => ({
      cardStyle: {
        backgroundColor: '#4a76a8',
      },
    }),
    initialRouteName: 'Login',
    headerMode: 'none',
  }
)

export default AuthStack
