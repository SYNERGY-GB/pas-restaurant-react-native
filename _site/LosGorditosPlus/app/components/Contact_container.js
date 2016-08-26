import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/CC_style';
import { Actions } from 'react-native-router-flux';

/**
* Clase: Contact_container
* Componente que muestra la informacion de contacto de una zona
* Props: gerente: Nombre del Gerente
*        movil: Numero de telefono movil
*        fijo: Nuemro de telefono de la oficina
* 
*/

export default class Contact_container extends Component {
  
  /**
  * Funcion para llamar a la escena ContactForm
  * param: infor: Informacion a pasar a la escena
  */
  changeView (infor) {
      Actions.ContactForm({info: infor})
  }

  
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
        <TouchableOpacity style={styles.bottom_b} onPress={() => this.changeView('props')}>
          <Text style={styles.bottom_b_text}>Contactar</Text>
        </TouchableOpacity>
      </View>
  );
}
}