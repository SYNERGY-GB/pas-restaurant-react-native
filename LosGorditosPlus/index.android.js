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
import PageTwo from './PageTwo';

export default class LosGorditosPlus extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="MenuBar" component={MenuBar} initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('LosGorditosPlus', () => LosGorditosPlus);