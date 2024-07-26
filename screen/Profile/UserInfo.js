/** @format */

import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Header from "../../components/Header";

const UserInfo = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerName={"Personal Information"}
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default UserInfo;
