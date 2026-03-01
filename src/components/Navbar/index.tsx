import { useAuth } from "@/src/hooks/useAuth";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Menu } from "../Menu";
import { styles } from "./styles";
import { router } from "expo-router";

type navbarProps={
  visible:boolean
}

export function Navbar(data: navbarProps) {
  const { logout } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Menu onClose={() => { }} />
        <TouchableOpacity onPress={() => router.push("/")}>
          <Image
            source={require("../../assets/images/Logo.png")}
            style={styles.logoHeader}
          />
        </TouchableOpacity>

        {data.visible ? (
          <TouchableOpacity onPress={logout}>
            <Feather name="log-in" size={24} color="#4B2E60" />
          </TouchableOpacity>
        ):(
          <View style={{width:24}}> 
          </View>
        )}
      </View>
    </View>
  );
}
