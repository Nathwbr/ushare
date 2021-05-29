import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useKeyboard } from "@react-native-community/hooks";

import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import SearchNavigator from "../navigation/SearchNavigator";
import MessagesScreen from "../screens/logged/MessagesScreen";
import PublishNavigator from "./PublishNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

import colors from "../config/colors";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  function test(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "";

    if (routeName === "CameraScreen") {
      SetIsButtonShown(true);
      return false;
    }
    SetIsButtonShown(false);
    return true;
  }

  const keyboard = useKeyboard();
  const [isButtonShown, SetIsButtonShown] = useState(true);
  let PublishTabOptions = ({ navigation, route }) => ({
    tabBarButton: ({ color, size }) => (
      <NewListingButton
        onPress={() => navigation.navigate(routes.LISTING_EDIT)}
        color={colors.white}
        size={45}
      />
    ),
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
    ),
    tabBarVisible: test(route),
  });

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.white,
        keyboardHidesTabBar: true,
        style: {
          bottom: keyboard.keyboardShown || isButtonShown ? -100 : 0,
          backgroundColor: colors.primary,
        },
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Rechercher"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Poster"
        component={PublishNavigator}
        options={PublishTabOptions}
      />

      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="email" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Compte"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
