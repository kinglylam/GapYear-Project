import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";
import ProfileImg from "../../assets/images/profileImg.png";
import { EditIcon, ProfileCircleIcon } from "../../assets/icons";
import ProfileList from "../../components/ProfileList";

const Profile = ({ navigation }) => {
  return (
    <View>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  dashBoard: {
    height: 130,
    backgroundColor: "#2d156f",
    marginVertical: 20,
    paddingTop: 15,
    paddingHorizontal: 5,
    flexDirection: "row",
    gap: 7,
  },
  profileImg: {
    height: 90,
    width: 90,
    borderRadius: "50%",
    borderWidth: 2,
    borderColor: "white",
  },
  texts: {
    alignItems: "center",
    marginTop: 15,
    gap: 8,
  },
  name: {
    color: "white",
    fontWeight: "700",
    fontSize: 17,
  },
  email: {
    color: "white",
    fontWeight: "500",
  },
});

export default Profile;
