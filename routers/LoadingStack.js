import { createStackNavigator } from "react-navigation-stack";
import { LoadingScreen } from "../screens/LoadingScreen";

const LoadingStack = createStackNavigator(
  {
    Loading: { screen: LoadingScreen },
  },
  {
    defaultNavigationOptions: () => ({
      cardStyle: {
        backgroundColor: "#4a76a8"
      }
    }),
    initialRouteName: "Loading",
    headerMode: "none"
  }
)

export default LoadingStack;
