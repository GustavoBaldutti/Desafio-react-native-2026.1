import React, { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { Navbar } from "@/src/components/Navbar";
import api from "@/src/services/api";
import { styles } from "@/src/styles/deletar";
import { router, useLocalSearchParams } from "expo-router";

export default function Deletar() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [confirmacao, setConfirmacao] = useState("");

  async function deletePubli() {
    if (confirmacao.toLowerCase() !== "confirmar") {
      Alert.alert("Erro", 'Digite "confirmar" para prosseguir.');
      return;
    }
    try {
      await api.delete(`/baldutti/products/${id}`);
      Alert.alert("Sucesso", "Publicação deletada com sucesso!");
      router.replace("/gerenciar");
    } catch (error) {
      console.error("Erro ao deletar:", error);
      Alert.alert("Erro", "Não foi possível deletar a publicação.");
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Navbar visible={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Deletar publicação</Text>

          <Text style={styles.warningText}>
            Tem certeza que deseja deletar esta publicação? Esta ação não pode
            ser desfeita.
          </Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Digite "confirmar" para prosseguir</Text>
            <TextInput
              style={styles.input}
              placeholder="confirmar"
              value={confirmacao}
              onChangeText={setConfirmacao}
            />
          </View>

          <TouchableOpacity style={styles.deleteButton} onPress={deletePubli}>
            <Text style={styles.deleteButtonText}>Deletar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => router.replace("/gerenciar")}
          >
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
