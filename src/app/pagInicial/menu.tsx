import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./stylesM";

interface MenuProps {
  visible: boolean;
  onClose: () => void;
}

export const Menu = ({ visible, onClose }: MenuProps) => {
  const navigation = useNavigation<any>();

  const handleNavigation = (screenName: string) => {
    onClose();
    navigation.navigate(screenName);
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.menuContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Feather name="arrow-left" size={28} color="#4B2E60" />
            </TouchableOpacity>
            <Image
              source={require("../../assets/images/Logo.png")}
              style={styles.logo}
            />
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" size={28} color="#4B2E60" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleNavigation("Contatos")}
          >
            <Text style={styles.menuText}>Contatos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleNavigation("Gerenciar")}
          >
            <Text style={styles.menuText}>Gerenciar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuItem, styles.lastItem]}
            onPress={() => handleNavigation("Login")}
          >
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
