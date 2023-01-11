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
import { Feather } from "@expo/vector-icons";

export default function Calculate({ navigation }) {
  const dispatch = useDispatch();
  const { userInfo, uid } = useSelector((state) => state.AuthReducer);
  const [amount, setAmount] = useState("");
  const [percentage, setPercentage] = useState("");

  const CalculateTithe = () => {
    const percentage = amount / 10;
    setPercentage(percentage.toFixed(2));
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.hello}
        onPress={() => navigation.push("Home")}
      >
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity> */}

      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/calculate.png")}
          style={{ width: 230, height: 230 }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>Not sure about the amount</Text>
          <Text style={styles.bottomText}>of tithe to pay?</Text>
        </View>
        <ScrollView style={styles.formContainer}>
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <TextInput
                style={styles.input}
                placeholder="Enter income"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => setAmount(text)}
                value={amount}
                keyboardType="numeric"
              />
            </View>
            <TouchableOpacity
              style={styles.loginGroup}
              onPress={CalculateTithe}
            >
              <Text style={styles.button}>Calculate Tithe</Text>
            </TouchableOpacity>
            {percentage ? (
              <View style={{ flexDirection: "row" }}>
                <Text style={[styles.bottomText2, { marginRight: 4 }]}>
                  Hello {userInfo?.UserName}, your tithe is
                </Text>
                <Text style={styles.bottomText3}>GH₵{percentage}</Text>
              </View>
            ) : null}
            <TouchableOpacity
              style={styles.payGroup}
              onPress={() => navigation.push("Tithe", { percentage })}
            >
              <Text style={styles.pay}>Proceed to Payment</Text>
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
  bottomContainer: {
    flex: 1,
    paddingTop: 10,
    width: "100%",
    backgroundColor: Colors.primary,
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
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
  bottomText3: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "700",
    color: Colors.link,
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
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: Colors.dark,
    fontSize: 16,
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
  payGroup: {
    backgroundColor: Colors.white,
    width: "80%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 7,
    padding: 10,
  },
  pay: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
  },
});
