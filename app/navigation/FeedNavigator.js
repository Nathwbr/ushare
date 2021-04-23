import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/logged/ListingsScreen";
import ListingDetailsScreen from "../screens/logged/ListingDetailsScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.primary },
      }}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.primary },
      }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
