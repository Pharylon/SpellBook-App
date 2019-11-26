import React, { useEffect, useState } from "react";
import {Text} from "react-native";
import BeyondFile, {Spell, BeyondCharacter } from "../Models/BeyondCharacter";
import { sortMultipleSpells } from "./spellLevel";
import SpellBook from "./SpellBook";
import CharacterStore from "../Utility/CharacterStore";
import { NavigationStackScreenProps } from "react-navigation-stack";

export default function BeyondFileView(props: NavigationStackScreenProps) {
  const [file, setFile] = useState<BeyondCharacter | undefined>(undefined);
  async function UpdateBeyondFile(id: number) {
    if (id) {
      const myFile = await CharacterStore.getCharacter(id);
      setFile(myFile);
    }
  }

  useEffect(() => {
    const myId = props.navigation.getParam("id");
    if (myId){
      const parsed = parseInt(myId, 10);
      if (parsed && (!file || parsed !== file.id)){
        UpdateBeyondFile(myId);
      }
    }    
  });
  //const file = CharacterStore.getCharacter(props.navigation.getParam("id"));
  const getClassSpells = (className: string) => {
    const myClass = file.classes.find(x => x.definition.name === className);
    if (myClass){
      const myClassSpells = file.classSpells.find(x => x.entityTypeId === myClass.entityTypeId);
      if (myClassSpells){
        return myClassSpells.spells;
      }
      
    }
  };
  const getAllClassSpells = () => {
    const allClassSpells: Spell[] = [];
    if (file.classSpells){
      file.classSpells.forEach(cs => allClassSpells.push(...cs.spells));
    }
    
    return allClassSpells;
  };
  if (!file){
    return (<Text>No Info Loaded</Text>);
  }
  const classSpells = getAllClassSpells();
  // const itemSpells = file.spells.item;
  // const featSpells = file.spells.feat;
  const allSpells = [...classSpells, ...file.spells.item, ...file.spells.feat];
  allSpells.sort((a, b) => a.definition.name > b.definition.name ? 1 : -1);
  //const spellsByLevel = [];
  if (allSpells.length > 0){ 
    return (
      <SpellBook nav={props} spells={allSpells} />
      // <Text>Yes spells</Text>
    );
  }
  else{
    return (
      <Text>No spells</Text>
    );
  }
}

