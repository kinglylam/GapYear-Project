/** @format */

import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";

const UserNotification = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.notification}>
      <Header
        headerName={"Notifications "}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.lesson}>Upcoming lesson</Text>
        </View>
        <View style={styles.alarm}>
          <Text>Dont forget to take to Math class at 8AM</Text>
        </View>
        <View style={styles.practice}>
          <Text style={styles.title}>Practice Session</Text>
        </View>
        <View style={styles.vocal}>
          <Text>Practice your vocalbulary words at 2PM</Text>
        </View>
        <View style={styles.new}>
          <Text style={styles.title}>New Lesson Available</Text>
        </View>

        <View style={styles.rules}>
          <Text>Checkout the new rules of concord </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Content Updates</Text>
      </View>
      <View style={styles.topics}>
        <Text> New topics added in the maths session</Text>
      </View>
      <View style={styles.feature}>
        <Text style={styles.title}>New Features</Text>
      </View>
      <View style={styles.game}>
        <Text> Explore our new interactive quizzes and games</Text>
      </View>
      <View style={styles.bcontainer}>
        <TouchableOpacity
          style={styles.button1}
          activeOpacity={0.5}
          onPress={() => alert("Mark as Read")}>
          <Text style={styles.message}>Mark All as Read</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          activeOpacity={0.5}
          onPress={() => alert("Delete successful")}>
          <Text style={styles.deletetext}> Delete All </Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  notification: {
    marginHorizontal: 4,
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  lesson: {
    paddingTop: 30,
    color: "#472B97",
    fontWeight: "800",
    marginLeft: 15,
  },
  alarm: {
    fontSize: 10,
    color: "grey",
    marginLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    width: "70%",
    marginTop: 10,
  },
  title: {
    color: "#472B97",
  },
  practice: {
    fontWeight: "800",
    marginLeft: 15,
    marginTop: 15,
  },
  vocal: {
    marginLeft: 15,
    color: "grey",
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    width: "70%",
    fontWeight: 40,
    marginTop: 7,
  },
  new: {
    marginLeft: 15,
    color: "#472B97",
    fontWeight: "800",
    marginTop: 15,
  },
  rules: {
    marginLeft: 15,
    color: "grey",
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    width: "70%",
    marginTop: 7,
  },
  content: {
    marginLeft: 15,
    color: "#472B97",
    fontWeight: "800",
    marginTop: 15,
  },
  topics: {
    marginLeft: 15,
    color: "grey",
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    width: "70%",
    marginTop: 5,
  },
  feature: {
    marginLeft: 15,
    color: "#452B97",
    fontWeight: "800",
    marginTop: 15,
  },
  game: {
    marginLeft: 15,
    color: "grey",
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    width: "70%",
    marginTop: 5,
  },
  bcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button1: {
    backgroundColor: "#3E238B",
    marginTop: "8%",
    justifyContent: "center",
    width: 180,
    height: 40,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#3E238B",
    marginRight: 10,
  },

  message: {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
  },
  button2: {
    justifyContent: "center",
    width: 130,
    height: 40,
    marginLeft: 40,
    borderRadius: 5,
    borderColor: "red",
    borderWidth: 2,
    marginTop: "7%",
  },
  deletetext: {
    color: "red",
    fontWeight: "700",
    textAlign: "center",
  },
});
export default UserNotification;
