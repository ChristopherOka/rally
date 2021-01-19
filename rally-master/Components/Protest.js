import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Widget1 from "../LiveUpdatesWidget";
import Widget2 from "./WalkingWidget";
import Widget3 from "../FirstAidWidget";
import Widget4 from "../EventSchedule";
import Widget5 from "./EmergencyContact";
import Widget6 from "../Widget6";
import "react-native-gesture-handler";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";

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

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.Background}>
        <ScrollView contentContainerStyle={{ paddingBottom: 0 }}>
          <Text style={styles.Title}>PROTEST</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.TitleUnderLine} />
            <View style={styles.WidgetContainer}>
              <View style={{ flexDirection: "row" }}>
                <Widget1 />
                <Widget2 />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Widget3 />
                <Widget4 />
              </View>

              <View style={{ flexDirection: "row" }}>
                <Widget5 />
                <Widget6 />
              </View>
            </View>
          </View>
          <StatusBar style="auto" />
        </ScrollView>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: "#ECEDE8",
    alignItems: "center",
  },
  Title: {
    textAlign: "center",
    top: 70,
    fontWeight: "bold",
    fontSize: 48,
    color: "#EE8554",
  },
  TitleUnderLine: {
    width: 330,
    height: 5,
    top: 75,
    marginHorizontal: 30,
    alignItems: "center",
    backgroundColor: "#74777A",
  },
  WidgetContainer: {
    top: 200,
    alignItems: "center",
  },
  WidgetOutline: {
    width: 135,
    height: 135,
    marginHorizontal: 25,
    marginBottom: 40,
    backgroundColor: "#B9C9D3",
    borderRadius: 20,
  },
});
