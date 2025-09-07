// App.jsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import loginScreen from "./screens/loginScreen";
import homeScreen from "./screens/homeScreen";
import signUpScreen from "./screens/signUpScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={loginScreen} />
      <Stack.Screen name="Home" component={homeScreen} />
      <Stack.Screen name="SignUp" component={signUpScreen} />
    </Stack.Navigator>
  );
}

