import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";

const Security = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerName={"Security Setting"}
        onPress={() => navigation.goBack()}
        style={styles.headerName}
      />
      <View style={styles.passWord}>
        <Text style={styles.password}>1. Password Management</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.changePassword}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 20,
    marginLeft: 25,
  },
  passWord: {
    marginTop: 30,
  },
  password: {
    fontWeight: "400",
    fontSize: 17,
  },
  button: {
    backgroundColor: "#472b97",
    width: 160,
    height: 40,
    alignContent: "center",
    borderRadius: 10,
  },
  changePassword: {
    backgroundColor: "472b97",

    marginTop: 20,
    color: "white",
  },
});

export default Security;
