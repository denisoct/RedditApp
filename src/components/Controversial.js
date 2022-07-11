import React from "react";
import { Text, View } from "react-native";

import rControversial from "../data/controversial.json";
import RedditList from "./RedditList";

const Controversial = () => {
  return (
    <>
      <RedditList reddits={rControversial} name="controversial" />
    </>
  );
};

export default Controversial;
