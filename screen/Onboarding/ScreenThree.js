import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Svg, { Path } from "react-native-svg";

import { Dimensions } from "react-native";
import ScreenImg from "../../assets/images/Onboarding3.png";

const { width, height } = Dimensions.get("window");
const CurvedShape = ({ color }) => {
  return (
    <View style={styles.container}>
      <Svg
        width={width}
        height={height / 1.2}
        viewBox={`0 0 ${width} ${height / 2} `}
        style={styles.svg}
      >
        <Path
          fill={color}
          d={`M0,${height / 6},
           C${width / 10},${height / 6.5} ${width / 5},${
            height / 5
          }  ${width},${height / 2.5}
           L${width},${height}
           L0,${height}
           Z`}
        />
      </Svg>
    </View>
  );
};

const Screen3 = () => {
  return (
    <ImageBackground source={ScreenImg} style={styles.imageBackground}>
      <CurvedShape color={"white"} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Beyond Good Grades</Text>
        <Text style={styles.subtitle}>
          Express yourself and understand the world.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textContainer: {
    marginVertical: 15,
    marginBottom: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#E77B31",

    marginBottom: 10,
  },
  subtitle: {
    fontSize: 27,
    color: "#E77B31",
  },
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "50%",
  },
  svg: {
    position: "absolute",
    bottom: 0,
  },
});

export default Screen3;
