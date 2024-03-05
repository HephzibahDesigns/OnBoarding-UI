import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async () => {
  try {
    // Convert the value to a string before storing it
    const value = JSON.stringify(1);
    await AsyncStorage.setItem("onboarded", value);
  } catch (error) {
    console.log("Error setting value: ", error);
  }
};

export const getItem = async () => {
  try {
    const value = await AsyncStorage.getItem("onboarded");
    // Parse the string value back to its original type
    return JSON.parse(value);
  } catch (error) {
    console.log("Error retrieving value: ", error);
  }
};

export const removeItem = async () => {
  try {
    await AsyncStorage.removeItem("onboarded");
  } catch (error) {
    console.log("Error deleting value: ", error);
  }
};
