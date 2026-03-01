import { Feather } from "@expo/vector-icons";
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
import { styles } from "./stylesD";
import { Navbar } from "@/src/components/Navbar";
import { router } from "expo-router";

export default function Deletar() {
  const [confirmacao, setConfirmacao] = useState("");

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

          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Deletar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={()=>router.push("/gerenciar")}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
