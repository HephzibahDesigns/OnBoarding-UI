import LottieView from "lottie-react-native";
import { Text, SafeAreaView, StyleSheet, StatusBar, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import { removeItem } from "../asycronousStorage.js";

export default function HomeScreen() {
  const navigation = useNavigation();

  const resetBtn = async () => {
    await removeItem("onboarded");
    navigation.push("OnBoarding");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View>
        <LottieView
          style={styles.lottie}
          source={require("../assets/animations/Animation4.json")}
          autoPlay
          loop
          // resizeMode="cover"
        />
      </View>

      <Text style={styles.homeText}>Home Page</Text>

      <TouchableOpacity onPress={resetBtn} style={styles.resetBtn}>
        <Text style={{ fontSize: 18, color: "#fff" }}>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  homeText: {
    fontSize: 25,
    fontWeight: "500",
  },
  lottie: {
    width: 200,
    height: 300,
  },
  resetBtn: {
    marginTop: 10,
    backgroundColor: "#34D399",
    borderRadius: 10,
    padding: 10,
  },
});
