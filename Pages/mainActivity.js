import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class App extends React.Component {
  render() {
    return (
      <Grid>
       <Row size={3} style={{backgroundColor:'#0ff', justifyContent: 'flex-start', alignItems: 'center'}}>
         <Image
         source={require('../Image/logo.png')}
         />
       </Row>
       <Row size={8} style={{backgroundColor:'#fff'}}>
       </Row>
       <Row size={3} style={{backgroundColor:'#0f0'}}>
       </Row>
      </Grid>
    );
  }
}
