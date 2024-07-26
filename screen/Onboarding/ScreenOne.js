import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Dimensions } from "react-native";
import ScreenImg from "../../assets/images/Onboarding1.png";

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
          d={`M0,${height / 2.5} 
           C${width / 3},${height / 2.5} ${width / 1.3},${
            height / 4.5
          } ${width},${height / 4.8} 
           L${width},${height} 
           L0,${height} 
           Z`}
          //  d={`M0,${height / 3}
          //  C${width / 4},${height / 2.5} ${width / 2.5},${height / 5} ${width},${height / 4}
          //  L${width},${height / 2}
          //  L0,${height / 2}
          //  Z`}
        />
      </Svg>
    </View>
  );
};

const Screen1 = () => {
  return (
    <ImageBackground source={ScreenImg} style={styles.imageBackground}>
      <CurvedShape color="white" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Empower Your Learning Journey</Text>
        <Text style={styles.subtitle}>
          Unlock your potential and prepare for success
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
    fontWeight: "700",
    color: "#472B97",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 27,
    color: "#472B97",
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

export default Screen1;
