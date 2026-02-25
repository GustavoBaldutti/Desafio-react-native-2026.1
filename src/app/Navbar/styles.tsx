import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A9A9A9",
  },
  header: {
    backgroundColor: "#000",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingTop: 20,
  },
  logoHeader: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "#000",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 15,
    textTransform: "uppercase",
    fontFamily: "Fontes",
  },
  footer: {
    backgroundColor: "#000",
    paddingVertical: 30,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "900",
    fontFamily: "Fontes",
  },
});