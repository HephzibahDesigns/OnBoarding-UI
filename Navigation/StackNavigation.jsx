import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardScreen from "../Screens/OnBoardScreen";
import HomeScreen from "../Screens/HomeScreen";
import { getItem } from "../asycronousStorage.js";

export default function StackNavigation() {
  const Stack = createStackNavigator();

  const [showOnBoarding, setShowOnBoarding] = useState(null);

  useEffect(() => {
    checkIfOnBoarded();
  }, []);

  const checkIfOnBoarded = async () => {
    try {
      const onBoarded = await getItem("onboarded");
      // Parse the string value back to a number
      // const onboardedNumber = parseInt(onBoarded, 10);

      if (onBoarded === 1) {
        // hide onBoarding
        setShowOnBoarding(false);
      } else {
        // show onboarding
        setShowOnBoarding(true);
      }
    } catch (error) {
      console.log("Error checking onboarding status:", error);
      // Default to showing OnBoarding screen in case of error
      setShowOnBoarding(true);
    }
  };

  if (showOnBoarding === null) {
    return null;
  }

  if (showOnBoarding) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          initialRouteName: "OnBoarding",
        }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          initialRouteName: "Home",
        }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
  }
}
