import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { Feather } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { auth } from "../firebase/firebase";

export default function Forgot({ navigation }) {
  const [email, setEmail] = useState("");
  const [isChecked, setChecked] = useState(false);

  const handleResetPassword = () => {
    auth
      .sendPasswordResetEmail(email.trim())
      .then(() => {
        // Email sent.
        navigation.push("Confirm");
        alert("Password reset email sent🚀");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/forgot.png")}
          style={{ width: 305, height: 200 }}
        />
        <Text style={styles.logoText}>
          Enter your email address to retrieve your password{" "}
        </Text>
      </View>
      <ScrollView style={styles.formContainer}>
        <View style={styles.form}>
          <View style={styles.forgot}>
            <Text style={styles.forgotText}>Forgot Password</Text>
          </View>
          <View style={styles.inputGroup}>
            <Feather name="mail" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              // placeholderTextColor="#CCCC"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <TouchableOpacity
            style={styles.loginGroup}
            onPress={handleResetPassword}
          >
            <Text style={styles.button}>Send email reset link</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    fontSize: 16,
    fontWeight: "500",
    color: Colors.primary,
  },
  formContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: 10,
    width: "100%",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  forgot: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white,
  },
  form: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputGroup: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "80%",
    height: 60,
    marginTop: "10%",
    alignItems: "center",
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: Colors.dark,
    fontSize: 20,
  },
  checkContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    width: "80%",
  },
  checkGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    height: 15,
    width: 15,
    borderRadius: 2,
    backgroundColor: "#87C9E9",
    marginRight: 3,
  },
  paragraph: {
    fontSize: 16,
    color: Colors.secondary,
    fontWeight: "500",
  },
  forgot: {
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: "500",
  },
  loginGroup: {
    backgroundColor: Colors.white,
    width: "80%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
  },
  signupGroup: {
    flexDirection: "row",
    marginTop: 10,
  },
  signup: {
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  new: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
    marginRight: 5,
  },
});
