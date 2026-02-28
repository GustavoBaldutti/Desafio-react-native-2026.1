import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 70,
  },
  menuContainer: {
    backgroundColor: "#000000",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 30,
    resizeMode: "cover",
  },
  menuItem: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
  },
  lastItem: {
    borderBottomWidth: 1,
  },
  menuText: {
    color: "#4B2E60",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
