import { StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PhoneInput from "react-native-phone-number-input";
import { AuthAction } from "../store/actions/AuthAction";

export default function PhoneNumber() {
  const dispatch = useDispatch();
  // const { phoneNo } = useSelector((state) => state.AuthReducer);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <PhoneInput
        // defaultValue={phoneNo}
        defaultCode="GH"
        // onChangeFormattedText={(e) =>
        //   dispatch({
        //     type: AuthAction.USERPROFILE,
        //     payload: { type: "phoneNo", value: e },
        //   })
        // }
        withDarkTheme
        withShadow
        // autoFocus
        containerStyle={{ borderRadius: 8, width: "100%" }}
        textContainerStyle={{ borderRadius: 8 }}
        textInputStyle={{ fontSize: 15 }}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
