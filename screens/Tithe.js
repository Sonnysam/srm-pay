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
import React, { useEffect, useState, useRef } from "react";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { schedulePushNotification } from "../constants/Notification";
import { useRoute } from "@react-navigation/native";
// import { PUBLIC_KEYS, SECRET_KEYS } from "@env";

export default function Tithe({ navigation }) {
  const route = useRoute();
  const [amount, setAmount] = useState(0);
  const [phone, setPhone] = useState("");
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.hello}
        onPress={() => navigation.push("Calculate")}
      >
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity> */}

      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/transfer.png")}
          style={{ width: 230, height: 230 }}
        />
      </View>
      {route?.params?.percentage ? (
        <View style={styles.calculate}>
          <Text style={styles.calculateText}>
            Calculated Tithe amount is GH₵{route?.params?.percentage}
          </Text>
        </View>
      ) : null}

      <View style={styles.bottomContainer}>
        <ScrollView style={styles.formContainer}>
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <TextInput
                style={styles.input}
                placeholder="Enter amount"
                // placeholder=""
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => setAmount(text)}
                value={amount}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputGroup}>
              <TextInput
                style={styles.input}
                placeholder="Enter phone number"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => setPhone(text)}
                value={phone}
                keyboardType="numeric"
              />
            </View>
            <Paystack
              paystackKey="pk_live_72fb1b13d307ac51191e1b226a6ea06d2cf4be63"
              paystackSecretKey="sk_live_5d695698fc72c7836f2c83fd9b763485ed44603b"
              billingEmail="samuelagbenyo067@gmail.com"
              amount={amount}
              billingName="Samuel Agbenyo"
              billingMobile={phone}
              currency="GHS"
              channels={["card", "bank", "ussd", "mobile_money"]}
              onCancel={(e) => {
                console.log(e);
              }}
              onSuccess={(res) => {
                console.log(res);
                schedulePushNotification();
                navigation.push("Home");
              }}
              autoStart={false}
              ref={paystackWebViewRef}
            />
            <TouchableOpacity
              style={styles.loginGroup}
              onPress={() => paystackWebViewRef.current.startTransaction()}
            >
              <Text style={styles.button}>Pay Tithe</Text>
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
  },
  form: {
    flex: 1,
    marginTop: 10,
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
    backgroundColor: Colors.primary,
    width: "80%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
  },
  payGroup: {
    backgroundColor: Colors.white,
    width: "50%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 5,
    padding: 10,
  },
  pay: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
  },
  calculate: {
    // width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  calculateText: {
    fontSize: 18,
    fontWeight: "400",
    color: Colors.primary,
  },
});
