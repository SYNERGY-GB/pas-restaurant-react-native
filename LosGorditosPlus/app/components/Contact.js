import React, { Component } from 'react';
import { View,ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/Contact_style';
import Accordion from 'react-native-collapsible/Accordion';
import Contact_container from './Contact_container';

var fake_data =[{location: 'Altamira', gerente: 'Alexander Ramirez', movil: '0412-1232233', fijo: '0212-1233322' },
                {location: 'La Castellana' ,gerente: 'Ali Suarez', movil: '0412-1232233', fijo: '0212-1233322'},
                {location: 'Carrizal', gerente: 'Eduardo Pisapia', movil: '0412-1232233', fijo: '0212-1233322'},
                ]

const SECTIONS = [
  {
    title: 'General',
    content: <Contact_container gerente={fake_data[0].gerente} fijo={fake_data[0].fijo} movil={fake_data[0].movil}/>,
  },
];



export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Selección de Sede',
      selected: 0,
      show: false
    };
  }

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
        const DROP = [
      {
        title: ' ',
        content: this.state.show ? <Contact_container gerente={fake_data[this.state.selected].gerente} fijo={fake_data[this.state.selected].fijo} movil={fake_data[this.state.selected].movil}/> : <View>
                  <TouchableOpacity onPress={()=>{
                    this.setState({title: 'Altamira', selected: 0, show: true}),
                    isActive= false 
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
    return (
      <View style={styles.container}>
        <View style={styles.accordion}>
          <Accordion
            underlayColor='white'
            sections={SECTIONS}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent} />
          <View>
            <Accordion
              underlayColor='white'
              sections={DROP}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent} />
            <TouchableOpacity style={ styles.touch_drop} onPress={()=> {this.setState({show: false})}}>
              <Text style={ styles.headerText_drop}>{this.state.title}</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>  
    );
  }
}