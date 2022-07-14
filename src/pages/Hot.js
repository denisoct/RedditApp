import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import RedditList from "../components/RedditList";

const Hot = () => {
  return (
    <>
      <RedditList name="hot" />
    </>
  );
};

export default Hot;
