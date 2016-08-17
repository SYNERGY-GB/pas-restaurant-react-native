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
  img_container: {
    marginTop: 3,
    height: W_height*0.28,
    backgroundColor: '#ffc300',
    padding: 30,
  },
  logo: {
    width: W_width*0.83, 
    height: W_height*0.15,
  },
  accordion: {
    margin: 13,
  },
  headerText: {
    marginTop:3,
    marginBottom: 2,
    fontSize: 22,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#ffc300',
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
  content_text: {
    flex: 1,
    fontSize: 15,
    color: '#494949',
  },
  buttom: {
    width: W_width*0.04, 
    height: W_height*0.03,
    position: 'absolute',
    right: 14,
    marginTop: 10,
  }
});