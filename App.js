import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import  mainActivity  from './Pages/mainActivity.js';
import {transform} from 'react-transform-hmr'

const App = StackNavigator({
  mainActivity: {
    screen: mainActivity
  },
});
