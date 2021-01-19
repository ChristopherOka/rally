import React, { useState } from "react";
import Close from "./Images/Close.png";
import {
  ScrollView,
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
            <Text style={styles.Title}>Walking Route</Text>
            <View style={styles.TitleUnderLine} />
            <ScrollView showsVerticalScrollIndicator={false}>
              <Image
                source={require("./Images/GoogleMaps.jpg")}
                style={styles.map}
              />
              <Text style={{ fontWeight: "bold", color: "#404040" }}>
                {"\n"}
                {"\n"}
                {"\n"}Starting Point: Nathan Phillip's Square
              </Text>
              <Text style={{ fontWeight: "bold", color: "#404040" }}>
                100 Queen St W, Toronto, ON M5H 2N1
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
          source={require("./Images/Location.png")}
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
    width: 200,
    height: 2,
    top: 10,
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
    padding: 10,
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
  map: {
    top: 30,
    width: 330,
    height: 500,
  },
  WidgetOutline: {
    width: 135,
    height: 135,
    marginHorizontal: 25,
    marginBottom: 40,
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
