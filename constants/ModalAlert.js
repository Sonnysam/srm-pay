import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Colors from "./Colors";
import { Entypo } from "@expo/vector-icons";

const ModalPopUp = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setTimeout(() => setShowModal(false), 200);
    }
  };

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </Modal>
  );
};

const ModalAlert = () => {
  const [visible, setVisible] = useState(false);

  function CompletedOrder() {
    setVisible(true);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ModalPopUp visible={visible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.experienceContainer}>
          <Text style={styles.experience}>
            How was your experience with the bin request pickup?
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: 15,
          }}
        ></View>

        <Text style={{ marginVertical: 20, fontSize: 20, textAlign: "center" }}>
          {thanks}
        </Text>
      </ModalPopUp>
      <TouchableOpacity onPress={() => CompletedOrder()} style={styles.button}>
        <Text
          style={{
            color: Colors.white,
            fontSize: 20,
            fontWeight: "bold",
            padding: 10,
          }}
        >
          Rate Driver
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 20,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  button: {
    backgroundColor: Colors.dark,
    width: "80%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    marginBottom: 5,
    marginTop: "30%",
  },
  experienceContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  experience: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ModalAlert;
