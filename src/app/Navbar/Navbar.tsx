import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Navbar() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="menu" size={28} color="#4B2E60" />
        </TouchableOpacity>

        <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.logoHeader}
        />

        <TouchableOpacity>
          <Feather name="log-in" size={24} color="#4B2E60" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
