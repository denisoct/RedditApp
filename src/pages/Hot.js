import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";

import rHot from "../data/hot.json";
import RedditList from "../components/RedditList";

const HotStack = createNativeStackNavigator();

const Hot = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    const response = await axios.get("https://api.reddit.com/r/pics/hot");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <>
      <HotStack.Navigator screenOptions={{ headerShown: false }}>
        <HotStack.Screen name="Home">
          {(props) => <RedditList {...props} reddits={data} name="hot" />}
        </HotStack.Screen>
      </HotStack.Navigator>
      {/* <RedditList reddits={rHot} name="hot" /> */}
    </>
  );
};

export default Hot;
