import { Feather } from "@expo/vector-icons";
import { router, Href } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./styles";

interface MenuProps {
  onClose?: () => void;
}

export const Menu = ({ onClose }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const fecharMenu = () => {
    setMenuVisible(false);
    if (onClose) onClose();
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
        <Feather name={menuVisible ? "x" : "menu"} size={28} color="#4B2E60" />
      </TouchableOpacity>

      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={fecharMenu}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={fecharMenu}
        >
          <TouchableWithoutFeedback>
            <View style={styles.menuContainer}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  fecharMenu();
                  router.push("/contatos" as Href);
                }}
              >
                <Text style={styles.menuText}>Contatos</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  fecharMenu();
                  router.push("/gerenciar" as Href);
                }}
              >
                <Text style={styles.menuText}>Gerenciar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.menuItem, styles.lastItem]}
                onPress={() => {
                  fecharMenu();
                  router.replace("/login" as Href);
                }}
              >
                <Text style={styles.menuText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
