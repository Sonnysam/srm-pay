import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import Colors from "../constants/Colors";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { db } from "../firebase/firebase";
import { AuthAction } from "../store/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";

export default function AllUsers({ navigation }) {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.AuthReducer);

  function getAllUsers() {
    let Data = [];
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          Data.push(doc.data());
        });
        dispatch({
          type: AuthAction.GET_ALL_USERS,
          payload: Data,
        });
      })
      .catch((error) => {
        alert(error);
      });
  }
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <View style={styles.container}>
      <View style={[styles.top, styles.bg]}></View>
      <View style={styles.hello}>
        <Text style={styles.name}>Hello, </Text>
        <Text style={[styles.name, { color: Colors.secondary }]}>Admin</Text>
      </View>
      <Text style={styles.helloSub}>How's it going today?</Text>
      <View style={styles.headerImage}>
        <Image style={styles.image} source={require("../assets/me.png")} />
      </View>
      <View style={styles.form}>
        <View style={styles.get}>
          <TouchableOpacity style={styles.button} onPress={() => getAllUsers()}>
            <Text style={styles.buttonText}>Get Users</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottom}>
          <FlatList
            data={allUsers}
            ListEmptyComponent={
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 10,
                  marginTop: "50%",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  No users yet. Thank you!
                </Text>
              </View>
            }
            showsVerticalScrollIndicator={false}
            renderItem={(itemData) => (
              <View style={styles.bottom}>
                <View style={styles.cardContainer}>
                  <View style={styles.card}>
                    <View style={styles.iconContainer}>
                      <Feather
                        name="user"
                        size={24}
                        color="black"
                        style={styles.icon}
                      />
                    </View>
                    <View style={styles.cardText}>
                      <Text style={styles.des}>
                        Name: {itemData.item.UserName}
                      </Text>
                      <Text style={styles.des}>
                        Phone Number: {itemData.item.phoneNo}
                      </Text>
                      <Text style={styles.des}>
                        Email: {itemData.item.Email}
                      </Text>
                      <Text style={styles.des}>Uid : {itemData.item.Uid}</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    flex: 1,
  },
  form: {
    marginTop: "5%",
    marginHorizontal: 5,
  },
  get: {
    flexDirection: "row-reverse",
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  bottom: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
  },
  card: {
    marginTop: 15,
    height: 160,
    width: "100%",
    elevation: 10,
    backgroundColor: Colors.white,
    borderRadius: 12,
    flexDirection: "row",
    padding: 2,
    marginBottom: 10,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  icon: {
    backgroundColor: Colors.light,
    padding: 10,
    borderRadius: 33,
  },
  cardText: {
    justifyContent: "center",
    marginLeft: 10,
    width: "80%",
  },
  des: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.dark,
    marginVertical: 5,
  },
});
