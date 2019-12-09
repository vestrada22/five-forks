import { createStackNavigator } from "react-navigation-stack";

import TopRestaurantsScreen from "../screens/TopRestaurants";

const TopListsScreenStack = createStackNavigator({
  TopRestaurants: {
    screen: TopRestaurantsScreen,
    navigationOptions: () => {
      title: "Rank of the best restaurants!";
    }
  }
});

export default TopListsScreenStack;
