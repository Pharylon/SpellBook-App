import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { GetCharacter } from "../Utility/characterService";
import { NavigationStackScreenProps } from "react-navigation-stack";
import Styles from "./Styles";
import AddCharacterScreen from "./AddCharacter";
import CharacterStore, { CharacterMap } from "../Utility/CharacterStore";
import { TouchableHighlight } from "react-native-gesture-handler";


export default function CharacterSelect(props: NavigationStackScreenProps) {
  const [characterList, updateCharacterList] = useState<CharacterMap[]>([]);
  async function LoadCharacterList() {
    const myCharacters = await CharacterStore.getCharacterList();
    updateCharacterList(myCharacters);
  }
  useEffect(() => {
    LoadCharacterList();
  }, []);
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
