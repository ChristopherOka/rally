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
import BottomBar from "./BottomBar";

import Widget1 from "./LiveUpdatesWidget";
import Widget2 from "./WalkingWidget";
import Widget3 from "./FirstAidWidget";
import Widget4 from "./EventSchedule";
import Widget5 from "./EmergencyContact";
import Widget6 from "./Widget6";
import AppWidget from "./AppWidget";
import "react-native-gesture-handler";

export default class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerShown: false,
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.Title}>rally</Text>
          <View flexDirection="row">
            <Image style={styles.ian} source={require("./Images/ian.jpg")} />
            <View flexDirection="column" style={styles.WelcomeBack}>
              <Text style={styles.SubHeading}>Welcome Back</Text>
              <Text style={styles.SubHeading}>activist2002</Text>
            </View>
          </View>
          <View style={styles.Background}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.TitleUnderLine} />
              <View styles={styles.WidgetContainer}>
                <View flexDirection="row" style={{ top: -170 }}>
                  <Widget1 />
                  <Widget2 />
                </View>
                <AppWidget />
                <View flexDirection="row" style={{ top: 0 }}>
                  <Widget3 />
                  <Widget4 />
                </View>
                <View flexDirection="row" style={{ top: 170 }}>
                  <Widget5 />
                  <Widget6 />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.wholebar}>
            <View>
              <View style={styles.othercontainer}></View>
              <TouchableOpacity
                style={styles.dude2}
                onPress={() => navigate("Profile")}
              >
                <Image
                  style={styles.dude}
                  source={require("./Images/dude.png")}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.magnifying2}
              onPress={() => navigate("AppSearch")}
            >
              <Image
                style={styles.magnifying}
                source={require("./Images/magnifying.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.house2}>
              <Image
                style={styles.house}
                source={require("./Images/house.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Image style={styles.bars} source={require("./Images/bars.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: "#ECEDE8",
    alignItems: "center",
  },
  Title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 48,
    top: -250,
    color: "#EE8554",
  },
  SubHeading: {
    textAlign: "center",
    fontSize: 28,
    top: -200,
    color: "#74777A",
  },
  ian: {
    width: 100,
    height: 100,
    top: -220,
    left: 60,
    borderRadius: 100,
  },
  WelcomeBack: {
    top: -5,
    left: 90,
  },

  TitleUnderLine: {
    width: 330,
    height: 5,
    top: -350,
    marginHorizontal: 30,
    alignItems: "center",
    backgroundColor: "#74777A",
  },
  WidgetContainer: {
    top: 0,
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
    top: 290,
    right: -147,
    //right prop: -135 for home, -260 for profile, -5 for search
    height: 40,
    width: 140,
  },
  wholebar: {
    top: 351,
  },
});
