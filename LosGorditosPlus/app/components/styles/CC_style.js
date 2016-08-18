import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

const W_height = Dimensions.get('window').height;
const W_width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  inf_container: {
    marginTop: 5,
    marginBottom:5,
  },
  row: {
    flexDirection: 'row',
  },
  text_subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#494949',
    width: 70,
  },
  text: {
    fontSize: 16,
    color: '#494949',
    paddingLeft: 10
  },
  bottom_b: {
    backgroundColor: '#ffc300',
    marginTop: 8,
    width: W_width * 0.45,
    marginLeft: W_width*0.23,
  },
  bottom_b_text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    padding: 5,
  },
});