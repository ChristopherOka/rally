import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Component,
  ScrollView,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import "react-native-gesture-handler";

export default class Home extends React.Component {
  static navigationOptions = {
    title: "Profile",
    headerShown: false,
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <TouchableOpacity style={styles.closeButton}>
        <View style={styles.closeBox}>
          <Text style={styles.close}>CLOSE</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  closeBox: {
    backgroundColor: "#2b2b2b",
    borderRadius: 15,
    width: 100,
    height: 40,
    top: 30,
  },
  close: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    top: 4,
    left: 15,
  },
  closeButton: {
    height: 40,
    width: 100,
    top: -340,
    left: 290,
  },
});
