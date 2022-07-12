import React from "react";
import {
  Dimensions,
  Image,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

import nsfwImg from "../assets/nsfw.jpg";

// Show a list of the posts in the r/pics subreddit

// Each post must show the following data: thumbnail image (if present), title, author, total number of votes (score), number of comments and date of creation

const Reddit = ({ data, navigation }) => {
  const {
    thumbnail,
    thumbnail_width,
    thumbnail_height,
    title,
    author,
    score,
    num_comments,
    created,
    permalink,
  } = data;

  return (
    <>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate({ name: "Test", params: { permalink: permalink } });
        }}
        delayPressIn={1000}
      >
        <View
          style={{
            marginBottom: 10,
            paddingLeft: 135,
            height: 170,
            overflow: "hidden",
            borderBottomWidth: 0.7,
            borderTopWidth: 0.7,
            borderColor: "rgba(0, 0, 0, 0.5)",
            flexDirection: "row",
          }}
        >
          <Image
            source={thumbnail === "nsfw" ? nsfwImg : { uri: thumbnail }}
            style={{
              position: "absolute",
              width: thumbnail_width,
              height: 170,
              left: 0,
            }}
            resizeMode="stretch"
          />
          <View
            style={{
              flexDirection: "column",
              width: "100%",
              paddingHorizontal: 16,
              paddingVertical: 8,
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ color: "#424242", marginBottom: 4, textAlign: "right" }}>
                {created}
              </Text>
              <Text
                style={{
                  color: "black",
                  lineHeight: 20,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  marginBottom: 3,
                }}
                numberOfLines={3}
                adjustsFontSizeToFit
              >
                {title}
              </Text>
              <Text style={{ color: "rgb(51,65,85)", fontSize: 12 }}>Score: {score}</Text>
            </View>
            <Text
              style={{
                color: "rgb(51, 65, 200)",
                position: "absolute",
                bottom: 10,
                left: 15,
                fontSize: 12,
              }}
            >
              {author}
            </Text>
            <Text
              style={{
                color: "rgb(51, 65, 85)",
                position: "absolute",
                bottom: 10,
                right: 10,
                fontSize: 12,
              }}
            >
              {num_comments} comments
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </>
  );
};

export default Reddit;
