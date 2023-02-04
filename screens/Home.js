import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import Needhelp from "../constants/Needhelp";

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.AuthReducer);
  // const [randomPhoto, setRandomPhoto] = useState(null);

  // useEffect(() => {
  //   console.log(userInfo);
  // }, []);

  // const img = userInfo?.profilePhoto;

  const images = [
    require("../assets/cover.jpeg"),
    require("../assets/2.jpg"),
    require("../assets/3.jpg"),
    require("../assets/4.png"),
    require("../assets/5.jpeg"),
    require("../assets/6.jpeg"),
    require("../assets/7.jpg"),
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  // useeffect to make images change after 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      const randomImage = images[randomIndex];
      setRandomPhoto(randomImage);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.top, styles.bg]}></View>
      <View style={styles.hello}>
        <Text style={styles.name}>Hello, </Text>
        <Text style={[styles.name, { color: Colors.primary }]}>
          {userInfo?.UserName}
        </Text>
          {/* <Text style={styles.hello}>
            {userInfo?.UserName
              ? "Hello, " + userInfo?.UserName
              : "Hello friend"}
          </Text> */}
      </View>
      <Text style={styles.helloSub}>Have you paid your tithe?</Text>
      <View style={styles.headerImage}>
        {userInfo?.profilePhoto ? (
          <Image
            style={styles.image}
            source={{ uri: userInfo?.profilePhoto, width: 200, height: 200 }}
          />
        ) : (
          <Image style={styles.image} source={require("../assets/me.png")} />
        )}
      </View>

      {/* Bottom Section */}
      {/* <Slider /> */}
      <View style={styles.bottomSection}>
        <View style={styles.bottomImage}>
          <Image
            style={styles.carousel}
            // source={require("../assets/cover.jpeg")}
            source={randomImage}
          />
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardItems}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.push("Calculate")}
            >
              <Image
                style={styles.cardBackground}
                source={require("../assets/cal.png")}
              />
              <Text style={styles.cardText}>Calculate Tithe</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.push("PaySplash")}
            >
              <Image
                style={styles.cardBackground}
                source={require("../assets/tithe.jpg")}
              />
              <Text style={styles.cardText}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Need Help Component */}
      <Needhelp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  bg: {
    width: "100%",
  },
  hello: {
    flexDirection: "row",
    position: "absolute",
    marginHorizontal: 20,
    marginTop: "12%",
    color: Colors.dark,
    maxWidth: "100%",
    flexWrap: "wrap",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.dark,
  },
  helloSub: {
    fontSize: 14,
    fontWeight: "400",
    position: "absolute",
    marginHorizontal: 20,
    marginTop: "20%",
    color: Colors.dark,
  },
  top: {
    minHeight: "15%",
  },
  headerImage: {
    position: "absolute",
    marginTop: "8%",
    marginHorizontal: 20,
    right: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  bottomSection: {
    flex: 1,
    marginHorizontal: 8,
  },
  bottomImage: {
    marginHorizontal: 8,
    marginTop: "10%",
    marginBottom: "5%",
  },
  carousel: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    marginTop: 15,
    height: 130,
    width: "50%",
    alignItems: "center",
  },
  cardBackground: {
    height: 150,
    width: 165,
    borderRadius: 15,
  },
  cardItems: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardText: {
    color: Colors.white,
    marginTop: -30,
    fontSize: 20,
    right: 10,
    bottom: 15,
    fontWeight: "bold",
    fontSize: 20,
  },
});
