import Footer from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Music2,
  Phone,
} from "lucide-react-native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

const ContactItem = ({ Icon, title, content }: any) => (
  <View style={styles.card}>
    <View style={styles.iconCircle}>
      <Icon color="#000000" size={24} />
    </View>
    <View style={styles.cardTextContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardContent}>{content}</Text>
    </View>
  </View>
);

export default function ContatosView() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar visible={false} />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>CONTATO</Text>

        <Text style={styles.description}>
          ENTRE EM CONTATO CONOSCO. ESTAMOS AQUI PARA AJUDAR COM QUALQUER DÚVIDA
          SOBRE NOSSOS PRODUTOS.
        </Text>

        <View style={styles.cardsContainer}>
          <ContactItem
            Icon={Mail}
            title="EMAIL"
            content="CONTATO@SOULSKATESHOP.COM.BR"
          />

          <ContactItem Icon={Phone} title="TELEFONE" content="(00) 0000-0000" />

          <ContactItem
            Icon={MapPin}
            title="ENDEREÇO"
            content={
              "FRANCISCO QUEIROZ CAPUTO - 34\nBAIRRO REALEZA - JUIZ DE FORA - MG"
            }
          />
        </View>

        <View style={styles.social}>
          <TouchableOpacity style={styles.socialIcon}>
            <Instagram color="#4B2E60" size={40} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Facebook color="#4B2E60" size={40} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Music2 color="#4B2E60" size={40} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}
