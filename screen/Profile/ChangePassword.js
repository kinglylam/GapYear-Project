import React from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput } from "react-native";
import Header from "../../components/Header";
// import { Lock } from "../../assets/icons";

const ChangePassword = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerName={"Change Password"}
        onPress={() => navigation.goBack()}
      />

      <Text>
        Tips: Brief tips on creating a strong password (e.g., use a mix of
        letters, numbers and symbols.)
      </Text>
      <Text style={styles.textStyle}>Current Password</Text>
      <View>
        {/* <Lock /> */}
        <TextInput style={greenInput} placeholder="Current Password" />
      </View>
      <Text style={styles.textStyle}>New Password</Text>
      <View>
        {/* <Lock /> */}
        <TextInput style={redInput} placeholder="New Password" />
      </View>
      <Text style={styles.textStyle}>Confirm New Password</Text>
      <View>
        {/* <Lock /> */}
        <TextInput style={greenInput} placeholder="Confim New Password" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  textStyle: {
    fontWeight: "700",
    fontSize: 25,
  },
  redInput: {
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "ed1212",
  },
  greenInput: {
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "15b231",
  },
});

export default ChangePassword;
