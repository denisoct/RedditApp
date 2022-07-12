import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";

import rNew from "../data/new.json";
import RedditList from "../components/RedditList";
import Test from "./Test";

const NewStack = createNativeStackNavigator();

const New = ({ navigation }) => {
  // const [link, setLink] = useState("");
  const [data, setData] = useState({});

  const getData = async () => {
    const response = await axios.get("https://api.reddit.com/r/pics/new");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, [data]);

  // console.log(data);

  return (
    <>
      <NewStack.Navigator screenOptions={{ headerShown: false }}>
        <NewStack.Screen name="Home">
          {(props) => <RedditList {...props} reddits={data} name="new" navigation={navigation} />}
        </NewStack.Screen>
      </NewStack.Navigator>
      {/* <RedditList reddits={rNew} name="new" /> */}
    </>
  );
};

export default New;
