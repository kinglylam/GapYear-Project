/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dimensions, PixelRatio, Platform, StatusBar } from "react-native";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export * from "./const";
export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const SCREEN_WEIGHT = Dimensions.get("window").width;

// export function RF(size: number, scale: number = Platform.OS === 'android' ? 2 : 4) {
//   let factor = PixelRatio.get();
//   factor > 2.2 ? (factor = 2) : null;
//   const font = ((factor * SCREEN_WEIGHT) / 1000) * size;
//   return font + 6;
// }

export function RF(size, scale = Platform.OS === "android" ? 2 : 4) {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let font = ((factor * SCREEN_WEIGHT) / 1000) * size;
  return font + 6;
}

export const getWidthPercentage = (value, creativeWidth = SCREEN_WEIGHT) =>
  (value / creativeWidth) * 100;

export const getHeightPercentage = (value, creativeHeight = SCREEN_WEIGHT) =>
  (value / creativeHeight) * 100;

export function HDP(size) {
  return PixelRatio.roundToNearestPixel(size);
}

export function MH(height) {
  return (height / 100) * SCREEN_HEIGHT;
}

export function WP(size) {
  return widthPercentageToDP(size);
}

export function HP(size) {
  return heightPercentageToDP(size);
}

// new
export const RW = (value) => {
  return widthPercentageToDP(getWidthPercentage(value));
};

export const RH = (value) => {
  return heightPercentageToDP(getHeightPercentage(value));
};
