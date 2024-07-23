import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const { Navigator, Screen } = createStackNavigator();

export default function GamesNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    ></Navigator>
  );
}
