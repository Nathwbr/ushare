import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/logged/AccountScreen";
import MessagesScreen from "../screens/logged/MessagesScreen";
import colors from "../config/colors";

import routes from "./routes";
import MyListingsScreen from "../screens/logged/MyListingsScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    options={{
      headerTintColor: "white",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: colors.primary,
      },
    }}
  >
    <Stack.Screen
      name={routes.MYACCOUNT}
      component={AccountScreen}
      options={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: colors.primary },
      }}
    />
    <Stack.Screen
      name={routes.MYLISTINGS}
      component={MyListingsScreen}
      options={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.primary },
        headerTitleAlign: "center",
      }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
