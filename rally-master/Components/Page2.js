import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

export default function App() {
  let [email, setEmail] = useState("");
  let [link1, setLink1] = useState("");
  let [link2, setLink2] = useState("");
  let [link3, setLink3] = useState("");
  let [link4, setLink4] = useState("");

  function Email(value) {
    setEmail(value);
  }

  function link1Handler(value) {
    setLink1(value);
  }

  function link2Handler(value) {
    setLink2(value);
  }

  function link3Handler(value) {
    setLink3(value);
  }

  function link4Handler(value) {
    setLink4(value);
  }

  return (
    <View style={styles.background}>
      <Text style={styles.title}>CREATE PROTEST</Text>
      <View style={styles.TitleUnderLine} />
      <Text style={styles.banner}>Add a Banner:</Text>
      <View style={styles.bannerBox}>
        <Text style={styles.bannerImage}>Add a Banner Image</Text>
      </View>
      <Text style={styles.email}>Contact E-mail:</Text>
      <View style={styles.emailBox}>
        <TextInput
          style={styles.emailInput}
          placeholder={"Type here"}
          onChangeText={setEmail}
        ></TextInput>
      </View>
      <Text style={styles.links}>External Links:</Text>
      <View style={styles.line1} />
      <View style={styles.line2} />
      <View style={styles.line3} />
      <View style={styles.line4} />
      <TextInput
        placeholder={"Type here"}
        onChangeText={link1Handler}
        style={styles.linkInput1}
      ></TextInput>
      <TextInput
        placeholder={"Type here"}
        onChangeText={link2Handler}
        style={styles.linkInput2}
      ></TextInput>
      <TextInput
        placeholder={"Type here"}
        onChangeText={link3Handler}
        style={styles.linkInput3}
      ></TextInput>
      <TextInput
        placeholder={"Type here"}
        onChangeText={link4Handler}
        style={styles.linkInput4}
      ></TextInput>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    backgroundColor: "#ECEDE8",
    height: 930,
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
  banner: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#74777A",
    position: "absolute",
    top: 150,
    left: 10,
  },
  email: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#74777A",
    position: "absolute",
    top: 340,
    left: 10,
  },
  emailBox: {
    backgroundColor: "#B9C9D3",
    borderRadius: 20,
    height: 50,
    width: 300,
    top: 340,
    left: 50,
  },
  emailInput: {
    top: 10,
    left: 10,
    fontSize: 20,
    width: 270,
    height: 40,
    textAlignVertical: "top",
  },
  nextBox: {
    borderWidth: 2,
    borderColor: "#74777A",
    backgroundColor: "#EE8554",
    position: "absolute",
    height: 50,
    width: 85,
  },
  next: {
    fontWeight: "bold",
    color: "#2b2b2b",
    fontSize: 20,
    top: 7,
    left: 12,
  },
  nextButton: {
    position: "absolute",
    top: 760,
    right: 75,
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
  bannerBox: {
    position: "absolute",
    backgroundColor: "#B9C9D3",
    height: 100,
    width: 360,
    top: 200,
    left: 25,
    borderWidth: 3,
    borderColor: "grey",
  },
  bannerImage: {
    position: "absolute",
    fontSize: 20,
    top: 30,
    left: 70,
  },
  links: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#74777A",
    position: "absolute",
    top: 480,
    left: 10,
  },
  line1: {
    width: 350,
    height: 4,
    top: 450,
    marginHorizontal: 25,
    alignItems: "center",
    backgroundColor: "#74777A",
  },
  line2: {
    width: 350,
    height: 4,
    top: 490,
    marginHorizontal: 25,
    alignItems: "center",
    backgroundColor: "#74777A",
  },
  line3: {
    width: 350,
    height: 4,
    top: 530,
    marginHorizontal: 25,
    alignItems: "center",
    backgroundColor: "#74777A",
  },
  line4: {
    width: 350,
    height: 4,
    top: 570,
    marginHorizontal: 25,
    alignItems: "center",
    backgroundColor: "#74777A",
  },
  linkInput1: {
    fontSize: 15,
    position: "absolute",
    top: 539,
    left: 25,
  },
  linkInput2: {
    fontSize: 15,
    position: "absolute",
    top: 582,
    left: 25,
  },
  linkInput3: {
    fontSize: 15,
    position: "absolute",
    top: 625,
    left: 25,
  },
  linkInput4: {
    fontSize: 15,
    position: "absolute",
    top: 670,
    left: 25,
  },
});
