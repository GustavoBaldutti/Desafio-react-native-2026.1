import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { stylesD } from "./styles";

interface DestaqueProps {
  title: string;
  price: string;
  imageSource: any;
}

export function Card({ title, price, imageSource }: DestaqueProps) {
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
    </View>
  );
}