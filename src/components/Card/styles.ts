import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const stylesD = StyleSheet.create({
  card: {
    backgroundColor: "#000",
    width: width * 0.75,
    alignSelf: "center",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    marginHorizontal: 30, 
  },
  imageWrapper: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 280, 
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
  },
  productImage: {
    width: "90%",
    height: "90%",
  },
  productTitle: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 15,
    textTransform: "uppercase",
    fontFamily: "Fontes", 
  },
  productPrice: {
    color: "#4B2E60",
    fontSize: 16,
    fontWeight: "900",
    marginBottom: 20,
    fontFamily: "Fontes", 
  },
  buyButton: {
    backgroundColor: "#4B2E60",
    width: "90%", 
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buyButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Fontes", 
    textTransform: "uppercase",
  },
});