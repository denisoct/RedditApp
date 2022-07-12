import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";

import rControversial from "../data/controversial.json";
import RedditList from "../components/RedditList";

const ControversialStack = createNativeStackNavigator();

const Controversial = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    const response = await axios.get("https://api.reddit.com/r/pics/controversial");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <>
      <ControversialStack.Navigator screenOptions={{ headerShown: false }}>
        <ControversialStack.Screen name="Home">
          {(props) => <RedditList {...props} reddits={data} name="controversial" />}
        </ControversialStack.Screen>
      </ControversialStack.Navigator>
      {/* <RedditList reddits={rControversial} name="controversial" /> */}
    </>
  );
};

export default Controversial;
