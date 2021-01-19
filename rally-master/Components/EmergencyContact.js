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
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.Title}>Emergency Contacts</Text>
            <View style={styles.TitleUnderLine} />
            <Text style={{ fontSize: 20, top: 30 }}>
              Set your Emergency Contacts:
            </Text>
            <View style={styles.SetContacts}>
              <View flexDirection="row">
                <TextInput
                  placeholder="Name"
                  style={{
                    fontSize: 20,
                    marginVertical: 10,
                    left: 20,
                  }}
                />
                <Text>
                  {"\t"}
                  {"\t"}
                </Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="Number"
                  style={{
                    fontSize: 20,
                    marginVertical: 10,
                    left: 20,
                  }}
                />
              </View>
              <View flexDirection="row">
                <TextInput
                  placeholder="Name"
                  style={{
                    fontSize: 20,
                    marginVertical: 10,
                    left: 25,
                  }}
                />
                <Text>
                  {"\t"}
                  {"\t"}
                </Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="Number"
                  style={{
                    fontSize: 20,
                    marginVertical: 10,
                    left: 25,
                  }}
                />
              </View>
              <View flexDirection="row">
                <TextInput
                  placeholder="Name"
                  style={{
                    fontSize: 20,
                    marginVertical: 10,
                    left: 20,
                  }}
                />
                <Text>
                  {"\t"}
                  {"\t"}
                </Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="Number"
                  style={{
                    fontSize: 20,
                    marginVertical: 10,
                    left: 20,
                  }}
                />
              </View>
            </View>
            <TouchableOpacity style={{ top: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Save</Text>
            </TouchableOpacity>
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
          source={require("./Images/EmergencyContact.png")}
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
    width: 240,
    height: 2,
    top: 10,
    marginHorizontal: 30,
    alignItems: "center",
    backgroundColor: "#74777A",
  },
  modalView: {
    width: 350,
    height: 350,
    margin: 20,
    backgroundColor: "#B9C9D3",
    top: -120,
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
    top: 0,
    marginBottom: 50,
    backgroundColor: "#B9C9D3",
    borderRadius: 20,
    top: -40,
  },
  Contacts: {
    width: 300,
    height: 200,
    top: 40,
    marginBottom: 50,
    backgroundColor: "#ECEDE8",
    borderRadius: 20,
    top: -120,
    textAlign: "center",
  },
  SetContacts: {
    width: 300,
    height: 150,
    marginBottom: 50,
    backgroundColor: "#ECEDE8",
    borderRadius: 20,
    top: 50,
    textAlign: "center",
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
