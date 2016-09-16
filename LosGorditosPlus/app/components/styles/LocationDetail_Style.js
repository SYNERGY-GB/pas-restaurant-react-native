import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

const W_height = Dimensions.get('window').height;
const W_width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  menu_icon: {
    padding: 10,
    paddingLeft: 5,
    width: W_width*0.05, 
    height: W_height*0.04,
  },
  page_title: {
    flex: 1,
    fontSize: 24,
    paddingRight: W_width*0.08,
    paddingTop: 10,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
  },
  bg:{
    width: W_width,
    height: W_height,
    flex: 1
  },
  container_title: {
    flexDirection: 'row',
    paddingTop:10,
    height: W_height*0.095,
    backgroundColor: '#ffc300',
  },
  container: {
    marginTop: 5,
    marginBottom: 10,
    height: W_height*0.33,
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
  inf_container: {
    marginTop: 13,
    marginLeft:10,
    marginRight:10,
    paddingRight: 15,
    paddingLeft: 15,
    borderWidth: 2,
    borderColor: '#ffc300',
  },
  row: {
    flexDirection: 'row',
    paddingLeft: 15,
  },
  text_title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#494949',
  },
  text_subtitle: {
    fontWeight: 'bold',
    color: '#494949',
    paddingLeft: 10,
    width: 70,
  },
  text: {
    color: '#494949',
    paddingLeft: 10
  },

});