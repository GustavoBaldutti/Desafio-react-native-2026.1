import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { View } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Fontes: require("../assets/fonts/fontes.ttf"),
   
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}