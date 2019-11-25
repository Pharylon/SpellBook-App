import React, { useState } from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator, HeaderTitle} from "react-navigation-stack";
import { Button } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import AddCharacterScreen from "./Characters/AddCharacter";
import BeyondFileView from "./SpellComponents/BeyondFileView";
import CharacterSelect from "./Characters/CharacterSelect";
import SpellView from "./SpellComponents/SpellView";

// tslint:disable-next-line:max-classes-per-file
class ProfileScreen extends React.Component<NavigationStackScreenProps> {
  static navigationOptions = {
    title: "Welcome",
  };
  render() {
    const {navigate} = this.props.navigation;
    const name = this.props.navigation.getParam("name");
    return (
      <Button
        title={"Return from " + name}
        onPress={() => navigate("Characters")}
      />
    );
  }
}


const MainNavigator = createStackNavigator({
  Home: {screen: CharacterSelect },
  Profile: {screen: ProfileScreen},
  AddCharacter: {screen: AddCharacterScreen},
  ViewCharacter: {screen: BeyondFileView },
  SpellView: {screen: SpellView },
});

const App = createAppContainer(MainNavigator);



export default App;
