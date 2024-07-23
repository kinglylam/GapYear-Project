import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoadApp from "./core/LoadApp";
import { HomeActiveIcon } from "./assets/icons";
import DashBoard from "./screen/Home/DashBoard";

export default function App() {
  return (
    <View style={styles.container}>
      <LoadApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
