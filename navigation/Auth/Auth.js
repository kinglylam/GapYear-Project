import React, { useContext } from "react";

import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import OnboardingCarousel from "../../screen/Onboarding/Onboarding";
import Profile from "../../screen/Profile/Profile";
import SignIn from "../../screen/Auth/SignIn";
import Welcome from "../../screen/Auth/Welcome";

const { Group, Navigator, Screen } = createStackNavigator();

export default function AuthNavigator() {
  const modalOptions = {
    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
  };
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
      }}
    >
      <Group>
        <Screen name="Onboarding" component={OnboardingCarousel} />
        <Screen name="SignIn" component={SignIn} />
        <Screen name="Welcome" component={Welcome} />
      </Group>
    </Navigator>
  );
}
