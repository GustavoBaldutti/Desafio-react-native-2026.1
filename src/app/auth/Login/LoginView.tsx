import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "../../../assets/images/Logo.png";
import { styles } from "./styles";

export function LoginView() {
  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.Text}> Iniciar Sessão </Text>
      </View>
      <View style={styles.boxInput}>
        <Text style={styles.titleInput}>EMAIL: </Text>
        <TextInput style={styles.input} />
        <MaterialIcons name="email" size={20} color="#4B2E60" />
      </View>
      <View style={styles.boxInput}>
        <Text style={styles.titleInput}>SENHA: </Text>
        <TextInput style={styles.input} />
        <MaterialIcons name="remove-red-eye" size={20} color="#4B2E60" />
      </View>
      <View style={styles.boxButtom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      {/* Botão alinhado no topo esquerdo usando o seu ícone */}
      <TouchableOpacity style={styles.backButton}>
        {/* Aumentei o size para 35 para ficar mais parecido com o tamanho na imagem */}
        <AntDesign name="left-square" size={35} color="#4B2E60" />
      </TouchableOpacity>

      <View style={styles.boxTop}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.Text}> INICIAR SESSÃO </Text>
      </View>
    </View>
  );
}
