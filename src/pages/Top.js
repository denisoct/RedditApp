import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import RedditList from "../components/RedditList";

const Top = () => {
  return (
    <>
      <RedditList name="top" />
    </>
  );
};

export default Top;
