import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Menu } from "../Menu";

export function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Menu visible={menuVisible} onClose={() => setMenuVisible(false)} />
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
