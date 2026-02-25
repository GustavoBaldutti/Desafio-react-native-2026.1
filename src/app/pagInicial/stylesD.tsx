import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const stylesD = StyleSheet.create({
  card: {
    backgroundColor: "#000",
    width: width * 0.85,
    alignSelf: "center",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  imageWrapper: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  productImage: {
    width: "80%",
    height: "90%",
  },
  productTitle: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    textTransform: "uppercase",
    fontFamily  : "Fontes",
  },
  productPrice: {
    color: "#4B2E60",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },
  buyButton: {
    backgroundColor: "#4B2E60",
    width: "80%",
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  buyButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFF",
  },
  dotActive: {
    backgroundColor: "#4B2E60",
  },
});