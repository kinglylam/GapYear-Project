import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { RightArrowIcon } from "../assets/icons";

const ProfileList = ({ onPress, text, icon }) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={styles.container}
      >
        <View style={styles.leftSide}>
          <View>{icon}</View>
          <Text style={styles.leftSideText}>
            {text}
          </Text>
        </View>

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
  leftSide:{
    flexDirection: "row", gap: 10 
  },
  leftSideText:{
    color: "#3e238b", fontWeight: "500", fontSize: 17
  }
});

export default ProfileList;
