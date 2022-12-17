import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useRoute } from "@react-navigation/native";

export default function Success({ navigation }) {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <View style={[styles.top, styles.bg]}></View>
      <TouchableOpacity
        style={styles.hello}
        onPress={() => navigation.push("Home")}
      >
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.helloSub}>Payment Successful</Text>

      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/success.png")}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.successContainer}>
          <Text style={styles.successText}>
            You have successfully paid GH₵{route.params.amount} to
            {route.params.phone}
          </Text>
        </View>
        <ScrollView style={styles.formContainer}>
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.input}>Amount: {route.params.amount}</Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.input}>Phone: {route.params.phone}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.payGroup}
            onPress={() => navigation.push("Tithe")}
          >
            <Text style={styles.pay}>Back to Payment</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    width: "100%",
  },
  hello: {
    flexDirection: "row",
    position: "absolute",
    marginHorizontal: 20,
    marginTop: "8%",
    color: Colors.dark,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white,
  },
  helloSub: {
    fontSize: 15,
    fontWeight: "300",
    fontWeight: "normal",
    position: "absolute",
    marginHorizontal: 20,
    marginTop: "15%",
    color: Colors.white,
  },
  top: {
    backgroundColor: Colors.primary,
    minHeight: "15%",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  successContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  successText: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.primary,
  },
  formContainer: {
    width: "100%",
    padding: 20,
  },
  form: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputGroup: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F0F8FF",
    borderRadius: 10,
    paddingLeft: 20,
    fontSize: 18,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#1E90FF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  payGroup: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 10,
    padding: 10,
  },
  pay: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
  },
});
