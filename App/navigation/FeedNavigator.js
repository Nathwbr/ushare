import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/logged/ListingsScreen";
import ListingDetailsScreen from "../screens/logged/ListingDetailsScreen";
import MyLocalisationScreen from "../screens/logged/MyLocalisationScreen";
import MyBalanceScreen from "../screens/logged/MyBalanceScreen";
import colors from "../config/colors";

import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen
      name={routes.LISTING}
      component={ListingsScreen}
      options={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: colors.primary },
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
      options={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: colors.primary },
      }}
    />
    <Stack.Screen
      name={routes.MYLOCATION}
      component={MyLocalisationScreen}
      options={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: colors.primary },
      }}
    />
    <Stack.Screen
      name={routes.MYBALANCE}
      component={MyBalanceScreen}
      options={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: colors.primary },
      }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
