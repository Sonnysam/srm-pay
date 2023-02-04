import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import Colors from "./Colors";
import { AuthAction } from "../store/actions/AuthAction";

export default function Pick() {
  const dispatch = useDispatch();
  const { profilePhoto } = useSelector((state) => state.AuthReducer);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      dispatch({
        type: AuthAction.USERPROFILE,
        payload: { type: "profilePhoto", value: result.assets[0].uri },
      });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.btn}>
        <Text style={styles.add}>
          {" "}
          <FontAwesome
            name="file-photo-o"
            size={18}
            color={Colors.primary}
          />{" "}
           Upload photo
        </Text>
      </TouchableOpacity>
      <View style={styles.photo}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  btn: {
    width: "50%",
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 15,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  add: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
