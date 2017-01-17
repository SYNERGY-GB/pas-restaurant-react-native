import React, { Component } from 'react';
import { View,ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/LocationDetail_Style';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';

/**
* Clase: LocationDetail
* Pantalla secundaria de Ubicacion
* 
* Objetivo: Muestra en un mapa la geolocalizacion de una sede, su direccion e informacion de contacto
*/

export default class LocationDetail extends Component {

  /**
  * Constructor de la Clase
  * state: 
  *        region: Variable con los atributos latitude, longitude, latitudeDelta, longitudeDelta
  *        region.latitude: Latitud de la region
  *        region.longitude: Longitud de la posicion
  *        region.latitudeDelta: Valor entre 0 y 1 para indicar el zoom de la latitud
  *        region.longitudeDelta: Valor entre 0 y 1 para indicar el zoom de la longitud
  * props:
  *        coords: Variable con los atributos latitude, longitude
  *        coords.latitude: Valor de la latitud
  *        coords.longitude: Valor de la longitud
  *        contact: Variable con los atributos gerente, movil, fijo
  *        contact.gerente: Valor del Nombre del gerente
  *        contact.movil: Valor del numero del telefono movil de la sede
  *        contact.fijo: Valor del numero de telefono de la sede
  */
  constructor(props){
    super(props);
    this.state={
      region: {
        latitude: this.props.coords.latitude,
        longitude: this.props.coords.longitude,
        latitudeDelta: 0.0015,
        longitudeDelta: 0.0015,
      }
    }
  }

  render() {
  return (
  	<Image style={styles.bg} source={require('./resources/6_BG/bg2.png')} >
	    <View style={styles.container_title} >
	        <TouchableOpacity style={styles.menu_icon} onPress={() => 
                    // Deshacer la ultima accion flux
                    Actions.pop()
                  }>
	          <Image style={styles.menu_icon} source={require('./resources/1_Icons/recursos-10.png')} />
	        </TouchableOpacity>
	        <Text style={styles.page_title}>como llegar</Text>       
     	</View>
      
      <View style ={styles.container}>
      
        <MapView
          style={styles.map}
          // Region de la Geolocalizacion a mostrar
          region={this.state.region}
          // Funcion para seguir el movimiento del mapa actualizando la region a mostrar
          onRegionChange={(region)=> this.setState({region})} >
          {            
            // Colocar una marca en el mapa
            // Props: coordinate: Valor de las coordenadas (latitud y longitud)
            //        image: Diseno de la marca
          }
          <MapView.Marker
              coordinate={this.props.coords}
              image={require('./resources/1_Icons/recursos-33.png')}/>
        </MapView>
      </View>
      <View style={styles.inf_container}>
        <Text style={styles.text_title}>Dirección: </Text>
        <Text style={styles.text}>{this.props.dir} </Text>
      </View>
      <View style={styles.inf_container}>
        <Text style={styles.text_title}>Información de Contacto: </Text>
        <View style={styles.row}>
          <Text style={styles.text_subtitle}>Gerente: </Text>
          <Text style={styles.text}>{this.props.contact.gerente}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text_subtitle}>Oficina: </Text>
          <Text style={styles.text}>{this.props.contact.fijo} </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text_subtitle}>Móvil: </Text>
          <Text style={styles.text}>{this.props.contact.movil} </Text>
        </View>
      </View>
    </Image>
  );
}
}