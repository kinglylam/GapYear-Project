/** @format */

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  styles,
  image,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import { RightArrowIcon, SettingIcon } from "../../assets/icons";
import NotificationList from "../../components/NotificationList";
const NotificationMessage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header headerName={"Notification Settings"} />
      <ScrollView>
        <NotificationList
          text={"Notification settings"}
          onPress={() => {
            navigation.navigate("ProfileStack", {
              screen: "notification",
            });
          }}
          icon={<RightArrowIcon />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationMessage;
