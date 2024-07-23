import React, { useContext, useEffect } from "react";
import { Alert, StatusBar } from "react-native";
import {
  LinkingOptions,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "@use-expo/font";
import * as Updates from "expo-updates";

import { AuthNavigator, AppNavigator } from "../navigation";

import * as SplashScreen from "expo-splash-screen";

import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

const theme = {
  //   colors: {
  //     background: pallets.white,
  //     border: pallets.border,
  //     card: pallets.bottombg,
  //     notification: pallets.red,
  //     primary: pallets.primaryBlue,
  //     text: pallets.text,
  //   },
  dark: false,
};

export default function LoadApp() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);
  }, []);

  useEffect(() => {
    if (!__DEV__) {
      Updates.checkForUpdateAsync()
        .then(async (update) => {
          if (update.isAvailable) {
            await Updates.fetchUpdateAsync();
            await Updates.reloadAsync();
          }
        })
        .catch(() => null);
    }
  }, []);

  //   if (!fontsLoaded) {
  //     return null;
  //   }

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
}
