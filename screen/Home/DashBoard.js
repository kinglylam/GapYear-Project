import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import ProfileImg from "../../assets/images/profileImg.png";
import BookImg from "../../assets/images/book.png";
import Bus from "../../assets/images/Bus.png";
import ProgressTracker from "../../assets/images/progressTracker.png";

import {
  SettingsIcon,
  NotificationIcon,
  LocationIcon,
  CalendarIcon,
  ClockIcon,
  WarningIcon,
  SearchIcon,
  GameCard,
  LibraryCard,
  QuizCard,
  AddCard,
  LeftIcon,
  RightIcon,
  Language,
  Chemistry,
  Arithmetics,
  BigRightArrow,
} from "../../assets/icons";

const DashBoard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "column;" }}>
        <View style={styles.dashBoard}>
          <Image source={ProfileImg} style={styles.profileImg} />
          <View style={styles.text}>
            <Text style={styles.hello}>Hello, Ayomide!</Text>
            <Text style={styles.welcome}>Welcome back.</Text>
          </View>

          <View style={styles.touch}>
            <TouchableOpacity>
              <SettingsIcon />
            </TouchableOpacity>

            <TouchableOpacity>
              <NotificationIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.search}>
        <SearchIcon style={styles.SearchIcon} />
        <TextInput style={styles.input} placeholder="Search something..." />
      </View>

      <View style={styles.event}>
        {/* <WarningIcon style={styles.WarningIcon} /> */}
        <View style={styles.Bus}>
          <Image source={Bus} style={styles.BusImage} />
        </View>
        <View style={styles.BusContainer}>
          <View style={styles.Boxseparate}>
            <Text style={styles.Busbox}>School-in-a-Box</Text>

            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <LocationIcon style={styles.LocationIcon} />

              <Text style={styles.Location}>
                Iganmode Grammar School, Oju-ore, Ota, Ogun State.
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
              <CalendarIcon style={styles.calendar} />
              <Text style={styles.date}>25th July, 2024</Text>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 25 }}>
              <ClockIcon style={styles.clock} />
              <Text style={styles.time}>1:03 PM</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.ProgressContainer}>
        <Text style={styles.ProgressText}>Your Progress</Text>
        <View style={styles.Everything}>
          <Image source={BookImg} style={styles.BookImg} />
          <View style={styles.Progress}>
            <Text style={styles.course}>Word Class and Phrases</Text>
            <Text style={styles.percent}>60% complete</Text>
          </View>
        </View>
        <View style={styles.load}>
          <Image source={ProgressTracker} style={styles.tracker} />
        </View>
      </View>
      <View style={styles.ActivityContainer}>
        <Text style={styles.act}>Activities for Today</Text>
        <View style={styles.cards}>
          <GameCard style={styles.gCard} />
          <LibraryCard style={styles.gCard} />
          <QuizCard style={styles.gCard} />
          <AddCard style={styles.gCard} />
        </View>
        <TouchableOpacity style={styles.more}>
          <Text style={styles.seeMore}>See More</Text>
          <RightIcon style={styles.moreArrow} />
        </TouchableOpacity>
      </View>

      <View style={styles.RecommendContainer}>
        <Text style={styles.rText}>Recommended for You</Text>
        <View style={styles.recommend}>
          <Language style={{ marginRight: 20 }} />
          <Chemistry style={{ marginRight: 20 }} />
          <Arithmetics />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dashBoard: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    justifyContent: "centre",
  },
  welcome: {
    fontWeight: "400",
  },
  hello: {
    fontWeight: "700",
    fontSize: 20,
  },
  container: {
    marginTop: 20,
    // flexDirection: "row",
    gap: 15,
    // alignItems: "center",
    paddingVertical: 5,
  },
  profileImg: {
    height: 90,
    width: 90,
    marginLeft: 10,
  },
  touch: {
    flexDirection: "row",
  },
  // input: {
  //   // marginLeft: 20,
  // },
  search: {
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "black",
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    borderRadius: 3,
    height: 30,
  },
  event: {
    backgroundColor: "#472B97",
    height: 120,
    flexDirection: "row",
    // gap: 7,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 7,
  },
  BusImage: {
    height: 60,
    width: 70,
  },
  Bus: {
    backgroundColor: "white",
    height: 60,
    alignSelf: "center",
    marginLeft: 10,
  },
  Busbox: {
    color: "white",
    fontWeight: "800",
    fontSize: 20,
  },
  Location: {
    color: "white",
    fontSize: 10,
  },
  BusContainer: {
    marginLeft: 10,
    marginTop: 20,
    // gap: 10,
  },
  LocationIcon: {
    marginRight: 5,
    marginTop: 2,
  },
  date: {
    color: "white",
    fontSize: 10,
    marginTop: 2,
  },
  calendar: {
    marginRight: 5,
    marginTop: 3,
  },
  Boxseparate: {
    gap: 20,
  },
  time: {
    color: "white",
    fontSize: 10,
    marginTop: 3,
  },
  clock: {
    marginRight: 5,
    marginTop: 4,
  },
  ProgressText: {
    fontWeight: "700",
    fontSize: 25,
  },
  ProgressContainer: {
    marginLeft: 20,
  },
  Everything: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 15,
  },
  Progress: {
    marginLeft: 15,
  },
  BookImg: {
    width: 30,
    marginTop: 3,
  },
  course: {
    fontWeight: "700",
  },
  percent: {
    fontSize: 10,
    marginTop: 5,
  },
  load: {
    backgroundColor: "white",
    width: 270,
    height: 17,
    marginLeft: 55,
    marginTop: 7,
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#f5a623",
    borderRadius: 6,
  },
  tracker: {
    height: 12,
    borderRadius: 6,
    marginTop: 1,
    marginLeft: 2,
  },
  SearchIcon: {
    marginLeft: 7,
    marginRight: 10,
    marginTop: 3,
  },
  ActivityContainer: {
    marginLeft: 25,
  },

  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gCard: {
    width: 10,
  },
  act: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 15,
  },
  recommend: {
    flexDirection: "row",
  },
  rText: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: "700",
  },
  RecommendContainer: {
    marginLeft: 20,
  },
  more: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
    marginTop: 5,
  },
  seeMore: {
    color: "ddcefa",
    fontSize: 10,
    marginRight: 2,
  },
  moreArrow: {
    marginTop: 2,
  },
});

export default DashBoard;
