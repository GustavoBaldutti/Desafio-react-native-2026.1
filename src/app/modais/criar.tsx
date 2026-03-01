import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker"; 
import { stylesC } from "./stylesC";

export default function Criar() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(
    null,
  );

 
  const escolherImagem = async () => {
   
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true, 
      aspect: [4, 3],
      quality: 1,
    });

 
    if (!resultado.canceled) {
      setImagemSelecionada(resultado.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      style={stylesC.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={stylesC.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={stylesC.headerIcon}
        >
          <Feather name="arrow-left" size={28} color="#4B2E60" />
        </TouchableOpacity>

        <Image
          source={require("../../assets/images/Logo.png")}
          style={stylesC.logoHeader}
        />

        <TouchableOpacity style={stylesC.headerIcon}>
          <Feather name="menu" size={28} color="#4B2E60" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={stylesC.scrollContent}
      >
        <Text style={stylesC.pageTitle}>Nova publicação</Text>

       
        <TouchableOpacity
          style={stylesC.imagePlaceholder}
          onPress={escolherImagem}
        >
          {imagemSelecionada ? (
           
            <Image
              source={{ uri: imagemSelecionada }}
              style={{ width: "100%", height: "100%", borderRadius: 8 }}
              resizeMode="cover"
            />
          ) : (
            
            <Feather name="image" size={50} color="#4B2E60" />
          )}
        </TouchableOpacity>

        <View style={stylesC.formGroup}>
          <Text style={stylesC.label}>Nome</Text>
          <TextInput
            style={stylesC.input}
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <View style={stylesC.formGroup}>
          <Text style={stylesC.label}>Descrição</Text>
          <TextInput
            style={stylesC.input}
            value={descricao}
            onChangeText={setDescricao}
          />
        </View>

        <View style={stylesC.formGroup}>
          <Text style={stylesC.label}>Preço</Text>
          <TextInput
            style={stylesC.input}
            value={preco}
            onChangeText={setPreco}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={stylesC.btnCriar}>
          <Text style={stylesC.btnCriarText}>Criar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
