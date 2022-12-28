import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { useSelector, useDispatch } from "react-redux";

export default function Hello({ navigation }) {
  const { userInfo } = useSelector((state) => state.AuthReducer);
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/pray.jpg")}
      resizeMode="cover"
    >
      <View style={styles.agContainer}>
        <Image
          source={require("../assets/srm.png")}
          style={{ height: 80, width: 120, margin: 15 }}
        />
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logol.png")}
          style={{ height: 400, width: 400 }}
        />

        {userInfo?.UserName ? (
          <Text
            style={{
              fontSize: 30,
              color: Colors.white,
              fontWeight: "500",
              marginTop: 10,
            }}
          >
            Welcome {userInfo?.UserName}
          </Text>
        ) : (
          <Text
            style={{
              fontSize: 30,
              color: Colors.white,
              fontWeight: "500",
              marginTop: 10,
            }}
          >
            Welcome to SRM Pay
          </Text>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.signup}
            onPress={() => navigation.push("UserDashboard")}
          >
            <Text style={styles.buttonTextUp}>Take me home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.dark,
    // backgroundColor: Colors.white,
    opacity: 0.9,
  },
  agContainer: {
    position: "absolute",
    margin: 15,
    top: 0,
    left: 0,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  signup: {
    flex: 1,
    backgroundColor: Colors.primary,
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
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
  },
  bottomTop: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  thanks: {
    fontSize: 24,
    fontWeight: "500",
    color: Colors.white,
  },
  buttonTextUp: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.white,
  },
});
