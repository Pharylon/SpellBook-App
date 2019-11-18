import React, { useState } from "react";
import Test from "./Test";
import { View, Text, StyleSheet, StatusBar, Platform } from "react-native";


export default function App() {
  const [tab, setTab] = useState("Character");

  return (
    <View style={styles.container}>
        <View style={styles.tabContainer}>
          <Text style={styles.tab}>Spells</Text>
          <Text style={styles.tab}>Characters</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
  tabContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "red",
  },
  tab: {
    flex: 1,
    textAlign: "center",
  },
});

