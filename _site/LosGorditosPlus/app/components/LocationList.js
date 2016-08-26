import React, { Component } from 'react';
import { View, ListView, ActivityIndicator, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/LocationList_style';
import { Actions } from 'react-native-router-flux';


/**
* Clase: LocationList
* Componente que lista las ubicaciones de las sedes, mostrando su direccion, horario y un punto de acceso a la pantalla
* secundaria LocationDetail
* 
*/

export default class LocationList extends Component {

  /**
  * Constructor de la Clase
  * state: 
  *        dataSource: Contiene la informacion ordenada en fila para ser mostrada en la lista.
  * props:
  *        fake_data: Array que contiene la informacion a mostrar
  * var:
  *        ds: Variable de control para el manejo de las filas
  */
  constructor(props) {
      super(props);
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      this.state= {
          dataSource: ds.cloneWithRows(this.props.fake_data)
      };
  }

  /**
  * Funcion para llamar a la escena ContactForm
  * param: coord: coordenadas de la sede seleccionada.
  *        description: Direccion de la sede en texto plano
  *        contacto: Variable que contiene la data de la sede para el contacto
  */
  changeView(coord, description, contacto) {
      // Funcion Flux para invocar la escena LocationDetail con los props coords, dir, contact
      Actions.LocationDetail({coords: coord, dir: description, contact:contacto})
  }

  /**
  * Funcion para renderizar una Fila
  * param: data: Variable con los atributos location, mensaje
  *        data.location: Nombre de la zona (ej. Altamira)
  *        data.mensaje: Mensaje que indica la hora en que cierra la sede
  */
  renderLocation(data){
    return (
      <View style={(data.location==='Carrizal') ? styles.last_container : styles.location_container}>
        <View>
          <Text style={styles.location}>{data.location}</Text>
          <Text style={styles.txt}>{data.mensaje}</Text>
        </View>
        <TouchableOpacity style={styles.img} onPress={() => this.changeView(data.coord, data.dir, data.contacto)}>
          <Image  style={styles.img} source={require('./resources/1_Icons/recursos-32.png')}/>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <ListView
        removeClippedSubviews={false}
        dataSource={this.state.dataSource}
        renderRow={(data) => this.renderLocation(data)}/> 
    );
  }
}