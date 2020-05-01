import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AuthStack from './AuthStack'
import DrawerNav from './DrawerNav'
import LoadingStack from './LoadingStack'


const SwitchNavigator = createSwitchNavigator(
  {
    Loading: LoadingStack,
    Auth: AuthStack,
    DrawerNav,
  },
  {
    initialRouteName: 'Loading',
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer
