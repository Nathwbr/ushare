import * as React from "react";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import Details from "./src/Tab_1/Details";
import Home from "./src/Tab_1/Home";
import CreatePost from "./src/Tab_1/CreatePost";
import Setting from "./src/Tab_1/Setting";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./src/Tab2/Login";
import Signin from "./src/Tab2/Signin";
import Profile from "./src/Tab_3/Profile";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

//home Stack
function HomeStack({ navigation, route }) {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? false : true) : null,
  });
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
    </Stack.Navigator>
  );
}

//Auth stack
function AuthStack({ route, navigation }) {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? false : true) : null,
  });
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "green",
          labelStyle: { fontSize: 20 },
          tabStyle: {
            backgroundColor: "pink",
            height: 90,
            //  marginTop:20,
            // alignItems:"center",
            justifyContent: "center",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarVisible: true,
          }}
        />
        <Tab.Screen name="Auth" component={AuthStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
