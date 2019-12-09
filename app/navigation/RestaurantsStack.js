import { createStackNavigator } from "react-navigation-stack";

import RestaurantsScreen from "../screens/Restaurants";

const RestaurantsScreenStack = createStackNavigator({
  Restaurants: {
    screen: RestaurantsScreen,
    navigationOptions: () => {
      title: "Restaurants";
    }
  }
});

export default RestaurantsScreenStack;
