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

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.Title}>Know Your Rights</Text>
            <View style={styles.TitleUnderLine} />
            <Text style={{ fontSize: 18, marginTop: 60, marginBottom: 20 }}>
              {" "}
              1. You DO have the right to protest under section II of the
              Canadian charter of rights and freedoms. Don’t be afraid to
              organize your own or participate.
            </Text>
            <Text style={{ fontSize: 18, marginVertical: 20 }}>
              {" "}
              2. As long as your protest remains peacful, you may protest on
              public land without being arrested or fined; however, this is not
              the case for highways. Make sure you do not intersect any highways
              when planning your route.
            </Text>
            <Text style={{ fontSize: 18, marginVertical: 20 }}>
              {" "}
              3. In the event the police detain you, you have the right to
              remian silent, know why you are being arrested, and speak to a
              lawyer ASAP.
            </Text>
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
          source={require("./Images/Rights.png")}
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
    width: 220,
    height: 2,
    top: 10,
    marginHorizontal: 30,
    alignItems: "center",
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
    marginHorizontal: 25,
    marginBottom: -130,
    backgroundColor: "#B9C9D3",
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
  },
});

export default App;
