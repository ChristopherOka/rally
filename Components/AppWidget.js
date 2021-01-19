import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  let [image, setImage] = useState([]);

  function createImage() {
    setImage([require("./Images/protest-graphic.png")]);
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View>
            <Image
              style={styles.widgetDrawer}
              source={require("./Images/widgets.png")}
            />
          </View>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.widgetButton}
              onPress={() => {
                setModalVisible(!modalVisible);
                createImage();
              }}
            >
              <View></View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onLongPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
      <View>
        {image.map((value) => {
          return <Image source={value} style={styles.image} />;
        })}
      </View>
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
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    height: 130,
    width: 130,
    top: -145,
    left: -100,
    opacity: 0,
    padding: 10,
    elevation: 2,
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
  widgetDrawer: {
    position: "absolute",
    top: -400,
    left: -190,
    height: 800,
    width: 380,
    borderRadius: 20,
  },
  widgetButton: {
    position: "absolute",
    width: 118,
    height: 108,
    left: -145,
    top: -320,
  },
  image: {
    position: "absolute",
    top: -273,
    left: -163,
    height: 130,
    width: 130,
    borderRadius: 20,
  },
});

export default App;
