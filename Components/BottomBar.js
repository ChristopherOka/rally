import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function App() {
  return (
    <View>
      <View>
        <View style={styles.container}></View>
        <Image style={styles.bars} source={require("./Images/bars.png")} />
        <TouchableOpacity style={styles.dude2}>
          <Image style={styles.dude} source={require("./Images/dude.png")} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.magnifying2}>
        <Image
          style={styles.magnifying}
          source={require("./Images/magnifying.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.house2}>
        <Image style={styles.house} source={require("./Images/house.png")} />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
    top: 800,
    right: 60,
  },
  container: {
    height: 70,
    backgroundColor: "#74777A",
    alignItems: "center",
    justifyContent: "center",
    top: 785,
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
    top: 800,
    right: 186,
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
    top: 800,
    right: 315,
  },
  bars: {
    top: 730,
    right: -5,
    //right prop: -135 for home, -260 for profile, -5 for search
    height: 40,
    width: 140,
  },
});
