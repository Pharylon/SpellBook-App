import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { GetCharacter } from "../Utility/characterService";
import { NavigationStackScreenProps, HeaderTitle } from "react-navigation-stack";
import Styles from "./Styles";
import Link from "../Link";
import { BeyondCharacter } from "../Models/BeyondCharacter";
import CharacterStore from "../Utility/CharacterStore";

// const myTestCharactersToLoad = [
//   "19233787",
//   "11598890",
//   "3312827",
//   "16871372",
// ];

export default function AddCharacterScreen(props: NavigationStackScreenProps) {
  // const [inputValue, setInputValue] = useState(myTestCharactersToLoad[0]);
  const [inputValue, setInputValue] = useState("");
  const addCharacter = (newCharacter: BeyondCharacter) => {
    CharacterStore.saveCharacter(newCharacter);
    props.navigation.navigate("Home", {newId: newCharacter.id});
  };
  const getCharacter = async () => {
    // const index = myTestCharactersToLoad.indexOf(inputValue) + 1;
    // setInputValue(myTestCharactersToLoad[index]);
    let characterId = inputValue;
    if (characterId.toLowerCase().startsWith("http")){
      characterId = characterId.substring(characterId.lastIndexOf("/"));
    }
    const myCharacter = await GetCharacter(characterId);
    if (myCharacter && myCharacter.name){
      Alert.alert("Add Character", `Do you wish to add ${myCharacter.name}?`, 
      [
        {text: "No", onPress: () => console.log("Nope")},
        {text: "Yes", onPress: () => addCharacter(myCharacter)},
      ]);
    }
  };
  return (
    <View style={Styles.container}>
      <HeaderTitle>Instructions</HeaderTitle>
      <View style={Styles.instructions}>
        <Text style={{marginLeft: 10}}>Go to&nbsp;
        <Link text="your character page" uri="https://www.dndbeyond.com/my-characters" /> on D&amp;D Beyond,
              click "View" on the character whose spells you wish to browse.
              Look at the URL in your browser address bar. It should end in a number.
              Enter that number below. You can also copy/paste the entire URL. 
              Note that the character must be public.
        </Text>
      </View>
      <View style={Styles.inputWrapper}>
        <View>
          <Text>Character ID</Text>
          <TextInput
            style={Styles.input}
            placeholder="000000"
            keyboardType="number-pad"
            value={inputValue}
            onChangeText={text => setInputValue(text)} />
        <View style={Styles.buttonWrapper}>
          <Button
            title={"Add"}
            onPress={() => getCharacter() }
          />
        </View>
        </View>
      </View>
    </View>
  );
}

AddCharacterScreen.navigationOptions = () => ({ title: "Add A Character" });
