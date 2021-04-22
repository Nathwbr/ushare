import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/notLogged/WelcomeScreen";
import LoginScreen from "../screens/notLogged/LoginScreen";
import RegisterScreen from "../screens/notLogged/RegisterScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <AuthNavigator>
    <Stack.Screen name={Welcome} component={WelcomeScreen} />
    <Stack.Screen name={Login} component={LoginScreen} />
    <Stack.Screen name={Register} component={RegisterScreen} />
  </AuthNavigator>
);
