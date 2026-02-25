import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, View } from "react-native";
import { stylesHS } from "./stylesHS";

export function HeroSection() {
  return (
    <View style={stylesHS.heroContainer}>
      <Image
        source={require("../../assets/images/FundoHS.png")}
        style={stylesHS.heroImage}
        resizeMode="cover"
      />
      <View style={[stylesHS.dotsContainer, { marginBottom: 10 }]}>
        <AntDesign name="caret-left" size={12} color="#FFF" />
        <View style={[stylesHS.dot, stylesHS.dotActive]} />
        <View style={stylesHS.dot} />
        <View style={stylesHS.dot} />
        <View style={stylesHS.dot} />
        <AntDesign name="caret-right" size={12} color="#FFF" />
      </View>
    </View>
  );
}