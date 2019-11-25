import React, { Component } from "react";
import { WebView, Linking, Text, StyleSheet } from "react-native";


export default function Link(props: { text: string, uri: string }) {
  const openUrl = () => Linking.openURL(props.uri);
  return (
    <Text style={Styles.linkDecoration} onPress={openUrl}>{props.text}</Text>
  );
}


const Styles = StyleSheet.create({
  linkDecoration: {
    textDecorationLine: "underline",
    color: "blue",
  },
});
