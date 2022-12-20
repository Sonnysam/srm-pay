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
  KeyboardAvoidingView,
  Linking,
  Platform,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { CompAction } from "../store/actions/CompAction";
import { auth, db } from "../firebase/firebase";

export default function Complaint({ navigation }) {
  const dispatch = useDispatch();
  const { complaint } = useSelector((state) => state.CompReducer);
  const { userInfo, uid } = useSelector((state) => state.AuthReducer);

  const makePhoneCall = () => {
    if (Platform.OS === "android") {
      Linking.openURL("tel: 0594602088");
    } else {
      Linking.openURL("telprompt: 0594602088");
    }
  };

  const SendComplaint = () => {
    if (uid !== undefined) {
      db.collection("complaints")
        .add({
          complaint: complaint,
          email: userInfo.Email,
          phoneNo: userInfo.PhoneNo,
          uid: userInfo.Uid,
          UserName: userInfo.UserName,
          date: new Date().toUTCString(),
          userType: userInfo.UserType,
        })
        .then(() => {
          alert("Complaint sent successfully 🚀");
          navigation.goBack("Home");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        Vertical
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.bottom}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/complaint.png")}
            style={styles.complaintImage}
            resizeMode="cover"
          />
        </View>
        <KeyboardAvoidingView
          style={styles.complaintBox}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Type complaint message..."
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
              onChangeText={(e) =>
                dispatch({
                  type: CompAction.GET_COMPLAINTS,
                  payload: e,
                })
              }
              value={complaint}
            />
          </View>
          <TouchableOpacity
            onPress={SendComplaint}
            style={styles.sendContainer}
          >
            <View>
              <Text style={styles.send}>Send message </Text>
            </View>
            <FontAwesome name="paper-plane" size={20} color="white" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>

      <TouchableOpacity
        style={styles.callContainer}
        onPress={() => makePhoneCall()}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Feather name="phone-call" size={18} color="white" />
        </View>
        <Text
          style={{
            color: Colors.white,
            fontSize: 20,
            marginHorizontal: 7,
            fontWeight: "500",
          }}
        >
          Call
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 10,
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
  bottom: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  imageContainer: {
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  complaintImage: {
    height: 200,
    width: 200,
    marginBottom: 25,
  },
  textAreaContainer: {
    borderColor: Colors.primary,
    borderWidth: 1,
    padding: 5,
    borderRadius: 8,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    textAlignVertical: "top",
  },
  sendContainer: {
    width: "100%",
    height: 55,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderTopWidth: 1,
    marginTop: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 17,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  callContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.primary,
    position: "absolute",
    bottom: 20,
    right: 5,
    margin: 15,
    padding: 12,
    borderRadius: 33.33,
  },
  send: {
    color: Colors.white,
  },
  or: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
});
