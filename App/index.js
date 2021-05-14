import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoadingScreen from "./screens/LoadingScreen";
import AuthNavigator from "./navigation/AuthNavigator";
import AppNavigator from "./navigation/AppNavigator";

//Global State
import AppContext from "./components/AppContext";
import navigationTheme from "./navigation/navigationTheme";

const AppStack = createStackNavigator();
function App() {
  //GlobalState
  const [isLoading, LoadFinished] = useState(true);
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [ModalContactShown, SetModalContactShown] = useState(false);
  const [ModalReserverShown, SetModalReserverShown] = useState(false);

  //Variable Accessible
  const Parameters = {
    loggedUserId: 1,
    IsStillLoading: isLoading,
    LoadFinished,
    UserLogged: isLoggedIn,
    SetIsLoggedIn,
    IsModalContactShown: ModalContactShown,
    SetModalContactShown,
    IsModalReserverShown: ModalReserverShown,
    SetModalReserverShown,
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
            <AppNavigator />
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;
