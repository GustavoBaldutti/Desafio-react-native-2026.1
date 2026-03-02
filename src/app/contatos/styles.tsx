import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8e8e8e",
  },
  content: {
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#000",
    marginBottom: 30,
    fontFamily: "Fontes",
  },
  description: {
    //descrição do contato
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    lineHeight: 20,
    marginBottom: 40,
    fontFamily: "Fontes",
  },
  cardsContainer: {
    width: "100%",
    gap: 15,
    fontFamily: "Fontes",
  },
  card: {
    backgroundColor: "#000",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  iconCircle: {
    //circulo para os icones
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#4B2E60",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    color: "#4B2E60", //cor do titulo dos cards
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
    fontFamily: "Fontes",
  },
  cardContent: {
    color: "#4B2E60",
    fontSize: 11,
    fontWeight: "600",
  },
  social: {
    flexDirection: "row",
    backgroundColor: "#000",
    width: "100%",
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 15,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 40,
    fontFamily: "Fontes",
  },
  socialIcon: {
    padding: 5,
  },

  logo: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
});
