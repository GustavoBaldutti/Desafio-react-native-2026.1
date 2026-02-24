import { Dimensions, StyleSheet } from "react-native";
import { width } from "../../../constants/Dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },

  boxTop: {
    paddingTop: 100,
    height: Dimensions.get("window").height / 2,
    width: "100%",

    alignItems: "center",
    justifyContent: "center",
  },

  boxButtom: {
    height: Dimensions.get("window").height / 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    paddingTop: 100,
    width: 440,
    height: 300,
  },

  Text: {
    fontWeight: "bold",
    marginTop: 40,
    fontSize: 25,
    color: "#4B2E60",
    paddingBottom: 100,
  },

  titleInput: {
    color: "#4B2E60",
    marginTop: 20,
    fontFamily: "Fontes",
  },

  boxInput: {
    width: width * 0.9,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
  },
  input: {
    alignSelf: "flex-end",
    paddingBottom: 10,
    height: "50%",
    width: "70%",
    maxWidth: "70%",
    color: "#FFFFFF",
  },

  button: {
    width: "60%",
    borderRadius: 16,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4B2E60",
  },

  textbutton: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Fontes",
  },

  
});
