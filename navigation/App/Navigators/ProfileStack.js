import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import UserInfo from "../../../screen/Profile/UserInfo";
import Security from "../../../screen/Profile/SecuritySettings";

const { Navigator, Screen } = createStackNavigator();

export default function ProfileNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="personal-info" component={UserInfo} />
      <Screen name="security-setting" component={Security} />
    </Navigator>
  );
}
