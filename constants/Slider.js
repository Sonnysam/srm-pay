import { StyleSheet, View, Dimensions, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import Colors from "./Colors";
// import { Images } from "./Images";

const images = [
  "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
  "https://images.unsplash.com/photo-1627363269085-9c8128695a68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1447619297994-b829cc1ab44a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function Slider() {
  const [active, setActive] = useState(0);

  const onchange = (nativeEvent) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          style={styles.wrap}
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
        >
          {images.map((e, index) => (
            <Image
              key={e}
              source={{ uri: e }}
              style={styles.wrap}
              resizeMode="stretch"
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <View
              key={e}
              style={[
                styles.dot,
                {
                  backgroundColor: index === active ? Colors.secondary : "#fff",
                },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
    // marginHorizontal: WIDTH * 0.05,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT / 3,
  },
  wrapDot: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    marginBottom: 10,
  },
});
