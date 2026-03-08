import api from "@/src/services/api";
import { stylesC } from "@/src/styles/criar";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

type Props = {
  id: number;
  title: string;
  description: string;
  price: number;
  type: string;
  image: string;
  isFeatured: boolean;
  created_at: string;
  updated_at: string;
};

export default function Criar() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Skates", value: "skateMontado" },
    { label: "Rodinhas", value: "rodinhas" },
    { label: "Trucks", value: "trucks" },
    { label: "Shapes", value: "shapes" },
  ]);

  async function CreatePubli() {
    try {
      await api.post("/baldutti/products", {
        title: nome,
        description: descricao,
        price: Number(preco),
        type: tipo,
        image: imagemSelecionada,
        isFeatured: true,
      });
    } catch (error) {
      console.error("ERRO AO CRIAR NOVA PUBLICAÇÃO!!: ", error);
    }
  }
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [tipo, setTipo] = useState("");

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
          onPress={() => router.push("/gerenciar")}
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
        <DropDownPicker
          open={open}
          value={tipo}
          items={items}
          setOpen={setOpen}
          setValue={setTipo}
          setItems={setItems}
          placeholder="Selecione o Tipo"
          style={stylesC.drop}
        />

        <TouchableOpacity style={stylesC.btnCriar} onPress={CreatePubli}>
          <Text style={stylesC.btnCriarText}>Criar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
