import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Entypo";

import RedditList from "./RedditList";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Home = ({ navigator }) => {
  return (
    <>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Reddit List"
          component={RedditList}
          options={{
            tabBarIcon: ({ focused }) => <Icon name="new" />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Home;
