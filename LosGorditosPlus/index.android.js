import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  AppRegistry
} from 'react-native';
import MenuBar from './app/components/MenuBar';
import MenuDetail from './app/components/MenuDetail';
import LocationDetail from './app/components/LocationDetail';
import ContactForm from './app/components/ContactForm';

/**
 * Clase: LosGorditosPlus
 * 
 * Objetivo: Punto de inicio de la aplicación.
 *           Uso de escenas Flux para mostrar las pantallas secundarias de la aplicación.
 */

export default class LosGorditosPlus extends Component {
  render() {
    return (
      /**
      * Instanciación del componente Router de la Libreria Flux
      */

      <Router>
        /** Conjunto de Scenas a mostrar, indicando la raiz y la posicion inicial 
        * Props:
        *     hideNavBar: Oculta la bara de navegación
        *     initial: Establece cual es la primera escena a mostrar
        *     key: Llave de acceso por la cual se invoca la escena
        *     component: Componente a instanciar
        */
        <Scene key="root" hideNavBar>
          <Scene key="MenuBar" component={MenuBar} initial={true} />
          <Scene key="MenuDetail" component={MenuDetail} />
          <Scene key="LocationDetail" component={LocationDetail} />
          <Scene key="ContactForm" component={ContactForm} />
        </Scene>
      </Router>
    )
  }
}

/** Registro del punto de inicio */
AppRegistry.registerComponent('LosGorditosPlus', () => LosGorditosPlus);

