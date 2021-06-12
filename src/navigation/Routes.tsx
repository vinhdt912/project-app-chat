import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import AuthStack from "./AuthStack";
import HomeTab from "./HomeTab";

const Routes: React.FC<any> = () => {
  const { user } = useContext(AuthContext);
  return <NavigationContainer>{user.uid ? <HomeTab /> : <AuthStack />}</NavigationContainer>;
};

export default Routes;
