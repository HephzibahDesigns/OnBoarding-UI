import { View, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../asycronousStorage.js";

export default function OnBoardScreen() {
  const navigation = useNavigation();

  const handleComplete = () => {
    setItem("onboarded", "1").then(() => {
      navigation.navigate("Home");
    });
  };

  return (
    <View style={styles.container}>
      <Onboarding
        containerStyles={{ paddingHorizontal: 30 }}
        titleStyles={{ fontSize: 27, fontWeight: 500 }}
        subTitleStyles={{ fontSize: 16 }}
        bottomBarHighlight={false}
        controlStatusBar={true}
        onDone={handleComplete}
        onSkip={handleComplete}
        pages={[
          {
            backgroundColor: "#8E3FFF",
            image: (
              <View>
                <LottieView
                  style={{ width: 300, height: 300 }}
                  source={require("../assets/animations/Animation1.json")}
                  autoPlay
                  loop
                />
              </View>
            ),

            title: "Boost Productivity",
            subtitle: "Subscribe this channel to boost product level",
            subTitleStyles: { color: "#F1F1F1" },
          },

          {
            backgroundColor: "#FCD94E",

            image: (
              <View>
                <LottieView
                  style={{ width: 300, height: 300 }}
                  source={require("../assets/animations/Animation2.json")}
                  autoPlay
                  loop
                />
              </View>
            ),

            title: "Work Seamlessly",
            subtitle: "Get your work done without interruption",
          },

          {
            backgroundColor: "#A7F3D0",
            image: (
              <View>
                <LottieView
                  style={{ width: 300, height: 300 }}
                  source={require("../assets/animations/Animation3.json")}
                  autoPlay
                  loop
                />
              </View>
            ),

            title: "Achieve Higher Goals",
            subtitle:
              "By Boosting your productivity, we help you archieve higher goals",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  animationImage: {
    width: 300,
    height: 400,
  },
});
