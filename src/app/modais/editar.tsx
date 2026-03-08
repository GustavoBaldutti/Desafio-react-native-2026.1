import api from "@/src/services/api";
import { styles } from "@/src/styles/editar";
import { Feather } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function EditarPublicacao() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [tipo, setTipo] = useState("");

  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      async function fetchProduct() {
        try {
          const response = await api.get(`/baldutti/products/${id}`);
          const product = response.data.product ?? response.data;
          setNome(product.title ?? "");
          setDescricao(product.description ?? "");
          setPreco(String(product.price ?? ""));
          setTipo(product.type ?? "");
          if (product.image) {
            setImageUri(product.image);
            setImagePreview(product.image);
          }
        } catch (error) {
          console.error("Erro ao buscar produto:", error);
        }
      }
      if (id) fetchProduct();
    }, [id]),
  );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [3, 4],
      quality: 0.1,
      base64: true,
    });

    if (!result.canceled) {
      setImagePreview(result.assets[0].uri);
      const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`;
      setImageUri(base64Image);
    }
  };

  const handleEditar = async () => {
    try {
      await api.put(`/baldutti/products/${id}`, {
        title: nome,
        description: descricao,
        price: Number(preco),
        type: tipo,
        image: imageUri,
        isFeatured: true,
      });
      Alert.alert("Sucesso!", "Produto editado com sucesso.", [
        { text: "OK", onPress: () => router.replace("/gerenciar") },
      ]);
    } catch (error) {
      console.error("Erro ao editar:", error);
      Alert.alert("Erro", "Não foi possível editar a publicação.");
    }
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
            {imagePreview ? (
              <Image
                source={{ uri: imagePreview }}
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
