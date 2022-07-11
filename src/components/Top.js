import React from "react";
import { Text, View } from "react-native";

import rTop from "../data/top.json";
import RedditList from "./RedditList";

const Top = () => {
  return (
    <>
      <RedditList reddits={rTop} name="top" />
    </>
  );
};

export default Top;
