import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/images/Logo.png";
import { styles } from "./styles";
import { useAuth } from "@/src/hooks/useAuth";

export default function LoginView() {
  const [showPassword, setShowPassword] = useState(false);
  const {login} = useAuth();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton }>
        <AntDesign name="left-square" size={35} color="#4B2E60" />
      </TouchableOpacity>

      <View style={styles.boxTop}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.Text}>INICIAR SESSÃO</Text>
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.boxInput}>
          <Text style={styles.titleInput}>EMAIL</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.boxInput}>
          <Text style={styles.titleInput}>SENHA</Text>
          <TextInput style={styles.input} secureTextEntry={!showPassword} />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialIcons
              name={showPassword ? "visibility" : "visibility-off"}
              size={24}
              color="#4B2E60"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.boxButtom}>
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.textbutton}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
