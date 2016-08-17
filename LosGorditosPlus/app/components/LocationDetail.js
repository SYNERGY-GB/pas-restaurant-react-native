import React, { Component } from 'react';
import { View,ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/LocationDetail_Style';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';

export default class LocationDetail extends Component {
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
  centerOnUser(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.refs.map.refs.node.animateToCoordinate(position.coords)
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
  render() {
  return (
  	<Image style={styles.bg} source={require('./resources/6_BG/bg2.png')} >
	    <View style={styles.container_title} >
	        <TouchableOpacity style={styles.menu_icon} onPress={() => 
                    Actions.pop()
                  }>
	          <Image style={styles.menu_icon} source={require('./resources/1_Icons/recursos-10.png')} />
	        </TouchableOpacity>
	        <Text style={styles.page_title}>como llegar</Text>       
     	</View>
      
      <View style ={styles.container}>
    
        <MapView.Animated
          ref="map"
          showsUserLocation={true}
          followsUserLocation={true}
          style={styles.map}
          region={this.state.region}
          onRegionChange={(region)=> this.setState({region})} >
          <MapView.Marker
              coordinate={this.props.coords}
              image={require('./resources/1_Icons/recursos-33.png')}
              onPress={()=> this.centerOnUser()}/>
        </MapView.Animated>
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