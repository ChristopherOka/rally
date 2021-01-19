import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import NewSearch from "./NewSearch";
import "react-native-gesture-handler";

export default class AppSearch extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerShown: false,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.Newcontainer}>
        <StatusBar style="auto" />
        <NewSearch />
        <TouchableOpacity onPress={() => navigate("ConvertedPage1")}>
          <Image
            style={styles.triangle1}
            source={require("./Images/Triangle.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("ProtestPage")}>
          <Image
            style={styles.triangle2}
            source={require("./Images/Triangle.png")}
          />
        </TouchableOpacity>
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
          <TouchableOpacity style={styles.magnifying2}>
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
        <Image style={styles.bars} source={require("./Images/bars.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Newcontainer: {
    width: 420,
    height: 900,
    top: 60,
    flex: 1,
    backgroundColor: "#ECEDE8",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  triangle1: {
    height: 30,
    width: 100,
    left: 10,
    top: -605,
    left: 80,
    opacity: 0,
  },
  triangle2: {
    height: 150,
    width: 300,
    top: -510,
    left: 0,
    opacity: 0,
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
    width: 600,
    backgroundColor: "#74777A",
    alignItems: "center",
    justifyContent: "center",
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
    top: 775,
    right: 250,
    //right prop: -135 for home, -260 for profile, -5 for search
    height: 50,
    width: 120,
    position: "absolute",
  },
  bottomBar: {
    height: 80,
    backgroundColor: "#74777A",
  },
  wholebar: {
    top: 760,
    left: -180,
    position: "absolute",
  },
});
