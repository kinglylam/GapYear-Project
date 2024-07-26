import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Svg, { Path } from "react-native-svg";

import { Dimensions } from "react-native";
import ScreenImg from "../../assets/images/Onboarding2.png";

const { width, height } = Dimensions.get("window");

const CurvedShape = ({ color }) => {
  return (
    <View style={styles.container}>
      <Svg
        height={height / 1.2}
        width={width}
        viewBox={`0 0 ${width} ${height / 2} `}
        style={styles.svg}
      >
        <Path
          fill={color}
          d={`M0,${height / 3}
           C${width / 4},${height / 2.5} ${width / 2.5},${
            height / 5
          } ${width},${height / 4}
           L${width},${height}
           L0,${height}
           Z`}
        />
      </Svg>
    </View>
  );
};

const Screen2 = () => {
  return (
    <ImageBackground source={ScreenImg} style={styles.imageBackground}>
      <CurvedShape color="white" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Confidence through reading and writing</Text>
        <Text style={styles.subtitle}>
          Mastering words, mastering life. Learn with purpose.
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
    fontSize: 38,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 27,
    color: "#222222",
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

export default Screen2;
