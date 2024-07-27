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
    <SafeAreaView style={styles.container}>
      <Header headerName={"Settings"} />

      <View>
        <View style={styles.dashBoard}>
          <Image source={ProfileImg} style={styles.profileImg} />
          <View style={styles.texts}>
            <Text style={styles.name}>Gabriel Oluwabukunmi</Text>
            <Text style={styles.email}>gabrieloluwabunkunmi2020@gmail.com</Text>
          </View>
        </View>
        <TouchableOpacity>
          <EditIcon />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <ProfileList
          text={"Personal Information"}
          onPress={() => {
            navigation.navigate("ProfileStack", {
              screen: "personal-info",
            });
          }}
          icon={<ProfileCircleIcon />}
        />
        <ProfileList
          text={"Notification Settings"}
          onPress={() => {}}
          icon={<ProfileCircleIcon />}
        />
        <ProfileList
          text={"Security Settings"}
          onPress={() => {
            navigation.navigate("ProfileStack", {
              screen: "security-setting",
            });
          }}
          icon={<ProfileCircleIcon />}
        />
      </ScrollView>
    </SafeAreaView>
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
