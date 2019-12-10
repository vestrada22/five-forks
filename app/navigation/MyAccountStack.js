import { createStackNavigator } from "react-navigation-stack";
import MyAccountScreen from "../screens/Account/MyAccount";
import LoginScreen from '../screens/Account/Login'

const MyAccountScreenStack = createStackNavigator({
  Account: {
    screen: MyAccountScreen,
    navigationOptions: () => {
      title: "My Account";
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: "Login"
    })
  }
});

export default MyAccountScreenStack;
