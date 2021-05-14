import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingEditScreen from "../screens/logged/ListingEditScreen";
import CameraScreen from "../screens/logged/CameraScreen";

import colors from "../config/colors";

import routes from "./routes";

const Stack = createStackNavigator();

const PublishNavigator = ({}) => (
  <Stack.Navigator
    initialRouteName={routes.LISTING_EDIT}
    screenOptions={{ headerShown: true }}
  >
    <Stack.Screen
      name={routes.LISTING_EDIT}
      component={ListingEditScreen}
      options={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: colors.primary },
      }}
    />
    <Stack.Screen
      name={"CameraScreen"}
      component={CameraScreen}
      options={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: colors.primary },
      }}
    />
  </Stack.Navigator>
);

export default PublishNavigator;
