import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.everything}>
      <View style={styles.background}>
        <View>
          <View style={styles.container}></View>
          <View>
            <Text style={styles.profile}>PROFILE</Text>
          </View>
          <TouchableOpacity style={styles.settings_gear2}>
            <Image
              style={styles.settings_gear}
              source={require("./assets/settings_gear.png")}
            />
          </TouchableOpacity>
          <View style={styles.profileRectangle} />
          <Image
            style={styles.profilePhoto}
            source={require("./assets/ian.jpg")}
          />
          <Text style={styles.username}>Username:</Text>
          <Text style={styles.name}> Activist2002 </Text>

          <View style={styles.TitleUnderLine} />
          <View>
            <Image style={styles.bars} source={require("./assets/bars.png")} />
          </View>
          <TouchableOpacity style={styles.dude2}>
            <Image style={styles.dude} source={require("./assets/dude.png")} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.magnifying2}>
          <Image
            style={styles.magnifying}
            source={require("./assets/magnifying.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.house2}>
          <Image style={styles.house} source={require("./assets/house.png")} />
        </TouchableOpacity>
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
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    top: 520,
    left: 40,
  },
  addFriendsBG: {
    backgroundColor: "#B9C9D3",
    borderRadius: 15,
    height: 40,
    width: 140,
    position: "absolute",
    top: 515,
    left: 30,
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
    top: 580,
    left: 40,
  },
  myFriendsBG: {
    backgroundColor: "#B9C9D3",
    borderRadius: 15,
    height: 40,
    width: 130,
    position: "absolute",
    top: 575,
    left: 30,
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
    top: 640,
    left: 40,
  },
  QRCodeBG: {
    backgroundColor: "#B9C9D3",
    borderRadius: 15,
    height: 40,
    width: 200,
    position: "absolute",
    top: 635,
    left: 30,
  },
  everything: {},
  profileRectangle: {
    backgroundColor: "#B9C9D3",
    borderRadius: 20,
    position: "absolute",
    height: 170,
    width: 170,
    top: 230,
    right: 120,
  },
  profilePhoto: {
    position: "absolute",
    width: 150,
    height: 150,
    top: 240,
    right: 130,
  },
  username: {
    color: "#404040",
    fontSize: 20,
    position: "absolute",

    top: 460,
    left: 40,
  },
  name: {
    color: "#404040",
    fontSize: 20,
    textDecorationLine: "underline",

    position: "absolute",
    top: 460,
    left: 160,
  },
  settings_gear: {
    position: "absolute",
    height: 40,
    width: 40,
    top: 0,
  },
  settings_gear2: {
    position: "absolute",
    height: 40,
    width: 40,
    top: 110,
    right: 35,
  },
  TitleUnderLine: {
    width: 330,
    height: 5,
    top: 25,
    marginHorizontal: 40,
    alignItems: "center",
    backgroundColor: "#74777A",
  },
  profile: {
    textAlign: "center",
    top: 20,
    fontWeight: "bold",
    fontSize: 48,
    color: "#EE8554",
  },
  background: {
    backgroundColor: "#ECEDE8",
    height: "100%",
    width: "100%",
    top: 0,
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
    position: "absolute",
    top: 655,
    right: 10,
    //right prop: -135 for home, -260 for profile, -5 for search
    height: 40,
    width: 140,
  },
});
