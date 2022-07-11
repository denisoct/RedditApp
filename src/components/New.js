import React from "react";
import { Text, View } from "react-native";

import rNew from "../data/new.json";
import RedditList from "./RedditList";

const New = () => {
  return (
    <>
      <RedditList reddits={rNew} name="new" />
    </>
  );
};

export default New;
