// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, StatusBar } from "react-native";
import StackNavigation from "./Navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#000" />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
