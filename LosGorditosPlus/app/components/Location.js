import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles/Location_style';
import { Actions } from 'react-native-router-flux';

/**
* Información a mostrar
*/

const fake_data0 =[{	coord: {
              				latitude: 10.498086655450642,
              				longitude: -66.85348734185897,
            					},
            				dir: 'Synergy-Gb, Piso 3 Centro Gerencial Mohedano,Avenida Los Chaguaramos, Caracas, Distrito Capital',
            				contacto: {
            					gerente: 'Alexander Ramirez',
            					movil: '0412-1232233',
            					fijo: '0212-1233322',
            				}},
      				    {	coord: {
      				        latitude: 10.50,
      				        longitude: -66.86,
            					},
            				dir: 'Los Jardines,Avenida Los Samám, Caracas, Distrito Capital',
            				contacto: {
            					gerente: 'Ali Suarez',
            					movil: '0412-1232233',
            					fijo: '0212-1233322',
            				}
            			},
            			{	coord: {
      				        latitude: 10.347091,
      				        longitude: -66.992912,
            					},
            				dir: 'C.C La Cascada, Nivel Feria, Los Teques, Miranda',
            				contacto: {
            					gerente: 'Eduardo Pisapia',
            					movil: '0412-1232233',
            					fijo: '0212-1233322',
            				}
            			},
                      ]


/**
* Clase: Location
* Pantalla de Ubicacion
* 
* Objetivo: Muestra un mapa con las posiciones de las sedes
*/
export default class Location extends Component {

  /**
  * Constructor de la Clase
  * state: 
  *        region: Variable con los atributos latitude, longitude, latitudeDelta, longitudeDelta
  *        region.latitude: Latitud de la region
  *        region.longitude: Longitud de la posicion
  *        region.latitudeDelta: Valor entre 0 y 1 para indicar el zoom de la latitud
  *        region.longitudeDelta: Valor entre 0 y 1 para indicar el zoom de la longitud
  */
	constructor(props){
	    super(props);
	    this.state={
	      region: {
	            	latitude: 10.498086655450642,
	                longitude: -66.85348734185897,
	                latitudeDelta: 0.70,
	                longitudeDelta: 0.70,
	            }
	    }
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

  render() {
  return (
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
            //        onPress: Accion al realizar al precionar la marca
            }

            <MapView.Marker
               coordinate={fake_data0[0].coord}
               image={require('./resources/1_Icons/recursos-33.png')}
               onPress={() => this.changeView(fake_data0[0].coord, fake_data0[0].dir, fake_data0[0].contacto)}/>
            <MapView.Marker
               coordinate={fake_data0[1].coord}
               image={require('./resources/1_Icons/recursos-33.png')}
               onPress={() => this.changeView(fake_data0[1].coord, fake_data0[1].dir, fake_data0[1].contacto)}/>
            <MapView.Marker
               coordinate={fake_data0[2].coord}
               image={require('./resources/1_Icons/recursos-33.png')}
               onPress={() => this.changeView(fake_data0[2].coord, fake_data0[2].dir, fake_data0[2].contacto)}/>
        </MapView>
		  <View style={styles.label}>
       	<Text style={styles.text}>Seleccione un Establecimiento</Text>
      </View>
    </View>
  );
}
}