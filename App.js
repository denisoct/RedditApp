import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RedditList from "./src/components/RedditList";
import Home from "./src/pages/Home";
import Test from "./src/pages/Test";
import WebView from "react-native-webview";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        {/* <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer> */}
        {/* <Home /> */}
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Test">{(props) => <Test {...props} />}</Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
        {/* <WebView source={{ uri: "https://reactnative.dev/" }} /> */}
      </SafeAreaView>
    </>
  );
};

export default App;
