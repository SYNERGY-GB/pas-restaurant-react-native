import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles/Location_style';
import { Actions } from 'react-native-router-flux';

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

export default class Location extends Component {
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
	changeView(coord, description, contacto) {
	    Actions.LocationDetail({coords: coord, dir: description, contact:contacto})
	}

  render() {
  return (
    <View style ={styles.container}>
      <MapView
        style={styles.map}
        region={this.state.region}
        onRegionChange={(region)=> this.setState({region})} >
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