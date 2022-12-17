import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function Needhelp() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.push("Complaint")}
      >
        <AntDesign
          name="questioncircleo"
          size={18}
          color="white"
          style={{ marginRight: 5 }}
        />
        <Text style={styles.help}>Need help</Text>
        {/* <Image
          source={require(".././assets/customer-service.png")}
          style={styles.image}
        /> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    zIndex: 50,
    bottom: 5,
    right: 0,
    margin: 20,
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 10,
  },
  image: {
    height: 60,
    width: 60,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 10,
  },
  help: {
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 5,
    color: Colors.white,
  },
});
