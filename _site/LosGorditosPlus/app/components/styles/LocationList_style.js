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
    margin: 5,
  },
  location_container: {
  	flex:1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#b2b2b2',
    marginTop: 5,
    paddingBottom:5,
  },
  last_container: {
    flex:1,
    flexDirection: 'row',
    marginTop: 5,
    paddingBottom:5,
  },
  location: {
    fontSize: 18,
    color: '#494949',
  },
  text:{
  	fontSize: 15,
    color: '#494949',
  },
  img: {
  	height: W_height*0.06,
  	width: W_width*0.07,
  	position: 'absolute',
  	right: 15,
  }

});