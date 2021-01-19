import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import BLM from "./BLM";
import "react-native-gesture-handler";

export default class Home extends React.Component {
  static navigationOptions = {
    title: "ProtestPage",
    headerShown: false,
  };

  render() {
    const { navigate } = this.props.navigation;
    return <BLM />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
  },
  dude: {
    position: "absolute",
    height: 40,
    width: 40,
    top: 0,
  },
  dude2: {
    position: "absolute",
    height: 40,
    width: 40,
    top: 20,
    right: 60,
  },

  othercontainer: {
    height: 80,
    backgroundColor: "#74777A",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    borderTopColor: "black",
    borderTopWidth: 2,
  },
  house: {
    position: "absolute",
    height: 40,
    width: 40,
    top: 0,
  },
  house2: {
    position: "absolute",
    height: 40,
    width: 40,
    top: 20,
    right: 175,
  },
  magnifying: {
    position: "absolute",
    height: 40,
    width: 32,
    top: 0,
  },
  magnifying2: {
    position: "absolute",
    height: 40,
    width: 40,
    top: 20,
    right: 290,
  },
  bars: {
    top: 34,
    right: -147,
    //right prop: -135 for home, -260 for profile, -5 for search
    height: 40,
    width: 42,
    position: "absolute",
  },
  wholebar: {
    top: 331,
  },
});
