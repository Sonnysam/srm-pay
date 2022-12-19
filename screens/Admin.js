import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  Linking,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Colors from "../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { db } from "../firebase/firebase";
import { CompAction } from "../store/actions/CompAction";

export default function Admin({ navigation }) {
  const dispatch = useDispatch();
  const { userInfo, uid } = useSelector((state) => state.AuthReducer);

  const [mapRegion, setMapRegion] = useState({
    latitude: 5.603717,
    longitude: -0.186964,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Oops permission to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
    // console.log(location.coords.latitude, location.coords.longitude);
  };

  function getComplaints() {
    db.collection("complaints")
      .where("uid", "==", uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dispatch({
            type: CompAction.GET_COMPLAINTS,
            payload: doc.data(),
          });
        });
      })
      .catch((error) => {
        alert("Error getting documents: ", error);
      });
  }

  useEffect(() => {
    userLocation();
    getComplaints();
  }, []);

  return (
    <>
      <View style={styles.main}>
        {/* Hero Section */}
        <View style={[styles.top, styles.bg]}></View>
        <View style={styles.hello}>
          <Text style={styles.name}>Hello, </Text>
          <Text style={[styles.name, { color: Colors.secondary }]}>Admin</Text>
        </View>
        <Text style={styles.helloSub}>How's it going today?</Text>
        <View style={styles.headerImage}>
          <Image style={styles.image} source={require("../assets/me.png")} />
        </View>
        {/*Mid Section  */}
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                navigation.push("UserComplaints");
              }}
            >
              <Text>
                <Octicons name="report" size={24} color="white" />
              </Text>
              <Text style={{ color: Colors.light }}>General Complaints</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.push("AllUsers")}
            >
              <Text>
                <FontAwesome name="users" size={24} color="white" />
              </Text>
              <Text style={{ color: Colors.light }}>All Users</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <TouchableOpacity
              style={styles.payGroup}
              onPress={() => navigation.replace("AdminLogin")}
            >
              <Text style={styles.pay}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Bottom (Map of Bin Location) */}
      <View style={styles.mainBottom}>
        <TouchableOpacity style={styles.location} onPress={userLocation}>
          <Text>
            <MaterialIcons name="my-location" size={24} color="white" />
          </Text>
        </TouchableOpacity>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={mapRegion}
            zoomEnabled={true}
            initialRegion={mapRegion}
            // followUserLocation={true}
            // showsMyLocationButton={true}
            mapType="mutedStandard"
          >
            <Marker coordinate={mapRegion} title="Server Location">
              <Image
                source={require("../assets/server.png")}
                style={{ width: 50, height: 50 }}
                resizeMode="contain"
              />
            </Marker>
          </MapView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  bg: {
    width: "100%",
  },
  hello: {
    flexDirection: "row",
    position: "absolute",
    marginHorizontal: 20,
    marginTop: "8%",
    color: Colors.dark,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white,
  },
  helloSub: {
    fontSize: 15,
    fontWeight: "300",
    fontWeight: "normal",
    position: "absolute",
    marginHorizontal: 20,
    marginTop: "15%",
    color: Colors.white,
  },
  top: {
    backgroundColor: Colors.primary,
    minHeight: "15%",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  headerImage: {
    position: "absolute",
    marginTop: "5%",
    marginHorizontal: 20,
    right: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  container: {
    marginHorizontal: 10,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  card: {
    marginTop: "10%",
    height: 100,
    width: "45%",
    elevation: 10,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  mapContainer: {
    borderTopColor: Colors.light,
    borderTopWidth: 1,
    elevation: 1,
    overflow: "hidden",
    borderRadius: 10,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  main: {
    flex: 1,
    height: 0.5,
  },
  mainBottom: {
    flex: 1,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: Colors.light,
  },
  location: {
    position: "absolute",
    zIndex: 50,

    bottom: 0,
    right: 0,
    margin: 20,
    backgroundColor: Colors.primary,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 10,
  },
  payGroup: {
    marginTop: "10%",
    backgroundColor: Colors.primary,
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    padding: 10,
  },
  pay: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
  },
});
