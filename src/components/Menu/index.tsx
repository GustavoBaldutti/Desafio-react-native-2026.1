import { useAuth } from "@/src/hooks/useAuth";
import { Feather } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./styles";

interface MenuProps {
  onClose?: () => void;
  menuPaddingTop?: number;
}

export const Menu = ({ onClose, menuPaddingTop = 75 }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const fecharMenu = () => {
    setMenuVisible(false);
    if (onClose) onClose();
  };
  const { logout } = useAuth();

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
          style={[styles.overlay, { paddingTop: menuPaddingTop }]}
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
                  logout();
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
