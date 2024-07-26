/** @format */

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import UserInfo from "../../../screen/Profile/UserInfo";
import UserNotification from "../../../screen/Profile/UserNotification";
const { Navigator, Screen } = createStackNavigator();
export default function ProfileNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="personal-info" component={UserInfo} />
      <Screen name="notification" component={UserNotification} />
    </Navigator>
  );
}
