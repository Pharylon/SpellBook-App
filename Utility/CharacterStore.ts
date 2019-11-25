import {AsyncStorage} from "react-native";
import { BeyondCharacter } from "../Models/BeyondCharacter";

const characterListKey = "characterList";

export interface CharacterMap {
  id: number;
  name: string;
}

const CharacterStore = {
  saveCharacter: async (character: BeyondCharacter) => {
    const asJson = JSON.stringify(character);
    try {
      AsyncStorage.setItem(character.id.toString(), asJson);
      const charMap = await CharacterStore.getCharacterList();
      console.log("CharMap", charMap);
      if (!charMap.find(x => x.id === character.id)){
        const newCharMap = [...charMap, {id: character.id, name: character.name}];
        console.log("NewCHarMap", newCharMap);
        await CharacterStore.saveCharacterList(newCharMap);
      }
    } catch (e) {
      console.log("Save Character Error", e);
    }
  },

  getCharacter: async (id: number) => {
    try {
      const json = await AsyncStorage.getItem(id.toString());
      if (json !== null) {
        const charFile = JSON.parse(json) as BeyondCharacter;
        return charFile;
      }
    } catch (e) {
      console.log("getCharacter Error", e);
    }
  },

  getCharacterList: async () => {
    try {
      const json = await AsyncStorage.getItem(characterListKey);
      // console.log("CharList", json);
      if (json) {
        const characterList = JSON.parse(json) as CharacterMap[];
        if (characterList.length){
          return characterList;
        }        
      }
      return [];
    } catch (e) {
      console.log("getCharacterList Error", e);
    }
  },

  saveCharacterList: async (characterList: CharacterMap[]) => {
    try {
      const asJson = JSON.stringify(characterList);
      AsyncStorage.setItem(characterListKey, asJson);
    } catch (e) {
      console.log("saveCharacterList Error", e);
    }
  },

};

export default CharacterStore;
