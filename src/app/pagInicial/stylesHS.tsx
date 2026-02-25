import { StyleSheet } from "react-native";

export const stylesHS = StyleSheet.create({
  heroContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#333",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    opacity: 0.7,
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