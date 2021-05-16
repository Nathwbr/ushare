import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/notLogged/LoginScreen";
import RegisterScreen from "../screens/notLogged/RegisterScreen";
import WelcomeScreen from "../screens/notLogged/WelcomeScreen";
import CameraScreen from "../screens/logged/CameraScreen";
import RegistrationSuccesful from "../screens/notLogged/RegistrationSuccesful";

import colors from "../config/colors";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Rejoins nous !"
      component={WelcomeScreen}
      options={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}
    />
    <Stack.Screen
      name="Se connecter"
      component={LoginScreen}
      options={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.primary },
      }}
    />
    <Stack.Screen
      name="S'inscrire"
      component={RegisterScreen}
      options={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.primary },
      }}
    />
    <Stack.Screen
      name={"CameraScreen"}
      component={CameraScreen}
      options={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerShown: false,
        headerStyle: { backgroundColor: colors.primary },
      }}
    />
    <Stack.Screen
      name={"RegistrationSuccesful"}
      component={RegistrationSuccesful}
      options={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerShown: false,
        headerStyle: { backgroundColor: colors.primary },
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
