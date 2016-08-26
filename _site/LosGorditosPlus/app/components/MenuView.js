import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles/MenuView_style';

/**
* Clase: MenuView
* Pantalla principal para mostrar las categorias del menu
*/

class MenuView extends Component {
	render(){
		return (
		<View style={styles.container}> 
		
    	<TouchableOpacity style={styles.logo} onPress={() => Actions.refresh({page_title: 'favoritos', bg: true, ts: true, selected_page: 4, selectedTab: 0})}>
        <Image style={styles.img_logo} source={require('./resources/1_Icons/recursos-23.png')}/>
				<Text style={styles.text_logo}>favoritos</Text>
			</TouchableOpacity>
    
      <TouchableOpacity style={styles.logo} onPress={() => Actions.refresh({page_title: 'principales', bg: true, ts: true, selected_page: 4, selectedTab: 1})}>
        <Image style={styles.img_logo} source={require('./resources/1_Icons/recursos-24.png')}/>
        <Text style={styles.text_logo}>principales</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.logo} onPress={() => Actions.refresh({page_title: 'ensaladas', bg: true, ts: true, selected_page: 4, selectedTab: 2})}>
        <Image style={styles.img_logo} source={require('./resources/1_Icons/recursos-25.png')}/>
        <Text style={styles.text_logo}>ensaladas</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.logo} onPress={() => Actions.refresh({page_title: 'postres', bg: true, ts: true, selected_page: 4, selectedTab: 3})}>
        <Image style={styles.img_logo} source={require('./resources/1_Icons/recursos-26.png')}/>
        <Text style={styles.text_logo}>postres</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logo} onPress={() => Actions.refresh({page_title: 'bebidas', bg: true, ts: true, selected_page: 4, selectedTab: 4})}>
        <Image style={styles.img_logo} source={require('./resources/1_Icons/recursos-27.png')}/>
        <Text style={styles.text_logo}>bebidas</Text>
      </TouchableOpacity>
		
    </View>
		);
	}
};
// Exportamos la clase
module.exports = MenuView;