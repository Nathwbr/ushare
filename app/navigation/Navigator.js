import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

import routes from "./routes";

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.AUTH}
      component={AuthNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={routes.APP}
      component={AppNavigator}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default Navigator;
