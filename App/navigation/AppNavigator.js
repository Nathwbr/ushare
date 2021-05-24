import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Keyboard } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import SearchNavigator from "../navigation/SearchNavigator";
import MessagesScreen from "../screens/logged/MessagesScreen";
import PublishNavigator from "./PublishNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

import colors from "../config/colors";

import AppContext from "../components/AppContext";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  const TheContext = useContext(AppContext);
  let PublishTabOptions = ({ navigation, route }) => ({
    tabBarVisible: ((route) => {
      const routeName = getFocusedRouteNameFromRoute(route) ?? "";

      if (routeName === "CameraScreen") {
        return false;
      }

      return true;
    })(route),
  });

  if (TheContext.isTabBarShown === true) {
    PublishTabOptions = ({ navigation, route }) => ({
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
      tabBarVisible: ((route) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? "";

        if (routeName === "CameraScreen") {
          return false;
        }

        return true;
      })(route),
    });
  }

  useEffect(() => {
    // if (Platform.OS !== "android") {
    //   return;
    // }
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      TheContext.SetIsTabBarShown(false)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      TheContext.SetIsTabBarShown(true)
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  });
  //}, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.white,
        keyboardHidesTabBar: true,
        style: {
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
