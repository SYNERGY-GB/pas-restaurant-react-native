'use strict';
import React, { Component } from 'react';
import {
    Image,
	StyleSheet,
    Text,
    ListView,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
	View
} from 'react-native';
import styles from './styles/MenuList_style';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import { Actions } from 'react-native-router-flux';

/**
* Clase: MenuList
* Componente que lista los platos del sitio de comida, muestra la imagen, nombre, precio y ranking del plato
*/

class MenuList extends Component {
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
  * Funcion para cambiar la pantalla o escena
  * param: value: Valor a ser evaluado para escojer la pantalla a cambiar.
  *        data: Contiene la informacion de un plato
  * Nota: Esta funcion es llamada desde el menu interno de cada plato, la idea es que en base a la opcion seleccionada
  * (value) se redirija a distintas pantallas o cambiar los datos que se pasan esta seria la implementacion (2 opciones), 
  * sin embargo, como no se desarrollaran las pantallas de las opciones ajenas a ver el detalle ambos casos se redirije a la
  * misma escena
  */
  changeView(value, data) {
    if (value === 0) {
      // Funcion Flux para invocar la escena LocationDetail con los props coords, dir, contact
      Actions.MenuDetail({plato: data})
    }
    else {
      // Funcion Flux para refrescar el contexto y pasamos los props page_title, selected_page para 
      // actualizar la navegacion del MenuBar para renderizar la pantalla de contacto
      Actions.refresh({page_title: 'contacto', selected_page: 2})
    }
  }

 /**
  * Funcion para renderizar una Fila
  * param: data: Informacion del plato con los atributos de img, title, rank, price
  *        data.location: Nombre de la zona (ej. Altamira)
  *        data.mensaje: Mensaje que indica la hora en que cierra la sede
  */
  renderMenu(data){
    return (
      data.last ? <View style={styles.img}/> :
      <View style={styles.containerMenu}>
        <Image style={styles.img} source={data.img}/>
        <View style={styles.bg}>
          <View style={styles.rowStyle}>
            <Text style={styles.title}>{data.title}</Text>    
              <Menu style={styles.img_menu} onSelect={(value) => this.changeView(value,data)}>
                <MenuTrigger style={styles.img_menu}>
                  <Image style={styles.img_menu} source={require('./resources/1_Icons/recursos-07.png')} />
                </MenuTrigger>
                <MenuOptions optionsContainerStyle={styles.dropdownOptions}>
                  <MenuOption  value={0}>
                      <Text style={styles.dropText}>Detalle</Text>
                  </MenuOption>
                  <MenuOption value={1}>
                    <Text style={styles.dropText}>Pedir</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>           
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.price}>{data.price}</Text>
            <Image style={styles.img_menu} source={require('./resources/1_Icons/recursos-08.png')}/>
          </View>
        </View>
      </View>
    );
  }
  
  render() { 
    return (
        <MenuContext style={{ flex: 1 }}>
          <ListView
            style={styles.container}
            dataSource={this.state.dataSource}
            renderRow={(data) => this.renderMenu(data)}/>
        </MenuContext>
    );
  }
}
 
// Exportamos la clase
module.exports = MenuList;