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
    title: "Profile",
    headerShown: false,
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.container}></View>
          <TouchableOpacity style={styles.settings_gear2}>
            <Image
              style={styles.settings_gear}
              source={require("./Images/settings_gear.png")}
            />
          </TouchableOpacity>
          <View style={styles.profileRectangle} />
          <Image
            style={styles.profilePhoto}
            source={require("./Images/ian.jpg")}
          />
          <Text style={styles.username}>Username:</Text>
          <Text style={styles.name}> Activist2002 </Text>
        </View>
        <View>
          <Text style={styles.Title}>PROFILE</Text>
          <View style={styles.addFriendsBG} />
          <View style={styles.myFriendsBG} />
          <View style={styles.QRCodeBG} />
          <TouchableOpacity
            onPress={() => {
              console.log("works");
            }}
            style={styles.addFriends2}
          >
            <Text style={styles.addFriends}>Add Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.myFriends2}>
            <Text style={styles.myFriends}>My Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.QRCode2}>
            <Text style={styles.QRCode}>Personal QR Code</Text>
          </TouchableOpacity>

          <View style={styles.Background}>
            <View style={styles.TitleUnderLine} />
          </View>
          <View style={styles.wholebar}>
            <View>
              <View style={styles.othercontainer}></View>
              <TouchableOpacity style={styles.dude2}>
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
            <TouchableOpacity
              style={styles.house2}
              onPress={() => navigate("Home")}
            >
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
    top: -280,
    color: "#EE8554",
  },
  TitleUnderLine: {
    width: 330,
    height: 5,
    top: -270,
    marginHorizontal: 30,
    alignItems: "center",
    backgroundColor: "#74777A",
  },
  WidgetContainer: {
    top: -20,
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
    right: 65,
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
    right: 185,
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
    top: 340,
    right: -257,
    //right prop: -135 for home, -260 for profile, -5 for search
    height: 40,
    width: 140,
  },
  wholebar: {
    top: 400,
  },
  addFriends: {
    color: "#404040",
    fontSize: 20,
    position: "absolute",
    height: 40,
    width: 200,
    top: 0,
  },
  addFriends2: {
    position: "absolute",
    height: 40,
    width: 200,
    top: 120,
    left: 40,
  },
  addFriendsBG: {
    backgroundColor: "#B9C9D3",
    borderRadius: 15,
    height: 40,
    width: 140,
    position: "absolute",
    top: 114,
    left: 24,
  },
  myFriends: {
    color: "#404040",
    fontSize: 20,
    position: "absolute",
  },
  myFriends2: {
    position: "absolute",
    height: 40,
    width: 200,
    top: 180,
    left: 40,
  },
  myFriendsBG: {
    backgroundColor: "#B9C9D3",
    borderRadius: 15,
    height: 40,
    width: 130,
    position: "absolute",
    top: 174,
    left: 25,
  },
  QRCode: {
    color: "#404040",
    fontSize: 20,
    position: "absolute",
  },
  QRCode2: {
    position: "absolute",
    height: 40,
    width: 200,
    top: 240,
    left: 40,
  },
  QRCodeBG: {
    backgroundColor: "#B9C9D3",
    borderRadius: 15,
    height: 40,
    width: 200,
    position: "absolute",
    top: 235,
    left: 25,
  },
  everything: {},
  profileRectangle: {
    backgroundColor: "#B9C9D3",
    borderRadius: 20,
    position: "absolute",
    height: 170,
    width: 170,
    top: -160,
    right: 120,
  },
  profilePhoto: {
    position: "absolute",
    width: 150,
    height: 150,
    top: -150,
    right: 130,
  },
  username: {
    color: "#404040",
    fontSize: 20,
    position: "absolute",
    top: 70,
    left: 40,
  },
  name: {
    color: "#404040",
    fontSize: 20,
    //  textDecorationLine: "underline",
    position: "absolute",
    top: 70,
    left: 160,
  },
  settings_gear: {
    position: "absolute",
    height: 40,
    width: 40,
    top: -380,
  },
  settings_gear2: {
    position: "absolute",
    height: 40,
    width: 40,
    top: 110,
    right: 35,
  },
});
