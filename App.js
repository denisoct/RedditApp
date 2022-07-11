import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import RedditList from "./src/components/RedditList";
import Home from "./src/components/Home";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const App = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        {/* <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer> */}
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <NavigationContainer>
          <Home />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
