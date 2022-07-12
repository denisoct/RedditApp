import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IconMI from "react-native-vector-icons/MaterialIcons";
import IconE from "react-native-vector-icons/Entypo";
import IconF from "react-native-vector-icons/Feather";

import RedditList from "../components/RedditList";
import New from "./New";
import Top from "./Top";
import Controversial from "./Controversial";
import Hot from "./Hot";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "black",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            position: "absolute",
            height: 55,
            borderWidth: 0,
            borderColor: "black",
          },
        }}
      >
        <Tab.Screen
          name="New"
          children={(props) => <New {...props} />}
          options={{
            tabBarIcon: ({ focused }) => (
              <IconE name="new" size={25} color={`${focused ? "#3949AB" : "white"}`} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: focused ? 12 : 10,
                  color: focused ? "#3949AB" : "white",
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                New
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Top"
          component={Top}
          options={{
            tabBarIcon: ({ focused }) => (
              <IconMI name="star-rate" size={25} color={`${focused ? "#C2185B" : "white"}`} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: focused ? 12 : 10,
                  color: focused ? "#C2185B" : "white",
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                Top
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Controversial"
          component={Controversial}
          options={{
            tabBarIcon: ({ focused }) => (
              <IconF name="target" size={25} color={`${focused ? "#43A047" : "white"}`} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: focused ? 12 : 10,
                  color: focused ? "#43A047" : "white",
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                Controversial
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Hot"
          component={Hot}
          options={{
            tabBarIcon: ({ focused }) => (
              <IconMI name="whatshot" size={25} color={`${focused ? "#D32F2F" : "white"}`} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: focused ? 12 : 10,
                  color: focused ? "#D32F2F" : "white",
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                Hot
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Home;
