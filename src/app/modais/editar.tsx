import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./stylesE";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

export default function EditarPublicacao() {
  const router = useRouter();

  const [nome, setNome] = useState("Shape CBgang");
  const [descricao, setDescricao] = useState("Maple");
  const [preco, setPreco] = useState("300,00");

  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleEditar = () => {
    Alert.alert("Sucesso!", "Produto editado com sucesso.", [
      {
        text: "OK",

        onPress: () => router.replace("/gerenciar"),
      },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.headerIcon}
        >
          <Feather name="arrow-left" size={28} color="#4B2E60" />
        </TouchableOpacity>

        <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.logoHeader}
        />

        <TouchableOpacity style={styles.headerIcon}>
          <Feather name="menu" size={28} color="#4B2E60" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Editar publicação</Text>

          <TouchableOpacity style={styles.imagePlaceholder} onPress={pickImage}>
            {imageUri ? (
              <Image
                source={{ uri: imageUri }}
                style={{ width: "100%", height: "100%", borderRadius: 8 }}
                resizeMode="cover"
              />
            ) : (
              <Feather name="image" size={50} color="#4B2E60" />
            )}
          </TouchableOpacity>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
              style={styles.input}
              value={descricao}
              onChangeText={setDescricao}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Preço</Text>
            <TextInput
              style={styles.input}
              value={preco}
              onChangeText={setPreco}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={() => router.replace("/gerenciar")}
            >
              <Text style={styles.textCancel}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonEdit} onPress={handleEditar}>
              <Text style={styles.textEdit}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
