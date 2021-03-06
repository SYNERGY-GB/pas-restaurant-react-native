/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  AppRegistry
} from 'react-native';
import MenuBar from './app/components/MenuBar';
import MenuDetail from './app/components/MenuDetail';
import LocationDetail from './app/components/LocationDetail';
import ContactForm from './app/components/ContactForm';

export default class LosGorditosPlus extends Component {
  render() {
    return (
      <Router>
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

AppRegistry.registerComponent('LosGorditosPlus', () => LosGorditosPlus);

