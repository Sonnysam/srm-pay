import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { CompAction, AuthAction } from "../store/actions/CompAction";

export default function Welcome({ navigation }) {
  const dispatch = useDispatch();
  const Admin = () => {
    navigation.push("AdminLogin");
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logow.png")}
          style={{ height: 250, width: 400 }}
        />
        {/* <Text style={styles.logoText}>Pay tithes & offering with ease...</Text> */}
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomTop}>
          <Text style={styles.bottomText} onLongPress={() => Admin()}>
            Welcome
          </Text>
          <Text style={styles.bottomLine}></Text>
          <View style={styles.verseContainer}>
            <Text style={styles.giver}>“God loves a cheerful giver” </Text>
            <Text style={styles.verse}>2 Corinthians 9:7</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.signup}
            onPress={() => navigation.push("Signup")}
          >
            <Text style={styles.buttonTextUp}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.login}
            onPress={() => navigation.push("Login")}
          >
            <Text style={styles.buttonTextIn}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.primary,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: 10,
    width: "100%",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  bottomTop: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.white,
  },
  bottomLine: {
    width: 80,
    height: 3,
    backgroundColor: Colors.white,
    marginTop: 3,
    marginBottom: 20,
  },
  verseContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  giver: {
    fontSize: 20,
    color: Colors.white,
  },
  verse: {
    fontSize: 20,
    color: Colors.white,
  },
  buttons: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
  signup: {
    flex: 1,
    backgroundColor: Colors.white,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 33.33,
    marginRight: 10,
  },
  login: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 33.33,
    borderColor: Colors.white,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  buttonTextUp: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
  },
  buttonTextIn: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
  },
});
