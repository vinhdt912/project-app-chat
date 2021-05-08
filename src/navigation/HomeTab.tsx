import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { useContext, useEffect } from "react";
import { Ionicons } from "react-native-vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { DATA_USER, MAIN_COLOR } from "../containers/constants/index";
import { updatePeople } from "../containers/redux/actions/people";
import { AuthContext } from "./AuthProvider";
import ChatScreen from "../screens/home/chat";
import UserScreen from "../screens/home/user";
import MessageScreen from "../screens/home/message";
import PeopleScreen from "../screens/home/people";

const Stack = createStackNavigator();
function MessageStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Message"
      headerMode="none"
    >
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function HomeTab() {
  const { user, logout } = useContext(AuthContext);

  const userInfo = useSelector((state: any) => state?.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatePeople(DATA_USER));
    return () => {};
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Message") {
            iconName = focused ? "chatbox-ellipses" : "chatbox-ellipses-outline";
          } else if (route.name === "People") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "User") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: MAIN_COLOR,
        inactiveTintColor: "gray",
      }}
    > 
      <Tab.Screen name="Message" component={MessageStack} />
      <Tab.Screen name="People" component={PeopleScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
}
