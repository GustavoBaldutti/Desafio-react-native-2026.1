import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { stylesD } from "./stylesD";

interface DestaqueProps {
  title: string;
  price: string;
  imageSource: any;
}

export function Destaque({ title, price, imageSource }: DestaqueProps) {
  return (
    <View style={stylesD.card}>
      <View style={stylesD.imageWrapper}>
        <Image
          source={imageSource}
          style={stylesD.productImage}
          resizeMode="contain"
        />
      </View>
      <Text style={stylesD.productTitle}>{title}</Text>
      <Text style={stylesD.productPrice}>{price}</Text>

      <TouchableOpacity style={stylesD.buyButton}>
        <Text style={stylesD.buyButtonText}>COMPRAR</Text>
      </TouchableOpacity>

      <View style={stylesD.dotsContainer}>
        <AntDesign name="caret-left" size={12} color="#FFF" />
        <View style={[stylesD.dot, stylesD.dotActive]} />
        <View style={stylesD.dot} />
        <View style={stylesD.dot} />
        <View style={stylesD.dot} />
        <View style={stylesD.dot} />
        <AntDesign name="caret-right" size={12} color="#FFF" />
      </View>
    </View>
  );
}