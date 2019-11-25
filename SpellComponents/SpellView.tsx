import React from "react";
// tslint:disable-next-line:max-line-length
import { Spell, Activation, DefinitionRange, Origin, ItemDefinition, Duration, DurationType } from "../Models/BeyondCharacter";
import { View, WebView, Text } from "react-native";
import { HeaderTitle, NavigationStackScreenProps } from "react-navigation-stack";

export interface ISpellViewProps {
  spell: Spell;
}

export default function SpellView(props: NavigationStackScreenProps) {
  const spell = props.navigation.getParam("spell");
  return (
    <View style={{ marginBottom: 10 }}>
      <HeaderTitle>{spell.definition.name}</HeaderTitle>
      <View>
        <Text>Casting Time: {getCastingTime(spell.definition.activation)}</Text>
        <Text>Range: {getRange(spell.definition)}</Text>
        <Text>Duration: {getDuration(spell.definition)}</Text>
        <Text>Components: {getComponents(spell.definition.components)}</Text>
        {
          spell.definition.requiresSavingThrow && (
            <Text>Save: {getSave(spell.definition.saveDcAbilityId)}</Text>
          )
        }
      </View>
      {/* <View>Casting Time: {getCastingTime(this.props.spell.definition.activation)}</View>
        <View>Range: {getRange(this.props.spell.definition)}</View>
        <View>Duration: {getDuration(this.props.spell.definition)}</View>
        <View>Components: {getComponents(this.props.spell.definition.components)}</View>
        {
          this.props.spell.definition.requiresSavingThrow && (
            <View>Save: {getSave(this.props.spell.definition.saveDcAbilityId)}</View>
          )
        }
        {
          this.props.spell.definition.componentsDescription && (
            <View>
              <View>Material: {this.props.spell.definition.componentsDescription}</View>
            </View>
          )
        }
         */}
      {/* <WebView source={{html: spell.definition.description.trim()}}/> */}
    </View>
  );
}

const getSave = (save: number | null) => {
  if (save === 1) {
    return "Strength";
  }
  if (save === 2) {
    return "Dexterity";
  }
  if (save === 3) {
    return "Constitution";
  }
  if (save === 4) {
    return "Intelligence";
  }
  if (save === 5) {
    return "Wisdom";
  }
  if (save === 6) {
    return "Charisma";
  }
  console.log("Unknown Save", save);
};

const getComponents = (components: number[]) => {
  const mapped = components.map(x => x === 1 ? "V" : x === 2 ? "S" : "M");
  const joined = mapped.join(", ");
  return joined;
};

const getDuration = (spell: ItemDefinition) => {
  const duration: Duration = spell.duration;
  if (duration.durationType === DurationType.Instantaneous) {
    return "Instantaneous";
  }
  if (duration.durationType === DurationType.UntilDispelled) {
    return DurationType.UntilDispelled;
  }
  if (duration.durationType === DurationType.UntilDispelledOrTriggered) {
    return DurationType.UntilDispelledOrTriggered;
  }
  if (duration.durationType === DurationType.Concentration) {
    return `${duration.durationInterval} ${duration.durationUnit} (Concentration)`;
  }
  if (duration.durationType === DurationType.Time) {
    return `${duration.durationInterval} ${duration.durationUnit}`;
  }
  console.log("Unknown Duration", duration, spell.name);
};

const getRange = (spell: ItemDefinition) => {
  const range: DefinitionRange = spell.range;
  if (range.origin === Origin.Self && !range.rangeValue && !range.aoeValue) {
    return "Self";
  }
  else if (range.origin === Origin.Unlimited) {
    return "Unlimited";
  }
  else if (range.origin === Origin.Touch) {
    return "Touch";
  }
  else if (range.origin === Origin.Sight) {
    return "Sight";
  }
  else if (range.origin === Origin.Self && range.aoeValue && range.aoeType) {
    return `Self (${range.aoeValue} ${range.aoeType})`;
  }
  else if (range.rangeValue && range.aoeValue && range.aoeType) {
    return `${range.rangeValue} ft (${range.aoeValue} ${range.aoeType})`;
  }
  else if (range.rangeValue && !range.aoeValue && !range.aoeType) {
    return `${range.rangeValue} ft`;
  }
  else if (range.rangeValue && range.aoeType) {
    return `${range.rangeValue} ft (${range.aoeValue} ${range.aoeType})`;
  }
  else if (range.rangeValue) {
    console.log("Weird Range", range, spell.name);
    return `${range.rangeValue} ft)`;
  }
  console.log("Unknown Range", range, spell.name);
};



const getCastingTime = (activation: Activation) => {
  const timeAmount = (activation.activationTime || 0);
  if (activation.activationType === 1) {
    return `${timeAmount} action`;
  }
  if (activation.activationType === 3) {
    return `${timeAmount} bonus action`;
  }
  if (activation.activationType === 4) {
    return `${timeAmount} reaction`;
  }
  if (activation.activationType === 6) {
    const timeIncrement = timeAmount === 1 ? "minute" : "minutes";
    return `${timeAmount} ${timeIncrement}`;
  }
  if (activation.activationType === 7) {
    const timeIncrement = timeAmount === 1 ? "hour" : "hours";
    return `${timeAmount} ${timeIncrement}`;
  }
  if (activation.activationType === 8) {
    return "Special";
  }
  return timeAmount.toString();
};
