import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import AuthStack from "./AuthStack";
import HomeTab from "./HomeTab";

export default function Routes() {
  const { user } = useContext(AuthContext);
  return <NavigationContainer>{user.email ? <HomeTab /> : <AuthStack />}</NavigationContainer>;
}
