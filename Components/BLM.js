import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import BLMClose from "./BLMClose";
import "react-native-gesture-handler";

export default function App() {
  let [attending, setAttending] = useState(560);
  let [isAttending, setIsAttending] = useState(false);
  let [attending2, setAttending2] = useState(653);
  let [isAttending2, setIsAttending2] = useState(false);

  function incrementAttending() {
    if (!isAttending) {
      setAttending(++attending);
      setIsAttending(true);
    }
  }

  function incrementAttending2() {
    if (!isAttending2) {
      setAttending2(++attending2);
      setIsAttending2(true);
    }
  }

  return (
    <View>
      <View>
        <View>
          <Image style={styles.blmPic} source={require("./graphics/blm.jpg")} />
        </View>

        <StatusBar style="auto" />
        <View style={styles.boundingBox} />
        <View style={styles.BLMBox} />
        <Text style={styles.title}>
          BLACK{"\n"}LIVES{"\n"}MATTER
        </Text>
        <View style={styles.line1} />
        <View style={styles.line2} />
        <View style={styles.line3} />
        <Text style={styles.takeAction}>TAKE ACTION</Text>
        <View style={styles.line4} />
        <View style={styles.line5} />
        <View style={styles.line6} />
        <Text style={styles.blurb}>
          Join the Movement to fight for Freedom, Liberation and Justice by
          signing up for updates, supporting our work, checking out our
          resources, following us on social media, or wearing our dope, official
          gear.
        </Text>
        <TouchableOpacity style={styles.aboutButton}>
          <View style={styles.aboutBox}>
            <Text style={styles.about}>About</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newsButton}>
          <View style={styles.newsBox}>
            <Text style={styles.news}>News</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resourcesButton}>
          <View style={styles.resourcesBox}>
            <Text style={styles.resources}>Resources</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.protest1} />
        <View style={styles.protest2} />
        <TouchableOpacity
          style={styles.joinButton}
          onPress={incrementAttending}
        >
          <View style={styles.joinBox}>
            <Text style={styles.join}>Join Protest</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.joinButton2}
          onPress={incrementAttending2}
        >
          <View style={styles.joinBox2}>
            <Text style={styles.join2}>Join Protest</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.timeDateBox}>
          <Text style={styles.timeDate}>August 14th, 7:00AM - 5:00PM</Text>
        </View>
        <View style={styles.timeDateBox2}>
          <Text style={styles.timeDate2}>December 19th, 9:00AM - 2:00PM</Text>
        </View>
        <Text style={styles.location}>Nathan Phillips Square, Toronto, ON</Text>
        <Text style={styles.location2}>
          Celebration Square, Mississauga, ON
        </Text>
        <Text style={styles.attending}>{attending} are attending!</Text>
        <Text style={styles.attending2}>{attending2} are attending!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "sans-serif",
    textAlign: "left",
    top: 40,
    left: 40,
    fontWeight: "bold",
    fontSize: 48,
    color: "black",
  },
  line1: {
    backgroundColor: "#f2d061",
    fontWeight: "bold",
    height: 7,
    width: 210,
    marginHorizontal: 40,
    top: 40,
  },
  line2: {
    backgroundColor: "#f2d061",
    fontWeight: "bold",
    height: 7,
    width: 210,
    marginHorizontal: 40,
    top: 45,
  },
  line3: {
    backgroundColor: "#f2d061",
    fontWeight: "bold",
    height: 7,
    width: 210,
    marginHorizontal: 40,
    top: 50,
  },
  BLMBox: {
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "black",
    height: 300,
    width: 260,
    position: "absolute",
    top: -10,
    left: 15,
  },
  blmPic: {
    position: "absolute",
    height: 260,
    width: 500,
  },
  boundingBox: {
    height: 650,
    width: 500,
    backgroundColor: "#2b2b2b",
    position: "absolute",
    top: 260,
  },
  takeAction: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: 300,
    left: 20,
  },
  line4: {
    backgroundColor: "white",
    height: 4,
    width: 200,
    position: "absolute",
    top: 310,
    marginHorizontal: 200,
  },
  line5: {
    backgroundColor: "white",
    height: 4,
    width: 200,
    position: "absolute",
    top: 318,
    marginHorizontal: 200,
  },
  line6: {
    backgroundColor: "#d6d6d6",
    height: 4,
    width: 200,
    position: "absolute",
    top: 326,
    marginHorizontal: 200,
  },
  blurb: {
    color: "white",
    fontSize: 15,
    position: "absolute",
    top: 350,
    left: 20,
    width: 380,
  },
  aboutBox: {
    position: "absolute",
    backgroundColor: "white",
    borderWidth: 4,
    borderColor: "#f2d061",
    width: 105,
    height: 50,
    top: 0,
    left: 0,
  },
  about: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    left: 19,
    top: 6,
  },
  aboutButton: {
    backgroundColor: "black",
    width: 105,
    top: 455,
    height: 50,
    left: 20,
    position: "absolute",
  },
  newsBox: {
    position: "absolute",
    backgroundColor: "white",
    borderWidth: 4,
    borderColor: "#f2d061",
    width: 105,
    height: 50,
    top: 0,
    left: 0,
  },
  news: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    left: 20,
    top: 6,
  },
  newsButton: {
    backgroundColor: "black",
    width: 105,
    top: 455,
    height: 50,
    left: 148,
    position: "absolute",
  },
  resourcesBox: {
    position: "absolute",
    backgroundColor: "white",
    borderWidth: 4,
    borderColor: "#f2d061",
    width: 117,
    height: 50,
    top: 0,
    left: 0,
  },
  resources: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    left: 3,
    top: 6,
  },
  resourcesButton: {
    backgroundColor: "black",
    width: 110,
    top: 455,
    height: 50,
    left: 277,
    position: "absolute",
  },
  joinBox: {
    position: "absolute",
    borderRadius: 15,
    backgroundColor: "#2b2b2b",
    borderWidth: 2,
    borderColor: "black",
    width: 150,
    height: 45,
    top: 0,
    left: 0,
  },
  join: {
    position: "absolute",
    fontSize: 20,
    left: 10,
    top: 5,
    color: "white",
    fontWeight: "bold",
  },
  joinButton: {
    width: 150,
    top: 545,
    height: 60,
    left: 15,
    position: "absolute",
  },
  joinBox2: {
    position: "absolute",
    borderRadius: 15,
    backgroundColor: "#2b2b2b",
    borderWidth: 2,
    borderColor: "black",
    width: 150,
    height: 45,
    top: 0,
    left: 0,
  },
  join2: {
    position: "absolute",
    fontSize: 20,
    left: 10,
    top: 5,
    color: "white",
    fontWeight: "bold",
  },
  joinButton2: {
    width: 150,
    top: 705,
    height: 60,
    left: 15,
    position: "absolute",
  },
  protest1: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 150,
    width: 410,
    position: "absolute",
    top: 530,
  },
  protest2: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 150,
    width: 410,
    position: "absolute",
    top: 690,
  },
  timeDateBox: {
    backgroundColor: "#2b2b2b",
    borderRadius: 15,
    top: 405,
    left: 15,
    width: 380,
    height: 70,
  },
  location: {
    fontSize: 20,
    color: "white",
    left: 25,
    top: 606,
    fontWeight: "bold",
    position: "absolute",
  },
  timeDate: {
    fontSize: 20,
    color: "white",
    left: 10,
    top: 35,
  },
  location2: {
    fontSize: 20,
    color: "white",
    left: 25,
    top: 430,
    fontWeight: "bold",
  },
  timeDateBox2: {
    backgroundColor: "#2b2b2b",
    borderRadius: 15,
    top: 495,
    left: 15,
    width: 380,
    height: 70,
  },
  timeDate2: {
    fontSize: 20,
    color: "white",
    left: 10,
    top: 35,
  },
  attending: {
    color: "black",
    fontWeight: "bold",
    position: "absolute",
    fontSize: 23,
    top: 548,
    left: 175,
  },
  attending2: {
    color: "black",
    fontWeight: "bold",
    position: "absolute",
    fontSize: 23,
    top: 710,
    left: 175,
  },
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
