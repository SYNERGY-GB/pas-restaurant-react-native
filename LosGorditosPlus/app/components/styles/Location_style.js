import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

const W_height = Dimensions.get('window').height;
const W_width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  container: {
    height: W_height,
    width: W_width,
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  label: {
  	marginTop: 5,
    opacity: 0.6,
    backgroundColor: '#ffc300',
    width: W_width,
  },
  text: {
  	fontSize: 18,
    padding: 5,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
  }
});