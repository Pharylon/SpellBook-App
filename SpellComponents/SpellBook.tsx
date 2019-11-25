import React, { useState } from "react";
import SpellView from "./SpellView";
import {SpellLevelCollection} from "./spellLevel";
import { View, Text, StyleSheet } from "react-native";
import { Spell } from "../Models/BeyondCharacter";
import { FlatList, TextInput, TouchableHighlight } from "react-native-gesture-handler";
import { NavigationStackScreenProps } from "react-navigation-stack";


export default function SpellBook(props: {spells: Spell[], nav: NavigationStackScreenProps}){
  const [inputValue, setInputValue] = useState("");
  function getSpellsToShow(){
    if (inputValue){
      const toLower = inputValue.toLowerCase();
      return props.spells.filter(x => x.definition.name.toLowerCase().startsWith(toLower));
    }
    return props.spells;
  }
  function Item(itemProps: {spell: Spell}){
    return (      
      <TouchableHighlight onPress={() => props.nav.navigation.navigate("SpellView", {spell: itemProps.spell}) }>
        <View style={Styles.view}>
          <Text>{itemProps.spell.definition.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
  return (
    <View>
      <View>
      <TextInput
            style={Styles.input}
            placeholder="Filter Spells"
            value={inputValue}
            onChangeText={text => setInputValue(text)} />
      </View>
      <FlatList 
        data={getSpellsToShow()}
        keyExtractor={item => item.id.toString()}
        renderItem={(s) => <Item spell={s.item}/>}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  view: {
    height: 50,
    display: "flex",
    borderBottomWidth: 1,
    borderColor: "#ebf1fa",
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "column",
  },
  input: {
    borderColor: "black",
    // borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#dce7f7",
    fontSize: 30,
    marginBottom: 5,
  },
});
