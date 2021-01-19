import React, { Component, useState } from "react";
import { Button, Image, StyleSheet, Text, View, TextInput } from "react-native";

export default function SearchBar(props) {
  const [text, setText] = useState("");
  const [onSearchBar, setOnSearchBar] = useState(false);

  const handleInput = (text) => {
    setText(text);
    props.search(text);
  };

  const handleOnSearchBar = () => {
    setOnSearchBar(true);
  };

  const handleOffSearchBar = () => {
    setOnSearchBar(false);
  };

  return (
    <View onPress={() => handleOffSearchBar()}>
      <TextInput
        style={styles.SearchBar}
        onChangeText={(text) => handleInput(text)}
        value={text}
        placeholder="Search for a protest..."
        onPress={() => handleOnSearchBar()}
      />
      <Image
        style={styles.SearchBarLine}
        source={require("./graphics/SearchBarLine.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  SearchBar: {
    height: 50,
    width: 300,
    backgroundColor: "#B9C9D3",
    borderRadius: 10,
    position: "relative",
    padding: 10,
  },
  SearchBarLine: {
    position: "absolute",
    left: 10,
    bottom: 10,
    width: 280,
    height: 2,
  },
});
