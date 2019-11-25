import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { GetCharacter } from "./Utility/characterService";


export default function Test() {
  const [inputValue, setInputValue] = useState("Test");
  const [json, setJson] = useState("Open up App.tsx to start working on your app!");

  useEffect(() => {
    const fetchCharacterJson = async () => {
      const character = await GetCharacter("12517263");
      setJson(character.name);
    };
    fetchCharacterJson();    
  });

  return (
    <View style={styles.container}>
      
      <Text>{json}</Text>
      <TextInput keyboardType="number-pad" value={inputValue} onChangeText={text => setInputValue(text)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
