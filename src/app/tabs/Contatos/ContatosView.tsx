import {
    ArrowLeft,
    Facebook,
    Instagram,
    Mail,
    MapPin,
    Menu,
    Music2,
    Phone,
} from "lucide-react-native";
import React from "react";
import {
    Image,
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
      <View style={styles.header}>
        <TouchableOpacity>
          <Menu color="#4B2E60" size={28} />
        </TouchableOpacity>

        <View style={styles.logo}>
          <Image
            source={require("../../../assets/images/Logo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLeft color="#000" size={20} />
        </TouchableOpacity>
      </View>

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
    </SafeAreaView>
  );
}
