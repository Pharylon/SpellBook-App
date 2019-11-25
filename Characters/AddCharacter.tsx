import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { GetCharacter } from "../Utility/characterService";
import { NavigationStackScreenProps, HeaderTitle } from "react-navigation-stack";
import Styles from "./Styles";
import Link from "../Link";
import { BeyondCharacter } from "../Models/BeyondCharacter";
import CharacterStore from "../Utility/CharacterStore";


export default function AddCharacterScreen(props: NavigationStackScreenProps) {
  const [inputValue, setInputValue] = useState("3312827");
  const addCharacter = (newCharacter: BeyondCharacter) => {
    CharacterStore.saveCharacter(newCharacter);
    props.navigation.navigate("Home", {update: true});
  };
  const getCharacter = async () => {
    const myCharacter = await GetCharacter(inputValue);
    if (myCharacter && myCharacter.name){
      Alert.alert("Add Character", `Do you wish to add ${myCharacter.name}?`, 
      [
        {text: "Yes", onPress: () => addCharacter(myCharacter)},
        {text: "No", onPress: () => console.log("Nope")},
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
              Enter that number below. Note that the character must be public.
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
