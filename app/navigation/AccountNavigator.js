import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/logged/AccountScreen";
import MessagesScreen from "../screens/logged/MessagesScreen";
import colors from "../config/colors";

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
      name="Account"
      component={AccountScreen}
      options={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.primary },
      }}
    />
    <Stack.Screen
      name="Messages"
      component={MessagesScreen}
      options={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.primary },
      }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
