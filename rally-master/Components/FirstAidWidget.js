import React, { useState } from "react";
import Close from "./Images/Close.png";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.Title}>First Aid</Text>
              <View style={styles.TitleUnderLine} />
              <View style={styles.FirstAidBody}></View>
              <Text style={styles.ModalParagraph}>
                Injuries are not uncommon at protests so it is important to have
                a basic understanding of what to do if you or someone you know
                is injured. Below are a few of the most common injuries and how
                to deal with and prevent them:{" "}
              </Text>
              <Text style={styles.ModalHeading}>Bruises or Scrapes:</Text>
              <Text style={styles.ModalParagraph}>
                Remember to clean minor bruises or scrapes and sanitize the area
                so it doesn’t get infected. Don’t forget to wash your hands and
                use a bandaid if necessary. If you notice any swelling, add ice
                and apply gentle pressure if bleeding.{" "}
              </Text>
              <Text style={styles.ModalHeading}>Sunburn:</Text>
              <Text style={styles.ModalParagraph}>
                Don’t forget to wear sunscreen and protective gear (a hat) to
                avoid sunburn. If you are out for a long period of time, reapply
                your sunscreen every few hours. If you do have severe sunburn
                seek medication and try to avoid going out in the sun for a few
                days.{" "}
              </Text>
              <Text style={styles.ModalHeading}>Dehydration:</Text>
              <Text style={styles.ModalParagraph}>
                Remember to bring a water bottle and stay hydrated! Protests can
                get tiring and it is important to rest and keep drinking water
                to prevent dehydration. If you start feeling unwell, take a
                break and if symptoms worsen seek medical attention.{" "}
              </Text>
            </ScrollView>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!true);
          }}
        >
          <Image
            style={styles.CloseWidget}
            source={require("./Images/Close.png")}
          />
        </TouchableOpacity>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Image
          style={styles.WidgetOutline}
          source={require("./Images/FirstAid.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  Title: {
    textAlign: "center",
    top: 10,
    fontWeight: "bold",
    fontSize: 24,
    color: "#404040",
  },
  TitleUnderLine: {
    width: 150,
    height: 2,
    top: 10,
    marginHorizontal: 62,
    backgroundColor: "#74777A",
  },
  modalView: {
    width: 350,
    height: 650,
    margin: 20,
    backgroundColor: "#B9C9D3",
    top: 30,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  WidgetOutline: {
    width: 135,
    height: 135,
    top: 0,
    marginHorizontal: 25,
    marginBottom: 40,
    borderRadius: 20,
    top: -40,
  },
  CloseWidget: {
    width: 42,
    height: 38,
    top: -700,
    left: 330,
    backgroundColor: "#B9C9D3",
    borderRadius: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#404040",
  },
  FirstAidBody: {
    margin: 15,
  },
  ModalHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
    color: "#404040",
    textAlign: "left",
  },
  ModalParagraph: {
    fontSize: 15,
    color: "#404040",
  },
});

export default App;
