import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/CC_style';
import { Actions } from 'react-native-router-flux';


export default class Contact_container extends Component {
  render() {
  return (      
      <View style={styles.inf_container}>
        <View style={styles.row}>
          <Text style={styles.text_subtitle}>Gerente: </Text>
          <Text style={styles.text}>{this.props.gerente}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text_subtitle}>Oficina: </Text>
          <Text style={styles.text}>{this.props.fijo} </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text_subtitle}>Móvil: </Text>
          <Text style={styles.text}>{this.props.movil} </Text>
        </View>
        <TouchableOpacity onPress={()=>{Actions.ContactForm()}} style={styles.bottom_b}>
          <Text style={styles.bottom_b_text}>Contactar</Text>
        </TouchableOpacity>
      </View>
  );
}
}