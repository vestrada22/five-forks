import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "../screens/Search";

const SearchScreenStack = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: () => {
      title: "Search your restaurant";
    }
  }
});

export default SearchScreenStack;
