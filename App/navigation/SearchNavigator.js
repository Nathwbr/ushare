import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";
import SearchScreen from "../screens/logged/SearchScreen";

import routes from "./routes";

const Stack = createStackNavigator();

const SearchNavigator = () => (
  <Stack.Navigator
    options={{
      keyboardHidesTabBar: true,
      headerTintColor: "white",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: colors.primary,
      },
    }}
  >
    <Stack.Screen
      name={routes.MYSEARCH}
      component={SearchScreen}
      options={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: colors.primary },
      }}
    />
  </Stack.Navigator>
);

export default SearchNavigator;
