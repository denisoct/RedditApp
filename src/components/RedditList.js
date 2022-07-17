import React from "react";
import { ActivityIndicator, FlatList, RefreshControl, Text, View } from "react-native";
import { useData } from "../hooks/useData";

import Reddit from "./Reddit";

const RedditList = ({ name }) => {
  const { refreshing, data: reddits, getData } = useData(name);

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 1.5,
          width: "100%",
          backgroundColor: "#808080",
        }}
      />
    );
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            backgroundColor: "black",
            paddingVertical: 2,
            color: "white",
          }}
        >
          r/pics/{name}
        </Text>

        {/* <Text style={tw("text-green-500 text-4xl")}>Lista de Reddits</Text> */}
        {/* <ScrollView>
          <View style={tw("flex-1")}>
            {reddit.data.children.map((child) => (
              <Reddit data={child.data} />
            ))}
          </View>
        </ScrollView> */}

        {refreshing && <ActivityIndicator size="large" color="#0000FF" />}
        <FlatList
          data={reddits.data?.children}
          contentContainerStyle={{ paddingBottom: 70 }}
          renderItem={({ item }) => <Reddit data={item.data} />}
          ItemSeparatorComponent={ItemSeparatorView}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getData} />}
          initialNumToRender={4}
        />
      </View>
    </>
  );
};

export default RedditList;
