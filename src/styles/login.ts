import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 10,
  },

  boxTop: {
    alignItems: "center",
    marginBottom: 40,
  },

  logo: {
    width: 250,
    height: 250,
  },

  Text: {
    fontWeight: "900",
    marginTop: 20,
    fontSize: 26,
    color: "#4B2E60",
    textTransform: "uppercase",
  },

  inputsContainer: {
    width: width * 0.8,
    marginBottom: 40,
  },

  boxInput: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
    marginBottom: 30,
    paddingBottom: 8,
  },

  titleInput: {
    color: "#4B2E60",
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 10,
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
    height: 30,
  },

  boxButtom: {
    width: "100%",
    alignItems: "center",
  },

  button: {
    width: "80%",
    borderRadius: 16,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4B2E60",
  },

  textbutton: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
