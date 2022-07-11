import React from "react";
import { Dimensions, Image, Text, View } from "react-native";

import nsfwImg from "../assets/nsfw.jpg";

// Show a list of the posts in the r/pics subreddit

// Each post must show the following data: thumbnail image (if present), title, author, total number of votes (score), number of comments and date of creation

const Reddit = ({ data }) => {
  const {
    thumbnail,
    thumbnail_width,
    thumbnail_height,
    title,
    author,
    score,
    num_comments,
    created,
  } = data;

  return (
    <>
      <View
        style={{
          marginVertical: 3,
          paddingLeft: 135,
          height: 190,
          overflow: "hidden",
          borderRadius: 3,
          borderWidth: 1,
          flexDirection: "row",
        }}
      >
        <Image
          source={thumbnail === "nsfw" ? nsfwImg : { uri: thumbnail }}
          style={{
            thumbnail_width,
            position: "absolute",
            width: thumbnail_width,
            height: 190,
            top: 0,
            left: 0,
            bottom: 0,
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
            <Text style={{ color: "#424242", marginBottom: 4, textAlign: "right" }}>{created}</Text>
            <Text
              style={{
                color: "black",
                lineHeight: 20,
                textTransform: "uppercase",
                fontWeight: "bold",
                marginBottom: 5,
              }}
              numberOfLines={4}
              adjustsFontSizeToFit
            >
              {title}
            </Text>
            <Text style={{ color: "rgb(51,65,85)" }}>Score: {score}</Text>
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
    </>
  );
};

export default Reddit;
