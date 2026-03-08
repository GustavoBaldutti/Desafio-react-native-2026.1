import { Feather } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import Footer from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import api from "@/src/services/api";
import { styles } from "@/src/styles/gerenciar";

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

export default function Gerenciar() {
  const [datas, setDatas] = useState<Props[]>([]);
  const router = useRouter();

  async function fetchDatas() {
    try {
      let page = 1;
      let allProducts: Props[] = [];
      let lastPage = 1;

      do {
        const response = await api.get(`/baldutti/products?page=${page}`);
        allProducts = [...allProducts, ...response.data.products];
        lastPage = response.data.last_page;
        page++;
      } while (page <= lastPage);

      setDatas(allProducts);
    } catch (error) {
      console.error("ERRO AO BUSCAR DADOS!!: ", error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchDatas();
    }, []),
  );

  const isValidImageUri = (uri: string) =>
    uri &&
    (uri.startsWith("http://") ||
      uri.startsWith("https://") ||
      uri.startsWith("data:"));

  const renderItem = ({ item }: { item: Props }) => (
    <View style={styles.card}>
      {isValidImageUri(item.image) ? (
        <Image
          source={{ uri: item.image }}
          style={styles.productImage}
          resizeMode="cover"
        />
      ) : (
        <View
          style={[
            styles.productImage,
            {
              backgroundColor: "#E0E0E0",
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <Text style={{ color: "#999" }}>Sem imagem</Text>
        </View>
      )}

      <View style={styles.cardContent}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDesc}>{item.description}</Text>
        <Text style={styles.productPrice}>R$ {item.price}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.btnEditar}
            onPress={() =>
              router.push({
                pathname: "/modais/editar",
                params: { id: item.id },
              })
            }
          >
            <Text style={styles.btnText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnExcluir}
            onPress={() =>
              router.push({
                pathname: "/modais/deletar",
                params: { id: item.id },
              })
            }
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
          data={datas}
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
      <Footer />
    </View>
  );
}
