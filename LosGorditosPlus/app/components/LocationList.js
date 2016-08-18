import React, { Component } from 'react';
import { View, ListView, ActivityIndicator, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/LocationList_style';
import { Actions } from 'react-native-router-flux';

export default class LocationList extends Component {
  constructor(props) {
      super(props);

      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      this.state= {
          dataSource: ds.cloneWithRows(this.props.fake_data)
      };
  }

  changeView(coord, description, contacto) {
      Actions.LocationDetail({coords: coord, dir: description, contact:contacto})
  }

  renderLocation(data){
    return (
      <View style={(data.location==='La Castellana') ? styles.last_container : styles.location_container}>
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