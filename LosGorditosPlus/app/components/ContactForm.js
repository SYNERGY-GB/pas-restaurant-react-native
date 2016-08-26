import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles/ContactForm_style';
import { Actions } from 'react-native-router-flux';

/**
* Clase: ContactForm
* Pantalla secundaria de Contacto
* 
* Objetivo: Muestra el formulario estandar para enviar un mensaje a la sede.
*/

export default class ContactForm extends Component {

  /**
  * Constructor de la Clase
  * state: nombre: Contenido a mostrar en el TextInput nombre.
  *        email: Contenido a mostrar en el TextInput email.
  *        mensaje: Contenido a mostrar en el TextInput mensaje.
  */
  constructor(props) {
    super(props);
    this.state = {
      nombre: '123',
      email: 'email',
      mensaje: 'Mensaje ...'
    };
  }


  render() {
  return (      
   <Image style={styles.bg} source={require('./resources/6_BG/bg2.png')} >
      <View style={styles.container_title} >
          <TouchableOpacity style={styles.menu_icon} onPress={() =>
                    // Accion para deshacer la ultima accion flux 
                    Actions.pop()
                  }>
            <Image style={styles.menu_icon} source={require('./resources/1_Icons/recursos-10.png')} />
          </TouchableOpacity>
          <Text style={styles.page_title}>contactar</Text>       
      </View>
      
      <View style ={styles.container}> 
        <View style={styles.label}>
          <TextInput maxLength = {60}
            style={styles.text_input_a} 
            onChangeText={(nombre) => this.setState({nombre})} 
            value={ this.state.nombre }/>
        </View>
        <View style={styles.label}>
         <TextInput maxLength = {60}
          keyboardType="email-address"
          style={styles.text_input_a} 
          onChangeText={(email) => this.setState({email})} 
          value={this.state.email}/>
        </View>
        <View style={styles.label_b}>
          <TextInput 
            multiline = {true}
            maxLength = {300}
            style={styles.text_input_b} 
            onChangeText={(mensaje) => this.setState({mensaje})} 
            value={this.state.mensaje}/>
        </View>
        <TouchableOpacity style={styles.bottom_b} onPress={()=> {
          this.setState({nombre: 'Nombre', email: 'email', mensaje: 'Mensaje ...'});
          alert('Mensaje Enviado')}}>
          <Text style={styles.bottom_b_text}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </Image>
  );
}
}