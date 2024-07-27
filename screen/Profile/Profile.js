import React, {useState}from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import Header from "../../components/Header";
import ProfileImg from "../../assets/images/profileImg.png";
import { AboutIcon, EditIcon, FeedIcon, LogoutIcon, MoonIcon, NotificationIcon, ProfileCircleIcon, RateIcon, SecurityIcon } from "../../assets/icons";
import ProfileList from "../../components/ProfileList";

import { Colors } from "react-native/Libraries/NewAppScreen";

const Profile = ({ navigation,}) => {
  const handleSubmit = () => {
    console.log("successful", );
    navigation.navigate("Home")
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header headerName={"Settings"} />

      <View>
        <View style={styles.dashBoard}>
          <Image source={ProfileImg} style={styles.ProfileImg} />
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
          icon={<NotificationIcon/>}
        />
        <ProfileList
          text={"Security Settings"}
          onPress={() => {}}
          icon={<SecurityIcon/>}
        />
        <ProfileList
          text={"Theme/Display Option"}
          onPress={() => {}}
          icon={<MoonIcon/>}
        />
         <ProfileList
          text={"Support and Feedback"}
          onPress={() => {}}
          icon={<FeedIcon/>}
        />
         <ProfileList
          text={"Rate the App"}
          onPress={() => {}}
          icon={<RateIcon/>}
        />
        <ProfileList
          text={"About Us"}
          onPress={() => {}}
          icon={<AboutIcon/>}
        />
      </ScrollView>
      <Text style={styles.copy}>All Right Reserved Copyright 2024</Text>
      <TouchableOpacity
      style={styles.Button}
      activeOpacity={0.5}
      onPress={handleSubmit}
      >
<Text style={styles.textStyle}>Log Out</Text>
<TouchableOpacity style={styles.Icon}>
<LogoutIcon/>
</TouchableOpacity>
      </TouchableOpacity>
      
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
  ProfileImg: {
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
    width:"70%"
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
  copy:{
    marginTop:40,
    marginVertical:25,
    marginHorizontal:25,
    textAlign:"center",
    justifyContent:"center",
  },
  Button:{
height:50,
alignItems:"center",
justifyContent:"center",
backgroundColor:"#ED1212",
borderRadius:10,
marginHorizontal:10,

  },
  textStyle:{
color:"white",
fontSize:19,
fontWeight:30,
marginTop:30,
  },
  Icon:{
   marginBottom:30,
   justifyContent:"space-between"
  }
});

export default Profile;