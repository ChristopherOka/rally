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
import "react-native-gesture-handler";

export default class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
    hideHeader: true,
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.Background}>
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
          </View>
          <View>
            <View>
              <View style={styles.othercontainer}></View>
              <Image
                style={styles.bars}
                source={require("./Images/bars.png")}
              />
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
            <TouchableOpacity style={styles.magnifying2}>
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
    fontFamily: "Roboto",
    textAlign: "center",
    top: 60,
    fontWeight: "bold",
    fontSize: 48,
    color: "#EE8554",
  },
  TitleUnderLine: {
    width: 330,
    height: 5,
    top: 55,
    marginHorizontal: 30,
    alignItems: "center",
    backgroundColor: "#74777A",
  },
  WidgetContainer: {
    top: 150,
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
    alignItems: "center",
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
    right: 270,
  },
  bars: {
    top: 730,
    right: -5,
    //right prop: -135 for home, -260 for profile, -5 for search
    height: 40,
    width: 140,
  },
});
