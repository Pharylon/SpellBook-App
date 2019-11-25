import { View, Text, StyleSheet, StatusBar, Platform } from "react-native";

const Styles = StyleSheet.create({
  inputWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: 50,
  },
  input: {
    borderColor: "black",
    // borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#dce7f7",
    width: 300,
    marginBottom: 5,
  },
  container: {
    //backgroundColor: "#b9d5f0",
    // paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    display: "flex",
    marginLeft: 10,
    marginRight: 20,
  },
  instructions: {
    marginTop: 10,
  },
  buttonWrapper: {
    width: 100,
    alignSelf: "flex-end",
  },
  characterScreen: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  characterEntry: {
    fontSize: 18,
    marginLeft: 20,
  },
  characterEntryView: {
    height: 50,
    display: "flex",
    borderBottomWidth: 1,
    borderColor: "#ebf1fa",
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "column",
  },
  addCharacterButton: {
    marginTop: "auto",
    marginBottom: 50,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  innerAddCharacterButton: {
    width: 200,
  },
});

export default Styles;
