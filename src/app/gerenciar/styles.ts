import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8B8B8B",
  },
  listContainer: {
    paddingHorizontal: 30,
    paddingVertical:70,
    paddingBottom: 40,
  },

  btnNovaPublicacao: {
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 25,
    gap: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textNovaPublicacao: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  pageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
    textTransform: "uppercase",
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 25,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width:"100%",
  },
  productImage: {
    width: "100%",
    height: 300,
    objectFit: "cover"
  },
  cardContent: {
    padding: 15,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#000",
    marginBottom: 5,
  },
  productDesc: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  btnEditar: {
    flex: 1,
    backgroundColor: "#000000",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  btnExcluir: {
    flex: 1,
    backgroundColor: "#4B2E60",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15,
  },
});
