import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function Confirm({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.hello}
        onPress={() => navigation.push("Login")}
      >
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/mail.png")}
          style={{ width: 305, height: 200 }}
        />
        <View style={styles.signupGroup}>
          <Text style={styles.new}>
            Please check your spam folder to find password reset link
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hello: {
    marginHorizontal: 10,
    marginTop: "5%",
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.primary,
  },
  signupGroup: {
    flexDirection: "row",
    marginTop: "10%",
    marginHorizontal: 10,
  },
  signup: {
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  new: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "500",
    marginRight: 5,
  },
});
