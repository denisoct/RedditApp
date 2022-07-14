import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import RedditList from "../components/RedditList";

const Controversial = () => {
  return (
    <>
      <RedditList name="controversial" />
    </>
  );
};

export default Controversial;
