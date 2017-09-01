import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { HomePage } from './Pages/homePage';

export default class App extends React.Component{
  render() {
    return (<MainNavigator />)
  }
}

const MainNavigator = StackNavigator({
  Home: { screen: HomePage },
});
