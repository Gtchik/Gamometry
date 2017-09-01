import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";

export class HomePage extends React.Component {
  render() {
    return (
      <Grid>
       <Row size={3} style={{backgroundColor:'#0ff', justifyContent: 'flex-start', alignItems: 'center'}}>
         <Image source={require('../assets/icons/trad.png')} style={{height: 30, width: 30}}
         />
       </Row>
       <Row size={8} style={{backgroundColor:'#fff'}}>
        <Text>dfsghsdh</Text>
       </Row>
       <Row size={3} style={{backgroundColor:'#0f0'}}>
       </Row>
      </Grid>
    );
  }
}
