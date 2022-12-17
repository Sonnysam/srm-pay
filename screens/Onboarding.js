import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

import Onboarding from "react-native-onboarding-swiper";

const Done = ({ ...props }) => (
  <TouchableOpacity {...props} style={{ marginHorizontal: 20 }}>
    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Done</Text>
  </TouchableOpacity>
);

export default function OnBoarding({ navigation }) {
  return (
    <Onboarding
      DoneButtonComponent={Done}
      onDone={() => navigation.push("Welcome")}
      onSkip={() => navigation.push("Welcome")}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/login.png")}
              style={{ width: 220, height: 245 }}
            />
          ),
          title: "Create a free account",
          subtitle: "New here, start by signing up",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/calculate.png")}
              style={{ width: 220, height: 245 }}
            />
          ),
          title: "Calculate tithe in App",
          subtitle: "Not sure about tithe?",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/online-pay.png")}
              style={{ width: 305, height: 245 }}
            />
          ),
          title: "Pay tithes & offerings online",
          subtitle: "Pay with ease with few clicks",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/support.png")}
              style={{ width: 220, height: 245 }}
            />
          ),
          title: "Need help?",
          subtitle: "Contact us to find the help you deserve.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/accept.png")}
              style={{ width: 320, height: 230 }}
            />
          ),
          title: "Secure payment gateway",
          subtitle: "Fast, secure, & easy online payment processing",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({});
