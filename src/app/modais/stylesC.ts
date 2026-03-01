import { StyleSheet } from "react-native";

export const stylesC = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A9A9A9",
  },

  header: {
    backgroundColor: "#000",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  headerIcon: {
    padding: 5,
  },
  logoHeader: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  scrollContent: {
    padding: 30,
    paddingBottom: 50,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },

  imagePlaceholder: {
    backgroundColor: "#FFF",
    height: 250,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#000",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#4B2E60",
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#000",
  },

  btnCriar: {
    backgroundColor: "#4B2E60",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  btnCriarText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});
