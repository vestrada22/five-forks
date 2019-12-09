import { createStackNavigator } from "react-navigation-stack";

import MyAccountScreen from "../screens/Account/MyAccount";

const MyAccountScreenStack = createStackNavigator({
  Account: {
    screen: MyAccountScreen,
    navigationOptions: () => {
      title: "My Account";
    }
  }
});

export default MyAccountScreenStack;
