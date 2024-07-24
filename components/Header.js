import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ headerName, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={onPress}
        style={styles.iconConatainer}
      >
        <Ionicons name="arrow-back" size={25} color="black" />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{headerName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconConatainer: {
    width: "7%",
  },
  textContainer: {
    width: "90%",
    alignItems: "center",
  },
  textStyle: {
    color: "black",
    fontWeight: "500",
    fontSize: 20,
  },
});

export default Header;
