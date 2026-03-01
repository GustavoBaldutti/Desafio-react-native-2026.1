import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center", // Garante que tudo fique centralizado horizontalmente
    justifyContent: "center", // Centraliza o conteúdo verticalmente na tela
  },

  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 10,
  },

  boxTop: {
    alignItems: "center",
    marginBottom: 40, // Cria um espaço entre o título e os inputs
  },

  logo: {
    width: 250, // Diminuí o tamanho para caber perfeitamente na tela
    height: 250,
  },

  Text: {
    fontWeight: "900", // Mais grosso, parecido com a imagem
    marginTop: 20,
    fontSize: 26,
    color: "#4B2E60",
    textTransform: "uppercase", // Garante que fique tudo maiúsculo
  },

  inputsContainer: {
    width: width * 0.8, // Os inputs vão ocupar 80% da tela
    marginBottom: 40, // Espaço entre os inputs e o botão de login
  },

  boxInput: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "flex-end", // Alinha o texto na base da linha
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
    marginBottom: 30, // Espaçamento entre o email e a senha
    paddingBottom: 8,
  },

  titleInput: {
    color: "#4B2E60",
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 10, // Dá um espaço entre a palavra "EMAIL" e a linha de digitar
    // fontFamily: "Fontes", // Descomente se sua fonte estiver carregando direitinho
  },

  input: {
    flex: 1, // Faz a área de digitação ocupar o resto da linha
    color: "#FFFFFF",
    fontSize: 16,
    height: 30,
  },

  boxButtom: {
    width: "100%",
    alignItems: "center",
  },

  button: {
    width: "80%", // Mesma largura dos inputs para ficar harmonioso
    borderRadius: 16,
    height: 55, // Um pouco mais alto para ficar igual à imagem
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4B2E60",
  },

  textbutton: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    // fontFamily: "Fontes",
  },
});
