import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import { useState } from "react";
import tw from "twrnc";
import Colors from "../constants/Colors";

export default function AdminLogin({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (email === "admin@admin.com" && password === "123456") {
      alert("Welcome Admin!");
      navigation.push("Admin");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require("../assets/logol.png")}
          style={{ width: 150, height: 70 }}
        />
      </View>
      <View style={styles.loginCont}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#000"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#000"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={[styles.signup, tw`flex justify-center items-center`]}
          onPress={handleSignIn}
        >
          <Text style={tw`text-white text-xl`}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: "center",
    justifyContent: "center",
  },
  loginCont: {
    width: "80%",
    marginTop: 30,
  },
  logo: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -50,
  },
  input: {
    width: "100%",
    height: 55,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    marginTop: 12,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 17,
    color: "#000",
    backgroundColor: Colors.white,
  },
  signup: {
    width: "100%",
    height: 55,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    marginTop: 12,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 17,
    backgroundColor: Colors.primary,
  },
});
