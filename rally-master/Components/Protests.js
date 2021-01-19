import React, { Component, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";

export default function Protests(props) {
  const protestList = props.protests.map((protest) => {
    return (
      <ImageBackground source={protest.cover} style={styles.ProtestWidget}>
        <Text style={styles.ProtestName}>{protest.name}</Text>
      </ImageBackground>
    );
  });

  if (props.isSearch) {
    return (
      <ImageBackground
        source={props.protests[props.searchIndex].cover}
        style={styles.ProtestWidget}
      >
        <Text style={styles.ProtestName}>
          {props.protests[props.searchIndex].name}
        </Text>
      </ImageBackground>
    );
  } else {
    return <View>{protestList}</View>;
  }
}

const styles = StyleSheet.create({
  ProtestWidget: {
    width: 300,
    height: 150,
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    opacity: 0.4,
  },
  ProtestName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    marginVertical: 55,
  },
});
