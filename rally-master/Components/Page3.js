import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Button,
  Image,
} from "react-native";

export default function App() {
  let [isPublic, setIsPublic] = useState(true);
  let [image, setImage] = useState([]);
  let [QR, setQR] = useState([require("./Images/QR.png")]);

  function privateSetter() {
    setIsPublic(false);
    setImage([require("./Images/private.png")]);
    console.log(image);
  }

  function publicSetter() {
    setIsPublic(true);
    setImage([]);
    console.log(isPublic);
  }

  return (
    <View style={styles.background}>
      <Text style={styles.title}>CREATE PROTEST</Text>
      <View style={styles.TitleUnderLine} />
      {/* <TouchableOpacity style={styles.finishButton}>
        <View style={styles.finishBox}>
          <Text style={styles.finish}>FINISH</Text>
        </View>
  </TouchableOpacity>*/}
      {/* <TouchableOpacity style={styles.backButton}>
        <View style={styles.backBox}>
          <Text style={styles.back}>BACK</Text>
        </View>
  </TouchableOpacity>*/}
      <Text style={styles.query}>
        Would you like your protest to be Public or Private?
      </Text>
      <TouchableWithoutFeedback
        style={styles.publicButton}
        onPress={privateSetter}
      >
        <Image
          style={styles.publicImage}
          source={require("./Images/public.png")}
        />
      </TouchableWithoutFeedback>
      <View>
        {image.map((value) => {
          return (
            <TouchableWithoutFeedback
              style={styles.privateButton}
              key={"does not matter"}
              onPress={publicSetter}
            >
              <Image
                style={styles.privateImage}
                source={require("./Images/private.png")}
              />
            </TouchableWithoutFeedback>
          );
        })}
      </View>
      <View>
        {QR.map((value) => {
          if (!isPublic) {
            return (
              <View>
                <Text style={styles.QRText}>
                  Here is your generated QR Code:
                </Text>
                <Image style={styles.QR} source={value} />
              </View>
            );
          }
        })}
      </View>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    backgroundColor: "#ECEDE8",
    height: 900,
  },
  title: {
    textAlign: "center",
    top: 50,
    fontWeight: "bold",
    fontSize: 40,
    color: "#EE8554",
  },
  TitleUnderLine: {
    width: 380,
    height: 5,
    top: 50,
    marginHorizontal: 17,
    alignItems: "center",
    backgroundColor: "#74777A",
  },
  finishBox: {
    borderWidth: 2,
    borderColor: "#74777A",
    backgroundColor: "#EE8554",
    position: "absolute",
    height: 50,
    width: 98,
  },
  finish: {
    fontWeight: "bold",
    color: "#2b2b2b",
    fontSize: 20,
    top: 7,
    left: 12,
  },
  finishButton: {
    position: "absolute",
    top: 760,
    right: 80,
    height: 40,
    width: 70,
  },
  backBox: {
    borderWidth: 2,
    borderColor: "#74777A",
    backgroundColor: "#EE8554",
    position: "absolute",
    height: 50,
    width: 85,
  },
  back: {
    fontWeight: "bold",
    color: "#2b2b2b",
    fontSize: 20,
    top: 7,
    left: 12,
  },
  backButton: {
    position: "absolute",
    top: 760,
    left: 55,
    height: 40,
    width: 70,
  },
  query: {
    fontSize: 25,
    color: "#74777A",
    fontWeight: "bold",
    top: 100,
    width: 350,
    left: 20,
  },
  publicImage: {
    width: 130,
    height: 45,
    left: 130,
    top: 155,
  },
  publicButton: {
    width: 200,
    height: 80,
    top: 150,
    left: 120,
  },
  privateImage: {
    width: 130,
    height: 45,
    left: 130,
    top: 110,
  },
  privateButton: {
    width: 200,
    height: 80,
    top: 110,
    left: 120,
  },
  QR: {
    position: "absolute",
    height: 250,
    width: 250,
    borderWidth: 4,
    borderColor: "black",
    top: 230,
    left: 75,
  },
  QRText: {
    fontSize: 30,
    color: "#74777A",
    top: 130,
    left: 20,
    width: 380,
    fontWeight: "bold",
  },
});
