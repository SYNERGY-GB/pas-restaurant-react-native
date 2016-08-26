'use strict';
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native';
import TabMenuList from './TabMenuList';
import MenuView from './MenuView';
import Location from './Location';
import About from './About';
import Contact from './Contact';
import DrawerContent from './DrawerContent';
import Drawer from 'react-native-drawer';
import styles from './styles/MenuBar_style';
import { Actions } from 'react-native-router-flux';

/**
* Clase: MenuBar
* Menu de navegacion de la aplicacion
* 
* Objetivo: Mostrar el menu de navegacion y renderizar los componentes respectivos a la opcion seleccionada
*/
class MenuBar extends Component {

  /**
  * Constructor de la Clase
  * state: 
  *        drawerOpen: Controla la visibilidad del drawerMenu
  *        drawerDisabled: Controla la funcionalidad del drawer
  * props:
  *        bg: Establece la direccion de la imagen de fondo 
  *        ts: Establece el estilo que tendra el titulo de la pantalla
  *        selected_page: Valor numerico con el cual se selecciona el componente a renderizar
  *        page_title: Titulo de la pantalla
  *        selectedTab: Valor numerico que indica la categoria Tab seleccionada

  */
  constructor(props){
    super(props);
    this.state={
      drawerOpen: false,
      drawerDisabled: false,
    }
  }

  // Funcion para cerrar el drawer Menu
  closeDrawer = () => {
    this._drawer.close()
  }

  // Funcion para abrir el drawer menu
  openDrawer = () => {
    this._drawer.open()
  }

  render() {
    var bg = this.props.bg ? require('./resources/6_BG/bg2.png') : require('./resources/6_BG/bg.png');
    var title_style = this.props.ts ? styles.container_title : styles.container_title_b 
    return (
      <Image style={styles.bg} source={bg} >
        {
          //Declaracion del Drawer
        }
        <Drawer
          ref={(ref) => this._drawer = ref}
          type="overlay"
          // Contenido a mostrar en el Menu
          content={
            <DrawerContent onClose={this.closeDrawer} selected_page={this.props.selected_page}/>
          }
          acceptDoubleTap
          onOpen={() => {
            this.setState({drawerOpen: true})
          }}
          onClose={() => {
            this.setState({drawerOpen: false})
          }}
          captureGestures={false}
          tweenDuration={200}
          panThreshold={0.50}
          disabled={this.state.drawerDisabled}
          openDrawerOffset={(viewport) => {
            return 100
          }}
          closedDrawerOffset={() => 0}
          panOpenMask={0.2}
          negotiatePan
          >
            {
            // Inicio del contenido de la pantalla
            // Barra de Navegacion
            }
            <View style={title_style} >
                <TouchableOpacity style={styles.menu_icon} onPress={()=>{
                  this._drawer.open()
                }}>
                  <Image style={styles.menu_icon} source={require('./resources/1_Icons/recursos-01.png')} />
                </TouchableOpacity>
                <Text style={styles.page_title}> {this.props.page_title} </Text>       
            </View>


            { // Funcion que selecciona segun el props Selected_page la pantalla a renderizar
              (() => {
              switch (this.props.selected_page) {
                case 0: return <MenuView />;
                case 1: return <About />;
                case 2: return <Contact />;
                case 3: return <Location/>;
                case 4: return <TabMenuList selectedTab={ this.props.selectedTab } />
                default: return <MenuView/>;
              }
            })()}
        </Drawer>
      </Image>
    );
  }
}

// Una forma de exportar la clase.
module.exports = MenuBar;