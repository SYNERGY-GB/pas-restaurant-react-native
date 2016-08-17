import React, { Component } from 'react';
import { View,ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/About_style';
import Accordion from 'react-native-collapsible/Accordion';
import LocationList from './LocationList';

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
                 {location: 'Carrizal', mensaje: "Abierto hasta 8:00 pm",
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
                 {location: 'La Castellana', mensaje: "Abierto hasta 8:00 pm", 
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

export default class About extends Component {
  
  _renderHeader(section, index, isActive) {
    return (
      <View style={isActive ? styles.header_on : styles.header_off}>
        <Text style={ styles.headerText}>{section.title}</Text>
        <Image style={styles.buttom} source={ isActive ? require('./resources/1_Icons/recursos-11.png') : require('./resources/1_Icons/recursos-12.png')}/>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View style={styles.header_off}>
        {section.content}
      </View>
    );
  }

  render() {
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