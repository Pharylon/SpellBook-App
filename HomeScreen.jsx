import React, { useState } from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import { Button } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";

export default class CharactersScreen extends React.Component<NavigationStackScreenProps> {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Test', {name: 'Jane'})}
      />
    );
  }
}


