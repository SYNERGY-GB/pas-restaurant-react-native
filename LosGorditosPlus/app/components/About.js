import React, { Component } from 'react';
import { View,ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/About_style';
import Accordion from 'react-native-collapsible/Accordion';
import LocationList from './LocationList';

/**
* Información a mostrar
*/

var fake_data =[{location: 'Altamira', mensaje: "Abierto hasta 9:00 pm", 
                    coord: {
                      latitude: 10.498086655450642,
                      longitude: -66.85348734185897,
                      },
                    dir: 'Synergy-Gb, Piso 3 Centro Gerencial Mohedano,Avenida Los Chaguaramos, Caracas, Distrito Capital',
                    contacto: {
                      gerente: 'Alexander Ramirez',
                      movil: '0412-1232233',
                      fijo: '0212-1233322',
                    }},
                 {location: 'La Castellana', mensaje: "Abierto hasta 8:00 pm",
                    coord: {
                      latitude: 10.50,
                      longitude: -66.86,
                      },
                    dir: 'Los Jardines,Avenida Los Samám, Caracas, Distrito Capital',
                    contacto: {
                      gerente: 'Ali Suarez',
                      movil: '0412-1232233',
                      fijo: '0212-1233322',
                    }},
                 {location: 'Carrizal', mensaje: "Abierto hasta 8:00 pm", 
                    coord: {
                      latitude: 10.347091,
                      longitude: -66.992912,
                      },
                    dir: 'C.C La Cascada, Nivel Feria, Los Teques, Miranda',
                    contacto: {
                      gerente: 'Eduardo Pisapia',
                      movil: '0412-1232233',
                      fijo: '0212-1233322',
                    }},
                ]
/**
* Información que recibira el accordion
*/
const SECTIONS = [
  {
    title: 'Reseña',
    content: <Text style={styles.content_text}>Gorditos+ cuando un plato no es suficiente</Text>,
  },
  {
    title: 'Ubicación',
    content: <LocationList fake_data={fake_data}/>,
  }
];

/**
* Clase: About
* Pantalla de Información
* 
* Objetivo: Mostrar la Reseña y lista de ubicaciones del sitio de comida rapida por medio de un Accordion.
*/


export default class About extends Component {
  
  /**
  * Función para renderizar las cabeceras del Accordion
  * params:
  *        section: Contiene la información de los headers.
  *        index: Posición de la cabecera.
  *        isActive: Variable booleana de control que indica si esta abierto el contenido de la cabecera.
  */

  _renderHeader(section, index, isActive) {
    return (
      <View style={isActive ? styles.header_on : styles.header_off}>
        <Text style={ styles.headerText}>{section.title}</Text>
        <Image style={styles.buttom} source={ isActive ? require('./resources/1_Icons/recursos-11.png') : require('./resources/1_Icons/recursos-12.png')}/>
      </View>
    );
  }
 
  /**
  * Función para renderizar el contenido de la cabecera.
  * params:
  *        section: Contiene la información del contenido.
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
   * Componente Accordion
   * Props: underlayColor: Color del Overlay que se genera al presionar el header.
   *        sections: Información a ser mostrada en el Accordion (cabeceras y contenido)
   *        renderHeader: Función que renderiza la cabecera
   *        renderContent: Función que renderiza el contenido
   */
    return (
      <View style={styles.container}>
        <View style={styles.img_container}>
          <Image style={styles.logo} source={require('./resources/3_Logos/menu_logo.png')}/>
        </View>
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