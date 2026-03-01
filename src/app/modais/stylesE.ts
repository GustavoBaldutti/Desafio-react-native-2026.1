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
  
  headerIcon: {
    padding: 5,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
 
  logoHeader: {
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
 
  imagePlaceholder: {
    width: "100%",
    height: 300,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#4B2E60",
    borderStyle: "dashed", 
  },
  imageContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginBottom: 20,
  },
  productImage: {
    width: 120,
    height: 300,
    resizeMode: "contain",
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 40,
  },
  buttonCancel: {
    flex: 1,
    backgroundColor: "#000000",
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginRight: 10,
  },
  textCancel: {
    color: "#4B336B",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonEdit: {
    flex: 1,
    backgroundColor: "#4B336B",
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginLeft: 10,
  },
  textEdit: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
});