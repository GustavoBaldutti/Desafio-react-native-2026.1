import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A8A8A8",
  },
  header: {
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 40,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  warningText: {
    fontSize: 16,
    color: "#4B2E60",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "600",
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: "#000",
  },
  deleteButton: {
    backgroundColor: "#4B2E60",
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  deleteButtonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#000000",
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#4B336B",
    fontSize: 16,
    fontWeight: "bold",
  },
});
