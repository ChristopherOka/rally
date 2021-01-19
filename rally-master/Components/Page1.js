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
  let [protestName, setProtestName] = useState("");
  let [description, setDescription] = useState("");

  function setName(value) {
    setProtestName(value);
  }

  function setDesc(value) {
    setDescription(value);
  }

  function deleteAll() {
    setDescription("");
    setProtestName("");
  }

  return (
    <View style={styles.background}>
      <Text style={styles.title}>CREATE PROTEST</Text>
      <View style={styles.TitleUnderLine} />
      <Text style={styles.protestName}>Protest Name:</Text>
      <View style={styles.nameBox}>
        <TextInput
          style={styles.nameInput}
          placeholder={"Type here"}
          onChangeText={setName}
        ></TextInput>
      </View>
      <Text style={styles.description}>Description:</Text>
      <View style={styles.descriptionBox}>
        <TextInput
          style={styles.descriptionInput}
          multiline={true}
          placeholder={"Type here"}
          onChangeText={setDesc}
        ></TextInput>
      </View>
      {/*<TouchableOpacity style={styles.nextButton}>
        <View style={styles.nextBox}>
          <Text style={styles.next}>NEXT</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={deleteAll}>
        <View style={styles.backBox}>
          <Text style={styles.back}>BACK</Text>
        </View>
  </TouchableOpacity>*/}
      <StatusBar style="auto" />
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
  protestName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#74777A",
    position: "absolute",
    top: 150,
    left: 10,
  },
  nameBox: {
    backgroundColor: "#B9C9D3",
    borderRadius: 20,
    height: 50,
    width: 300,
    top: 150,
    left: 50,
  },
  nameInput: {
    top: 10,
    left: 10,
    fontSize: 20,
    width: 270,
  },
  protestType: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#74777A",
    position: "absolute",
    top: 300,
    left: 10,
  },
  typeBox: {
    backgroundColor: "#B9C9D3",
    borderRadius: 20,
    height: 50,
    width: 300,
    top: 250,
    left: 50,
  },
  typeInput: {
    top: 10,
    left: 10,
    fontSize: 20,
    width: 270,
  },
  description: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#74777A",
    position: "absolute",
    top: 300,
    left: 10,
  },
  descriptionBox: {
    backgroundColor: "#B9C9D3",
    borderRadius: 20,
    height: 350,
    width: 300,
    top: 260,
    left: 50,
  },
  descriptionInput: {
    top: 10,
    left: 10,
    fontSize: 20,
    width: 270,
    height: 330,
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
});
