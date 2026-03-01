import { skates } from "@/src/data/data";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Navbar } from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function Gerenciar() {
  const router = useRouter();

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image
        source={item.imagem}
        style={styles.productImage}
        resizeMode="cover"
      />

      <View style={styles.cardContent}>
        <Text style={styles.productTitle}>{item.titulo}</Text>
        <Text style={styles.productDesc}>{item.descricao}</Text>
        <Text style={styles.productPrice}>{item.preco}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.btnEditar}
            onPress={() => router.push("/modais/editar")}
          >
            <Text style={styles.btnText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnExcluir}
            onPress={() => router.push("/modais/deletar")}
          >
            <Text style={styles.btnText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Navbar visible={false} />
      <View style={styles.container}>
        <FlatList
          data={skates}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          ListHeaderComponent={() => (
            <>
              <TouchableOpacity
                style={styles.btnNovaPublicacao}
                onPress={() => router.push("/modais/criar")}
              >
                <Feather name="plus-circle" size={20} color="#FFF" />
                <Text style={styles.textNovaPublicacao}>NOVA PUBLICAÇÃO</Text>
              </TouchableOpacity>

              <Text style={styles.pageTitle}>Gerenciar Produtos</Text>
            </>
          )}
          renderItem={renderItem}
        />
      </View>
      <Footer/>
    </View>
  );
}
