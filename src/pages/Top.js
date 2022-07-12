import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";

import rTop from "../data/top.json";
import RedditList from "../components/RedditList";

const TopStack = createNativeStackNavigator();

const Top = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    const response = await axios.get("https://api.reddit.com/r/pics/top");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <>
      <TopStack.Navigator screenOptions={{ headerShown: false }}>
        <TopStack.Screen name="Home">
          {(props) => <RedditList {...props} reddits={data} name="top" />}
        </TopStack.Screen>
      </TopStack.Navigator>
      {/* <RedditList reddits={rTop} name="top" /> */}
    </>
  );
};

export default Top;
