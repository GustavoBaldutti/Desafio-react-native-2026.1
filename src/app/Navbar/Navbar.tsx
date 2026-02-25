import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Destaque } from "../pagInicial/destaque";
import { HeroSection } from "../pagInicial/heroSection";
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <HeroSection />
        <Text style={styles.sectionTitle}>Skates em Destaque</Text>
        <Destaque
          title="Skate Montado DGK Hot Dog"
          price="R$ 390,00"
          imageSource={require("../../assets/images/skateDgk.png")}
        />

        <Text style={styles.sectionTitle}>Rodinhas em Destaque</Text>
        <Destaque
          title="Roda Spitfire x Supreme Classic 52mm Black"
          price="R$ 600,00"
          imageSource={require("../../assets/images/rodinhaPreta.png")}
        />

        <Text style={styles.sectionTitle}>Shapes em Destaque</Text>
        <Destaque
          title="Shape Drop Dead Old School Maple Animalls"
          price="R$ 360,00"
          imageSource={require("../../assets/images/shapePorco.png")}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>SOUL SKATESHOP</Text>
        </View>
      </ScrollView>
    </View>
  );
}
