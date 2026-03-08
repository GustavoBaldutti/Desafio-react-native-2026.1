import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { stylesD } from "./styles";

interface DestaqueProps {
  title: string;
  price: number;
  imageSource: string | number;
}

export function Card({ title, price, imageSource }: DestaqueProps) {
  const source =
    typeof imageSource === "string" ? { uri: imageSource } : imageSource;

  return (
    <View style={stylesD.card}>
      <View style={stylesD.imageWrapper}>
        <Image
          source={source}
          style={stylesD.productImage}
          resizeMode="contain"
        />
      </View>
      <Text style={stylesD.productTitle}>{title}</Text>
      <Text style={stylesD.productPrice}>R$ {price}</Text>

      <TouchableOpacity style={stylesD.buyButton}>
        <Text style={stylesD.buyButtonText}>COMPRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
