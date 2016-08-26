import React, { Component } from 'react';
import { View,ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/Contact_style';
import Accordion from 'react-native-collapsible/Accordion';
import Contact_container from './Contact_container';

/**
* Información a mostrar
*/

var fake_data =[{location: 'Altamira', gerente: 'Alexander Ramirez', movil: '0412-1232233', fijo: '0212-1233322' },
                {location: 'La Castellana' ,gerente: 'Ali Suarez', movil: '0412-1232233', fijo: '0212-1233322'},
                {location: 'Carrizal', gerente: 'Eduardo Pisapia', movil: '0412-1232233', fijo: '0212-1233322'},
                ]

/**
* Clase: Contact
* Pantalla de Contacto
* 
* Objetivo: Mostrar la Reseña y lista de ubicaciones del sitio de comida rapida por medio de un Accordion.
*/

export default class Contact extends Component {

  /**
  * Constructor de la Clase
  * state: title: Titulo de la sede que se muestra en el header del accordion.
  *        selected: Numero de la sede seleccionada, se utiliza para setear la posicion del array fake_data
  *        show: Controla el contenido a mostrar en la seleccion de la sede
  */
  constructor(props) {
    super(props);
    this.state = {
      title: 'Selección de Sede',
      selected: 0,
      show: false
    };
  }


  /**
  * Función para renderizar las cabeceras del Accordion
  * params:
  *        section: Contiene la información de los headers.
  *        index: Posición de la cabecera.
  *        isActive: Variable booleana de control que indica si esta abierto el contenido de la cabecera.
  */


  _renderHeader(section, index, isActive) {
  /**
  * Como el atributo title de la varible SECTIONS es un componente solo requerimos invocarlo
  */
    return (
      <View style={isActive ? styles.header_on : styles.header_off}>
        {section.title}
        <Image style={styles.buttom} source={ isActive ? require('./resources/1_Icons/recursos-11.png') : require('./resources/1_Icons/recursos-12.png')}/>
      </View>
    );
  }


  /**
  * Función para renderizar el contenido de la cabecera.
  * params:
  *         section: Contiene la información del contenido.
  */

  _renderContent(section) {
  /**
  * Como el atributo content de la varible SECTIONS es un componente solo requerimos invocarlo
  */
    return (
      <View style={styles.header_off}>
        {section.content}
      </View>
    );
  }

  render() {

    /**
    * Información que recibira el accordion.
    * Nota: En este caso se definio dentro del Render para poder acceder al estado de la clase.
    */
    const SECTIONS = [
      {
        title:  <Text style={ styles.headerText}>General</Text>,
        content: <Contact_container gerente={fake_data[0].gerente} fijo={fake_data[0].fijo} movil={fake_data[0].movil}/>,
      },
      {
        title: <TouchableOpacity onPress={()=> {
                  this.setState({show: false})
                }}>
                  <Text style={ styles.headerText}>{this.state.title}</Text>
                </TouchableOpacity>,
        content: this.state.show ? 
          <Contact_container gerente={fake_data[this.state.selected].gerente} fijo={fake_data[this.state.selected].fijo} movil={fake_data[this.state.selected].movil}/> 
          : 
          <View>
            <TouchableOpacity onPress={()=>{
              this.setState({title: 'Altamira', selected: 0, show: true})
              }}>
              <Text style={styles.text}>{fake_data[0].location}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              this.setState({title: 'Carrizal', selected: 2, show: true}) 
              }}>
              <Text style={styles.text}>{fake_data[2].location}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              this.setState({title: 'La Castellana', selected: 1, show: true}) 
              }}>
              <Text style={styles.text}>{fake_data[1].location}</Text>
            </TouchableOpacity>          
          </View>,
      },
    ];


    /**
     * Componente Accordion
     * Props: underlayColor: Color del Overlay que se genera al presionar el header.
     *        sections: Información a ser mostrada en el Accordion (cabeceras y contenido)
     *        renderHeader: Función que renderiza la cabecera
     *        renderContent: Función que renderiza el contenido
     */

    return (
      <View style={styles.container}>
        <View style={styles.accordion}>
          <Accordion
            underlayColor='white'
            sections={SECTIONS}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent} />          
        </View>
      </View>  
    );
  }
}