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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: W_height*0.08,
  },
  icon: {
    width: W_width*0.08, 
    height: W_height*0.05,
  }
}); 