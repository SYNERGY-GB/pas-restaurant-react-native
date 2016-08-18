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
  },
  accordion: {
    margin: 10,
  },
  headerText: {
    marginTop:3,
    marginBottom: 2,
    fontSize: 22,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#ffc300',
  },
  headerText_drop: {
    fontSize: 22,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#ffc300',
  },
  touch_drop: {
    marginTop:3,
    marginBottom: 2,
    position: 'absolute',
    top: 5,
    left: 4,
  },
  header_off: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#ffc300',
    padding: 5,
  },
  header_on: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },

  buttom: {
    width: W_width*0.04, 
    height: W_height*0.03,
    position: 'absolute',
    right: 14,
    marginTop: 10,
  },
  text: {
    margin: 10,
    fontSize: 20,
    color: '#494949',

  },
});