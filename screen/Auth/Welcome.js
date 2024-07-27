import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import Clerk from "../../assets/images/clerk.png";
import { Button } from "../../components/Button";
import { AppleIcon, GoogleIcon, MailIcon } from "../../assets/icons";
import { Ionicons } from "@expo/vector-icons";

const Icon = ({ name, size, color }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.conntainer}>
      <View style={styles.imgContainer}>
        <Image source={Clerk} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Ready to unlock your potential?</Text>
        <Text style={styles.text2}>
          Dive into interactive lessons and achieve your goals.
        </Text>
      </View>
      <View style={styles.btnCtn}>
        <Button
          backgroundColor={"#472B97"}
          icon={<MailIcon />}
          text="Continue with mail"
          onPress={() => navigation.navigate("SignIn")}
        />

        <Text style={styles.btnTxt}>or</Text>
      </View>
      <View style={styles.altCtn}>
        <View style={styles.alt}>
          <GoogleIcon />
          <Text style={styles.altText}>Continue with Google</Text>
        </View>
        <View style={styles.alt}>
          <AppleIcon />
          <Text style={styles.altText}>Continue with Apple</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conntainer: {
    marginHorizontal: 10,
  },
  imgContainer: {
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    alignItems: "center",
    marginVertical: 25,
    gap: 10,
  },
  text1: {
    fontSize: 20,
    fontWeight: "500",
  },
  text2: {
    fontWeight: "300",
    fontSize: 17,
    textAlign: "center",
    paddingHorizontal: 60,
  },
  btnCtn: {
    gap: 27,
  },
  btnTxt: {
    textAlign: "center",
    fontWeight: "700",
  },
  altCtn: {
    gap: 40,
    marginVertical: 20,
  },
  alt: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    flexDirection: "row",
  },
  altText: {
    textDecorationLine: "underline",
    fontSize: 17,
    fontWeight: "500",
  },
});

export default Welcome;
