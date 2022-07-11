import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RedditList from "./src/components/RedditList";
import Home from "./src/components/Home";

const Stack = createNativeStackNavigator();

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
      <SafeAreaView style={{ flex: 1 }}>
        {/* <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer> */}
        <NavigationContainer>
          <Home />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
