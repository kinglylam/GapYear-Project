/** @format */

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { RightArrowIcon, SettingIcon } from "../assets/icons";

const NotificationList = ({ text, onPress, icon }) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={styles.container}>
        <View style={styles.left}>
          <View>{icon}</View>
          <Text style={styles.right}>{text}</Text>
        </View>
        <SettingIcon />
        <RightArrowIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    paddingVertical: 5,
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    gap: 10,
  },
  right: {
    color: "#3e238b",
    fontWeight: "500",
    fontSize: 17,
  },
});

export default NotificationList;
