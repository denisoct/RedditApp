import React from "react";
import { Dimensions, FlatList, ScrollView, Text, View } from "react-native";

import Reddit from "./Reddit";
import reddit from "../data/reddit.json";
import hot from "../data/hot.json";
import rpics from "../data/rpics.json";
import Icon from "react-native-vector-icons/FontAwesome";

const RedditList = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: "center", fontSize: 24, marginVertical: 4 }}>r/pics</Text>
        <Icon name="rocket" size={40} color="#900" />
        {/* <Text style={tw("text-green-500 text-4xl")}>Lista de Reddits</Text> */}
        {/* <ScrollView>
          <View style={tw("flex-1")}>
            {reddit.data.children.map((child) => (
              <Reddit data={child.data} />
            ))}
          </View>
        </ScrollView> */}
        <FlatList
          data={reddit.data.children}
          contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 20 }}
          renderItem={({ item }) => <Reddit data={item.data} />}
        />
      </View>
    </>
  );
};

export default RedditList;
