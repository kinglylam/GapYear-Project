import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import { RF } from "../../../helpers";

// import Animated, {
//   useSharedValue,
// } from 'react-native-reanimated';
import {
  GameIcon,
  HomeActiveIcon,
  HomeIcon,
  LibraryIcon,
  ProfileActiveIcon,
  ProfileIcon,
} from "../../../assets/icons";
import DashBoard from "../../../screen/Home/DashBoard";
import Play from "../../../screen/Play/Play";
import Games from "../../../screen/Games/Games";
import Library from "../../../screen/Library/Library";
import Profile from "../../../screen/Profile/Profile";

const { Navigator, Screen } = createBottomTabNavigator();
const Width = Dimensions.get("screen").width;
export default function TabNavigator() {
  return (
    <Navigator
      // tabBar={props => <MyTabBar {...props} />}

      screenOptions={({ route }) => ({
        tabBarButton: (props) => (
          <TouchableOpacity onPress={() => console.log("klk")} {...props} />
        ),

        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          flexDirection: "row",
          justifyContent: "space-between",
          width: Width,
          alignSelf: "center",
          height: Platform.OS === "android" ? 88 : 99,
          paddingHorizontal: 10,
        },
      })}
    >
      <Screen
        name="Home"
        component={DashBoard}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused ? (
                <>
                  <View
                    style={[
                      styles.active,
                      {
                        // width: widths,
                        // backgroundColor: 'violet',
                      },
                    ]}
                  >
                    <HomeActiveIcon />
                    <Text
                      style={[styles.activeText, { marginStart: 4 }]}
                      fontWeight="750"
                    >
                      Home
                    </Text>
                  </View>
                  {/* <View style={[styles.active]}>
                    <HomeActiveIcon />
                    <Text style={styles.activeText} fontWeight='750'>Home</Text>
                  </View> */}
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <HomeIcon />
                    <Text style={styles.inactiveText}>Home</Text>
                  </View>
                </>
              )}
            </>
          ),
        }}
      />

      <Screen
        name="Courses"
        component={Play}
        options={{
          tabBarLabel: "Courses",
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused ? (
                <>
                  <View style={styles.active}>
                    <LibraryIcon />
                    <Text style={styles.activeText} fontWeight="750">
                      Courses
                    </Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <LibraryIcon />
                    <Text style={styles.inactiveText}>Courses</Text>
                  </View>
                </>
              )}
            </>
          ),
        }}
      />
      <Screen
        name="Games"
        component={Games}
        options={{
          tabBarLabel: "Games",
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused ? (
                <>
                  <View style={styles.active}>
                    <GameIcon />
                    <Text style={styles.activeText} fontWeight="750">
                      Games
                    </Text>
                  </View>
                  {/* <TouchableOpacity
                    onPress={() => {
                      console.log('jhj')
                    }}
                    style={styles.active}>
                    <CommunityActiveIcon />
                    <Text style={styles.activeText} fontWeight='750'>Connect</Text>

                  </TouchableOpacity> */}
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <GameIcon />
                    <Text style={styles.inactiveText}>Games</Text>
                  </View>
                </>
              )}
            </>
          ),
        }}
      />

      <Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: "Library",
          tabBarIcon: ({ color, focused, size }) => (
            <>
              {focused ? (
                <>
                  <View style={styles.active}>
                    <LibraryIcon />
                    <Text style={styles.activeText} fontWeight="750">
                      Library
                    </Text>
                  </View>
                  {/* <View style={[styles.active,]}>
                    <ShopActiveIcon />
                    <Text style={styles.activeText} fontWeight='750'>Shop</Text>

                  </View> */}
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <LibraryIcon />
                    <Text style={styles.inactiveText}>Library</Text>
                  </View>
                </>
              )}
            </>
          ),
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused, size }) => (
            <>
              {focused ? (
                <>
                  <View style={styles.active}>
                    <ProfileActiveIcon />
                    <Text style={styles.activeText} fontWeight="750">
                      Me
                    </Text>
                  </View>
                  {/* <View style={[styles.active,]}>
                    <ShopActiveIcon />
                    <Text style={styles.activeText} fontWeight='750'>Shop</Text>

                  </View> */}
                </>
              ) : (
                <>
                  <View style={styles.inactive}>
                    <ProfileIcon />
                    <Text style={styles.inactiveText}>Me</Text>
                  </View>
                </>
              )}
            </>
          ),
        }}
      />

      {/* <Screen name="Home" component={CommunityHome} /> */}
    </Navigator>
  );
}

const styles = StyleSheet.create({
  active: {
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    minWidth: 80,
  },
  activeText: {
    color: "#7933EB",
    fontSize: RF(9),
    marginTop: 4,
    marginStart: 1,
    fontWeight: "600",
  },
  inactive: {
    alignItems: "center",
    minWidth: 0,
  },
  inactiveText: {
    color: "gray",
    fontSize: RF(9),
    marginTop: 4,
    marginStart: 1,
    fontWeight: "600",
  },
});
//   const getTabIcon = (
//     route: RouteProp<TabRoutes, keyof TabRoutes>,
//     focused: boolean,
//   ): JSX.Element | null => {
//     switch (route.name) {
//       case 'Home':
//         return focused ? (
//           <HomeeIcon />
//         ) : (
//           <HomeeIcon color={pallets.textSecondary} />
//         );

//       case 'Shop':
//         return focused ? (
//           // <Entypo name="location" size={24} color={pallets.tab} />
//           <ShopIcon />
//         ) : (
//           <ShopIcon />
//         );

//       case 'Profile':
//         return focused ? <ProfileIcon /> : <ProfileIcon />;

//       default:
//         return null;
//     }
//   };
