import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import { AuthAction } from "../store/actions/AuthAction";
import { auth } from "../firebase/firebase";
// import ModalAlert from "../constants/ModalAlert";


// import { pickImage } from "../constants/Pick";

export default function Profile({ navigation }) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    if (!userInfo) {
      alert("Error fetching user information");
      navigation.push("Home");
    }
  }, []);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch({
          type: AuthAction.USER_TYPE,
          userToken: false,
        });
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const Modal = () => {
    Alert.alert("SRM PAY", "Do you really want to logout", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "Cancel",
      },
      { text: "Logout", onPress: handleSignOut },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        {userInfo?.profilePhoto ? (
          <Image
            style={styles.image}
            source={{ uri: userInfo?.profilePhoto, width: 200, height: 200 }}
          />
        ) : (
          <Image style={styles.image} source={require("../assets/me.png")} />
        )}
        {/* <TouchableOpacity onPress={pickImage}>
          <Text style={{ color: Colors.primary, fontSize: 16 }}>
            Change Photo
          </Text>
        </TouchableOpacity> */}
      </View>
      <ScrollView style={styles.formContainer}>
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.input}>Name</Text>
            <Text style={styles.placeholder}>{userInfo?.UserName}</Text>
            <View style={styles.borderBottom}></View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.input}>Email</Text>
            <Text style={styles.placeholder}>{userInfo?.Email}</Text>
            <View style={styles.borderBottom}></View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.input}>Phone Number</Text>
            <Text style={styles.placeholder}>{userInfo?.PhoneNo}</Text>
            <View style={styles.borderBottom}></View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.input}>Church Branch</Text>
            <Text style={styles.placeholder}>{userInfo?.ChurchName}</Text>
            <View style={styles.borderBottom}></View>
          </View>

          {/* Onpress of btn to be changed to firebase signout function */}
          {/* <TouchableOpacity style={styles.payGroup} onPress={handleSignOut}> */}
          <TouchableOpacity style={styles.payGroup} onPress={Modal}>
            <Text style={styles.pay}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  formContainer: {
    marginTop: "10%",
  },
  form: {
    flex: 1,
    marginHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    fontSize: 22,
    color: Colors.primary,
    fontWeight: "bold",
  },
  placeholder: {
    fontSize: 16,
    color: Colors.dark,
    fontWeight: "300",
    marginVertical: 5,
  },
  borderBottom: {
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
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
