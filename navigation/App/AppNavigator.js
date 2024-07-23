import React from "react";

import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import {
  HomeStack,
  GamesStack,
  ProfileStack,
  PlayStack,
  TabStack,
  LibraryStack,
} from "./Navigators";

// import useStoreProfile from '../../store/useProfile';
// import useSaveCredentials from '../../store/useStore';

const { Navigator, Screen, Group } = createStackNavigator();

export default function AppNavigator() {
  //   const { status } = useSaveCredentials();
  //   if (status?.isVendorOnboard) {
  //     console.log(status);
  //   }
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* {!status?.isVendorOnboard && (
        <>
          <Group>
            <Screen
              name="OnboardingStack"
              component={OnboardingStack}
            />
          </Group>
        </>
      )} */}

      <Group>
        <Screen name="TabStack" component={TabStack} />
        <Screen name="HomeStack" component={HomeStack} />

        <Screen name="ProfileStack" component={ProfileStack} />
        <Screen name="LibraryStack" component={LibraryStack} />
        <Screen name="PlayStack" component={PlayStack} />
        <Screen name="GamesStack" component={GamesStack} />
      </Group>
    </Navigator>
  );
}
