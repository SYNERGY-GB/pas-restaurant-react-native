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
  containerMenu: {
    flex: 1,
    width: W_width, 
    marginTop: 1,
    padding: 3,
  },
  img:{
    width: W_width*0.98047, 
    height: W_height*0.22,
  },
  last:{
    height: W_height*0.5,
  },
  bg: {
    backgroundColor: 'gray',
  },
  rowStyle: {
    paddingLeft: 3,
    flexDirection: 'row',
    marginTop: 1,
  },
  title: {
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
  },
  img_menu: {
    width: W_width*0.065, 
    height: W_height*0.04,
    position: 'absolute',
    right: 3,
  },
  img_rank: {
    width: W_width*0.40, 
    height: W_height*0.03,
    position: 'absolute',
    right: 3,
  },
  price: {
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#ffc300',
    paddingBottom:3,
  },
  dropdownOptions: {
    marginTop: 30,
    borderRadius: 5,
    borderColor: '#ffc300',
    borderWidth: 2,
    width: W_width*0.98,
    shadowColor: 'black', 
    shadowOpacity: 20, 
    shadowRadius: 100,
  },
  dropText: {
    fontSize: 22,
    padding: 2
  }
});