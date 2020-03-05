import React, { useEffect } from "react";
import { ActivityIndicator, AsyncStorage, View } from "react-native";

export default ({ navigation }) => {
  useEffect(() => {
    AsyncStorage.getItem("token").then(x => {
      navigation.navigate(x ? "Root" : "OnBoarding");
    });
  }, []); // arreglo vacio para que solo se llame 1 vez
  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};
