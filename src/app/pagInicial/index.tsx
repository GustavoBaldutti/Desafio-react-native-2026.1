import Carrossel from "@/src/components/Carrossel";
import Footer from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import { rodinhas, shapes, skates, trucks } from "@/src/data/data";
import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
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
