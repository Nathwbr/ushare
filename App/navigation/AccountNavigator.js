import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/logged/AccountScreen";
import colors from "../config/colors";

import routes from "./routes";
import MyListingsScreen from "../screens/logged/MyListingsScreen";
import MyBalanceScreen from "../screens/logged/MyBalanceScreen";
import MyHistoryScreen from "../screens/logged/MyHistoryScreen";
import MySettingsScreen from "../screens/logged/MySettingsScreen";
import CameraScreen from "../screens/logged/CameraScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
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
    <Stack.Screen
      name={routes.MYBALANCE}
      component={MyBalanceScreen}
      options={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.primary },
        headerTitleAlign: "center",
      }}
    />
    <Stack.Screen
      name={routes.MYHISTORY}
      component={MyHistoryScreen}
      options={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.primary },
        headerTitleAlign: "center",
      }}
    />
    <Stack.Screen
      name={routes.MYSETTINGS}
      component={MySettingsScreen}
      options={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.primary },
        headerTitleAlign: "center",
      }}
    />
    <Stack.Screen
      name={"CameraScreen"}
      component={CameraScreen}
      options={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.primary },
        headerTitleAlign: "center",
        headerTitle: "Caméra",
      }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
