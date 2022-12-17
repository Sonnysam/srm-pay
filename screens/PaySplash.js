import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

export default function PaySplash({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/select.png")}
          style={{ width: 250, height: 230 }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>“God loves a cheerful giver”</Text>
          <Text style={styles.bottomText}>2 Corinthians 9:7</Text>
        </View>
        <ScrollView
          style={styles.formContainer}
          showsVerticalScrollIndicator={false}
          vertical
        >
          <View style={styles.form}>
            <TouchableOpacity
              style={styles.loginGroup}
              onPress={() => navigation.push("Tithe")}
            >
              <Text style={styles.button}>Pay Tithe</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginGroupO}
              onPress={() => navigation.push("Offering")}
            >
              <Text style={styles.buttonO}>Pay Offering</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.bottomText2}>
              Want to make other payments (seed or special offerings)
            </Text>
            <TouchableOpacity onPress={() => navigation.push("Seed")}>
              <Text
                style={{
                  color: Colors.secondary,
                  fontWeight: "bold",
                  marginTop: 5,
                }}
              >
                Click here
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    paddingTop: 10,
    width: "100%",
    backgroundColor: Colors.primary,
    width: "100%",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  bottomTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {
    fontSize: 20,
    fontWeight: "normal",
    color: Colors.white,
  },
  bottomText2: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "normal",
    color: Colors.white,
  },
  form: {
    flex: 1,
    marginTop: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  loginGroup: {
    backgroundColor: Colors.white,
    width: "80%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 33.33,
    marginVertical: 20,
  },
  loginGroupO: {
    backgroundColor: Colors.primary,
    width: "80%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 33.33,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
  },
  buttonO: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
  },
});
