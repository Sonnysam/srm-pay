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
import { auth, db } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { AuthAction } from "../store/actions/AuthAction";

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [isChecked, setChecked] = useState(false);

  function getUserInfo(user) {
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch({
            type: AuthAction.LOGIN,
            userToken: true,
            userData: user,
            userInfo: doc.data(),
          });
        } else {
          alert("No such User!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  const handleSignIn = async () => {
    setLoading(true);
    await auth
      .signInWithEmailAndPassword(email.trim(), password)
      .then((userCredentials) => {
        getUserInfo(userCredentials.user);
        setLoading(false);
        // navigation.push("UserDashboard");
        navigation.push("Hello");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logow.png")}
          style={{ height: 350, width: 300 }}
        />
      </View>
      <ScrollView
        style={styles.formContainer}
        showsVerticalScrollIndicator={false}
        Vertical
      >
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Feather name="mail" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Email address"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.inputGroup}>
            <Feather name="lock" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <View style={styles.checkContainer}>
            <View style={styles.checkGroup}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#5199E5" : undefined}
              />
              <Text style={styles.paragraph}>Remember Me</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.push("Forgot")}>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginGroup} onPress={handleSignIn}>
            <Text style={styles.button}>
              {loading ? "Loading..." : "Login"}
            </Text>
          </TouchableOpacity>
          <View style={styles.signupGroup}>
            <Text style={styles.new}>New here?</Text>
            <TouchableOpacity onPress={() => navigation.push("Signup")}>
              <Text style={styles.signup}>Sign Up</Text>
            </TouchableOpacity>
          </View>
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
    fontSize: 20,
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
    alignItems: "center",
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: Colors.dark,
    fontSize: 16,
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
    height: 18,
    width: 18,
    borderRadius: 2,
    backgroundColor: "#87C9E9",
    marginRight: 3,
  },
  paragraph: {
    fontSize: 17,
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
