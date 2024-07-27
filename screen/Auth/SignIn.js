import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Input from "../../components/Input";
import { AppleIcon, AttachCircleIcon, GoogleIcon } from "../../assets/icons";
import { Button } from "../../components/Button";

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.txt1}>Hello there! 🤭</Text>
        <Text style={styles.txt2}>
          A step away from an amzing learning experience
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Email Address"
          RightComponent={<AttachCircleIcon />}
        />
        <Input
          placeholder="Password"
          RightComponent={<AttachCircleIcon />}
          secureTextEntry
        />

        <Text style={{ textAlign: "right", color: "#472B97", fontSize: 16 }}>
          Forgot password?
        </Text>
      </View>
      <View style={styles.btnCtn}>
        <Button
          backgroundColor={"#472B97"}
          text="Log In"
          onPress={() => navigation.navigate("SignIn")}
        />

        <Text style={styles.btnTxt}>or continue with</Text>
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 20,
          gap: 3,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500" }}>Not a member?</Text>
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#472B97" }}>
          Register now
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  textContainer: {
    marginVertical: 40,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  txt1: {
    fontWeight: "600",
    fontSize: 21,
  },
  txt2: {
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  inputContainer: {
    gap: 20,
  },
  btnCtn: {
    gap: 27,
    marginVertical: 20,
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

export default SignIn;
