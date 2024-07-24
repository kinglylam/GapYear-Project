import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import UserInfo from "../../../screen/Profile/UserInfo";

const { Navigator, Screen } = createStackNavigator();

export default function ProfileNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="personal-info" component={UserInfo} />
    </Navigator>
  );
}
