import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoadingScreen from "./screens/LoadingScreen";
import AuthNavigator from "./navigation/AuthNavigator";
import AppNavigator from "./navigation/AppNavigator";

import AppContext from "./components/AppContext";
import navigationTheme from "./navigation/navigationTheme";

const AppStack = createStackNavigator();
function App() {
  const [isLoading, LoadFinished] = useState(true);
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  //const [isTabBarShown, SetIsTabBarShown] = useState(true);

  const Parameters = {
    isLoading,
    LoadFinished,
    isLoggedIn,
    SetIsLoggedIn,
    // isTabBarShown,
    // SetIsTabBarShown,
  };

  return (
    <AppContext.Provider value={Parameters}>
      <NavigationContainer theme={navigationTheme}>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          {isLoading ? (
            <AppStack.Screen name="LoadingScreen" component={LoadingScreen} />
          ) : !isLoggedIn ? (
            <AppStack.Screen name="AuthNavigator" component={AuthNavigator} />
          ) : (
            <AppStack.Screen name="AppNavigator" component={AppNavigator} />
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;
