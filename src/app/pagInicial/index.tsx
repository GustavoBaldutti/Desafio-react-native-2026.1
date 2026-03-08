import Carrossel from "@/src/components/Carrossel";
import Footer from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import api from "@/src/services/api";
import { styles } from "@/src/styles/pagInicial";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

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

export default function Index() {
  const [datas, setDatas] = useState<Props[]>([]);

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

  const skates = datas.filter((item) => item.type === "skateMontado");
  const rodinhas = datas.filter((item) => item.type === "rodas");
  const trucks = datas.filter((item) => item.type === "truck");
  const shapes = datas.filter((item) => item.type === "shape");
  console.log("skates", skates);

  useFocusEffect(
    useCallback(() => {
      fetchDatas();
    }, []),
  );

  return (
    <ScrollView style={styles.container}>
      <Navbar visible={true} />

      <View style={styles.bannerContainer}>
        <Image
          source={require("../../assets/images/FundoHS.png")}
          style={styles.bannerImage}
        />
      </View>
      <View style={{ paddingBottom: 40 }}>
        <Text style={styles.titulo}>SKATES EM DESTAQUE</Text>

        <View style={styles.carrosselWrapper}>
          <Carrossel data={skates} />
        </View>

        <Text style={styles.titulo}> RODINHAS EM DESTAQUE</Text>
        <View style={styles.carrosselWrapper}>
          <Carrossel data={rodinhas} />
        </View>

        <Text style={styles.titulo}> SHAPES EM DESTAQUE</Text>
        <View style={styles.carrosselWrapper}>
          <Carrossel data={shapes} />
        </View>

        <Text style={styles.titulo}> TRUCKS EM DESTAQUE</Text>
        <View style={styles.carrosselWrapper}>
          <Carrossel data={trucks} />
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
