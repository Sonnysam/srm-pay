import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { Feather } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useSelector, useDispatch } from "react-redux";
import { AuthAction } from "../store/actions/AuthAction";
import { auth, db } from "../firebase/firebase";
import { FontAwesome5 } from "@expo/vector-icons";
import Pick from "../constants/Pick";
import { Entypo } from "@expo/vector-icons";
import tw from "twrnc";

export default function Signup({ navigation }) {
  const dispatch = useDispatch();
  const [isChecked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    name,
    email,
    password,
    churchName,
    phoneNo,
    profilePhoto,
    confirmPassword,
  } = useSelector((state) => state.AuthReducer);

  const [secureTextEntry, setSecureTextEntry] = useState(true);


  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleSignUp = async () => {
    // e.preventDefault();
    // verifying
    setLoading(true);
    await auth
      .createUserWithEmailAndPassword(email.trim(), password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Signed up with", user.email);
        setLoading(false);
        db.collection("users")
          .doc(user.uid)
          .set({
            UserName: name,
            Email: email,
            Uid: user.uid,
            UserType: "user",
            SignUpDate: new Date().toUTCString(),
            PhoneNo: phoneNo,
            ChurchName: churchName,
            profilePhoto: profilePhoto,
          })
          .then(() => {
            alert("You've successfully created an account 🚀");
            navigation.push("Login");
          })
          .catch((error) => alert(error.message));
      })
      .catch((error) => alert(error.message));

    // e.target.reset();
  };
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      Vertical
      bounces={false}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logow.png")}
          style={{ height: 200, width: 300 }}
        />
      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        marginVertical: 10,
      }}>
            <Text style={styles.error}>
              {" "}
              {
                (password !== confirmPassword && (
                  <Text style={{ color: "red" }}>Passwords do not match</Text>
                )) ||
                (password.length < 6 && (
                  <Text style={{ color: "red" }}>
                    Password must be at least 6 characters
                  </Text>
                ))
              }
            </Text>
          </View>
      <View style={styles.formContainer}>
        <KeyboardAvoidingView style={styles.form}>
          <View style={styles.inputGroup}>
            <Feather name="user" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Username"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(e) =>
                dispatch({
                  type: AuthAction.USERPROFILE,
                  payload: { type: "name", value: e },
                })
              }
              value={name}
            />
          </View>
          <View style={styles.inputGroup}>
            <Feather name="mail" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Email address"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(e) =>
                dispatch({
                  type: AuthAction.USERPROFILE,
                  payload: { type: "email", value: e },
                })
              }
              value={email}
            />
          </View>
          {/* <View style={styles.inputGroup}>
            <Feather name="lock" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(e) =>
                dispatch({
                  type: AuthAction.USERPROFILE,
                  payload: { type: "password", value: e },
                })
              }
              value={password}
            />
          </View> */}
          <View
            style={[
              styles.inputGroup,
              tw`flex flex-row items-center justify-between`,
            ]}
          >
            <View style={tw`flex flex-row items-center`}>
              <Feather name="lock" size={24} color="black" />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#000"
                value={password}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                onChangeText={(e) =>
                  dispatch({
                    type: AuthAction.USERPROFILE,
                    payload: { type: "password", value: e },
                  })
                }
                style={tw`ml-2`}
              />
            </View>
            <TouchableOpacity onPress={toggleSecureTextEntry}>
              {secureTextEntry ? (
                <Entypo name="eye" size={24} color="black" />
              ) : (
                <Entypo name="eye-with-line" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>

          {/* Confirm Password */}
          <View
            style={[
              styles.inputGroup,
              tw`flex flex-row items-center justify-between`,
            ]}
          >
            <View style={tw`flex flex-row items-center`}>
              <Feather name="lock" size={24} color="black" />
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#000"
                value={confirmPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                onChangeText={(e) =>
                  dispatch({
                    type: AuthAction.USERPROFILE,
                    payload: { type: "confirmPassword", value: e },
                  })
                }
                style={tw`ml-2`}
              />
            </View>
            <TouchableOpacity onPress={toggleSecureTextEntry}>
              {secureTextEntry ? (
                <Entypo name="eye" size={24} color="black" />
              ) : (
                <Entypo name="eye-with-line" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
          {/* <View>
            <Text style={styles.error}>
              {" "}
              {
                (password !== confirmPassword && (
                  <Text style={{ color: "red" }}>Passwords do not match</Text>
                )) ||
                (password.length < 6 && (
                  <Text style={{ color: "red" }}>
                    Password must be at least 6 characters
                  </Text>
                ))
              }
            </Text>
          </View> */}
          <View style={styles.inputGroup}>
            <FontAwesome5 name="church" size={22} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Church name or branch"
              onChangeText={(e) =>
                dispatch({
                  type: AuthAction.USERPROFILE,
                  payload: { type: "churchName", value: e },
                })
              }
              value={churchName}
            />
          </View>
          <View style={styles.inputGroup}>
            <Feather name="phone" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              // placeholderTextColor="#CCCC"
              onChangeText={(e) =>
                dispatch({
                  type: AuthAction.USERPROFILE,
                  payload: { type: "phoneNo", value: e },
                })
              }
              value={phoneNo}
            />
          </View>

          <Pick />

          <View style={styles.checkContainer}>
            <View style={styles.checkGroup}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#5199E5" : undefined}
              />
              <Text style={styles.paragraph}>
                I accept all SRM Pay’s terms & policy
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.loginGroup} onPress={handleSignUp}>
            <Text style={styles.button}>
              {loading ? "Signing up..." : "Sign Up"}
            </Text>
          </TouchableOpacity>
          <View style={styles.signupGroup}>
            <Text style={styles.new}>Already a user?</Text>
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text style={styles.signup}>Log In</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    marginTop: 45,
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 18,
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
    marginBottom: 18,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: Colors.dark,
    fontSize: 16,
  },
  checkContainer: {
    flexDirection: "row",
    marginBottom: 10,
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
    fontSize: 14,
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
    marginTop: 7,
    marginBottom: 20,
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
  error: {
    color: "red",
    fontSize: 18,
    fontWeight: "500",
    marginRight: 5,
  },
});
