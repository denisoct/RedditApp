import React from "react";
import { Button, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";

const WebViewReddit = ({ route }) => {
  const navigation = useNavigation();

  return (
    <>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <WebView
        source={{
          uri: `https://www.reddit.com${route.params?.permalink}`,
        }}
      />
    </>
  );
};

export default WebViewReddit;
