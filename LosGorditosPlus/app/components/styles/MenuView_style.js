import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

const W_height = Dimensions.get('window').height;
const W_width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 10,
      paddingBottom: 50
  },

  img_logo: {
    width: 48,
    height: 48
  },

  text_logo: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'

  },

  logo: {
    alignItems: 'center',
  }

});