import React from "react";
import { Text, View } from "react-native";

import rHot from "../data/hot.json";
import RedditList from "./RedditList";

const Hot = () => {
  return (
    <>
      <RedditList reddits={rHot} name="hot" />
    </>
  );
};

export default Hot;
