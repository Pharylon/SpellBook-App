import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { GetCharacter } from "../Utility/characterService";
import { NavigationStackScreenProps } from "react-navigation-stack";
import Styles from "./Styles";
import AddCharacterScreen from "./AddCharacter";
import CharacterStore, { CharacterMap } from "../Utility/CharacterStore";
import { TouchableHighlight } from "react-native-gesture-handler";


export default function CharacterSelect(props: NavigationStackScreenProps) {
  const newId: number = props.navigation.getParam("newId");
  console.log("NewId", newId);
  const [characterList, setCharacterList] = useState<CharacterMap[]>([]);
  async function LoadCharacterList() {
    const myCharacters = await CharacterStore.getCharacterList();
    console.log("CharList", myCharacters, characterList);
    const existingCharacterIds = characterList.map(x => x.id);
    if (myCharacters.some(x => !existingCharacterIds.includes(x.id))){
      console.log("Running Set", myCharacters, characterList);
      setCharacterList(myCharacters);
    }    
  }
  useEffect(() => {
    console.log("UseEffect");
    LoadCharacterList();
  });
  return (
    <View style={Styles.characterScreen}>
      <View>
        {
          characterList.map(x => (
            <TouchableHighlight 
              onPress={() => props.navigation.navigate("ViewCharacter", {id: x.id})}
            key={x.id}>
              <View style={Styles.characterEntryView}>
                <Text style={Styles.characterEntry}>{x.name}</Text>
              </View>
            </TouchableHighlight>
          ))
        }
      </View>
      <View style={Styles.addCharacterButton}>
        <View style={Styles.innerAddCharacterButton}>
          <Button
            title={"Add A Character"}
            onPress={() => props.navigation.navigate("AddCharacter")}
          />
        </View>
      </View>
    </View>
  );
}

CharacterSelect.navigationOptions = () => ({title: "Characters"});
