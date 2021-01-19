import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";

export default function App() {
  let protestName = "Free Pizza";
  let description =
    "We demand a change. Pizza should be free for the entire population. This is madness. I can't believe you've done this. Despicable. Give us free pizza now. Right now!";

  let [protest1, setProtest1] = useState("");
  let [protest2, setProtest2] = useState("");

  function handleProtest1Input(value) {
    setProtest1(value);
  }

  function handleProtest2Input(value) {
    setProtest2(value);
  }

  return (
    <View style={styles.background}>
      <Text style={styles.title}>{protestName}</Text>
      <View style={styles.TitleUnderLine} />
      <Image source={require("./Images/PIZZA.png")} style={styles.pizza} />
      <View style={styles.descBox} />
      <View style={styles.descBox2} />
      <Text style={styles.fullDesc}>{description}</Text>
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

      <TouchableOpacity style={styles.saveButton}>
        <View style={styles.saveBox}>
          <Text style={styles.save}>Save</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton2}>
        <View style={styles.saveBox2}>
          <Text style={styles.save2}>Save</Text>
        </View>
      </TouchableOpacity>
      <View style={{ top: -40 }}>
        <View style={styles.innerBox} />
        <View style={styles.innerBox2} />
        <TextInput
          placeholder={"Type here"}
          style={styles.inputBox1}
          onChangeText={handleProtest1Input}
        ></TextInput>
        <TextInput
          placeholder={"Type here"}
          style={styles.inputBox2}
          onChangeText={handleProtest2Input}
        ></TextInput>
      </View>
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
  pizza: {
    top: 60,
    height: 150,
    width: 300,
    left: 60,
  },
  aboutBox: {
    position: "absolute",
    backgroundColor: "#EE8554",
    borderWidth: 2,
    borderColor: "black",
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
    top: 425,
    height: 50,
    left: 20,
    position: "absolute",
  },
  newsBox: {
    position: "absolute",
    backgroundColor: "#EE8554",
    borderWidth: 2,
    borderColor: "black",
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
    top: 425,
    height: 50,
    left: 148,
    position: "absolute",
  },
  resourcesBox: {
    position: "absolute",
    backgroundColor: "#EE8554",
    borderWidth: 2,
    borderColor: "black",
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
    top: 425,
    height: 50,
    left: 277,
    position: "absolute",
  },
  fullDesc: {
    fontSize: 18,
    top: 100,
    width: 380,
    left: 13,
    color: "#74777A",
  },
  descBox: {
    backgroundColor: "#B9C9D3",
    position: "absolute",
    height: 150,
    width: 411,
    borderRadius: 20,
    top: 270,
  },
  descBox2: {
    backgroundColor: "#ECEDE8",
    position: "absolute",
    height: 135,
    width: 400,
    borderRadius: 20,
    top: 277,
    left: 5,
  },
  saveBox: {
    position: "absolute",
    borderRadius: 15,
    backgroundColor: "#74777A",
    borderWidth: 2,
    borderColor: "#ECEDE8",
    width: 70,
    height: 45,
    top: -40,
    left: 0,
  },
  save: {
    position: "absolute",
    fontSize: 20,
    left: 9,
    top: 5,
    color: "#ECEDE8",
    fontWeight: "bold",
  },
  saveButton: {
    width: 70,
    top: 540,
    height: 60,
    left: 15,
    position: "absolute",
  },
  protest1: {
    backgroundColor: "#B9C9D3",
    borderRadius: 20,
    height: 150,
    width: 411,
    position: "absolute",
    top: 490,
  },
  innerBox: {
    backgroundColor: "#ECEDE8",
    height: 75,
    width: 390,
    borderRadius: 20,
    top: 305,
    left: 10,
  },
  saveBox2: {
    position: "absolute",
    borderRadius: 15,
    backgroundColor: "#74777A",
    borderWidth: 2,
    borderColor: "#ECEDE8",
    width: 70,
    height: 45,
    top: -40,
    left: 0,
  },
  save2: {
    position: "absolute",
    fontSize: 20,
    left: 9,
    top: 5,
    color: "#ECEDE8",
    fontWeight: "bold",
  },
  saveButton2: {
    width: 70,
    top: 700,
    height: 60,
    left: 15,
    position: "absolute",
  },
  protest2: {
    backgroundColor: "#B9C9D3",
    borderRadius: 20,
    height: 150,
    width: 411,
    position: "absolute",
    top: 650,
  },
  innerBox2: {
    backgroundColor: "#ECEDE8",
    height: 75,
    width: 390,
    borderRadius: 20,
    top: 385,
    left: 10,
  },
  inputBox1: {
    fontSize: 20,
    top: 160,
    left: 20,
  },
  inputBox2: {
    fontSize: 20,
    top: 290,
    left: 20,
  },
});
