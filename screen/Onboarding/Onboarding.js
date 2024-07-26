// OnboardingCarousel.js
import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import Screen1 from "./ScreenOne";
import Screen2 from "./ScreenTwo";
import Screen3 from "./ScreenThree";
import { Ionicons } from "@expo/vector-icons";

const { width: screenWidth } = Dimensions.get("window");

const screens = [
  { component: Screen1, buttonColor: "#472B97", indicatorColor: "#472B97" },
  { component: Screen2, buttonColor: "#222222", indicatorColor: "#222222" },
  { component: Screen3, buttonColor: "#E77B31", indicatorColor: "#E77B31" },
];

const OnboardingCarousel = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const onScroll = (event) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / screenWidth);
    if (index >= 0 && index < screens.length) {
      setActiveIndex(index);
    }
  };

  const nextSlide = () => {
    if (activeIndex < screens.length - 1) {
      scrollViewRef.current.scrollTo({
        x: (activeIndex + 1) * screenWidth,
        animated: true,
      });
    } else {
      navigation.navigate("SignIn");
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      scrollViewRef.current.scrollTo({
        x: (activeIndex - 1) * screenWidth,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {screens.map((screen, index) => {
          const Component = screen.component;
          return (
            <View key={index} style={{ width: screenWidth }}>
              <Component />
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.navigationWrapper}>
        {activeIndex > 0 && (
          <TouchableOpacity
            onPress={prevSlide}
            style={[
              styles.navButton,
              { backgroundColor: screens[activeIndex].buttonColor },
            ]}
          >
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
        )}
        <View style={styles.indicatorsContainer}>
          {screens.map((_, i) => (
            <View
              key={i}
              style={[
                styles.indicator,
                {
                  backgroundColor:
                    i === activeIndex
                      ? screens[activeIndex].indicatorColor
                      : "gray",
                  width: i === activeIndex ? 38 : 15,
                },
              ]}
            />
          ))}
        </View>
        <TouchableOpacity
          onPress={nextSlide}
          style={[
            styles.navButton,
            {
              backgroundColor: screens[activeIndex].buttonColor,
              marginLeft: activeIndex > 0 ? 10 : "auto",
            },
          ]}
        >
          {/* <Text style={styles.navButtonText}>
            {activeIndex === screens.length - 1 ? "Get Started" : "Next"}
          </Text> */}
          <Ionicons name="arrow-forward" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  indicatorsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  indicator: {
    height: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  navigationWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  navButton: {
    padding: 10,
    borderRadius: 50,
  },
  navButtonText: {
    fontSize: 18,
    color: "white",
  },
});

export default OnboardingCarousel;
