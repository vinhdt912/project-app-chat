import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/auth/login";
import RegisterScreen from "../screens/auth/register";

const Stack = createStackNavigator();

const AuthStack: React.FC<any> = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
      headerMode="none"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
