import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

const W_height = Dimensions.get('window').height;
const W_width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  containerMenu: {
    flex: 1,
    width: W_width*0.65, 
    height: W_height,
  },
  button: {
    flexDirection: 'row',
    paddingTop: 15, 
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'white',
    padding: 10,
  },
  menu_icon: {
    padding: 10,
    paddingLeft: 5,
    width: W_width*0.08,
    height: W_height*0.04,
  },
  container_title: {
    flexDirection: 'row',
    height: W_height*0.085,
    backgroundColor: '#ffc300',
  },
  container_title_b: {
    flexDirection: 'row',
    height: W_height*0.085,
  },
  first_button: {
    padding: 10,
    paddingLeft: 5,
    marginTop: 30, 
    borderBottomWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
    marginLeft: 5
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
  },
  img_buttom: {
    width: W_width*0.11, 
    height: W_height*0.06,
  },
  img_buttom_2: {
    width: W_width*0.11, 
    height: W_height*0.05,
  },
  img_buttom_3: {
    marginLeft: 6.5,
    width: W_width*0.06, 
    height: W_height*0.06,
  },
  menu_title: {
    fontSize: 19,
    marginLeft: 5,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
  },
  button_align: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu_logo: {
    width: W_width*0.55, 
    height: W_height*0.098,
    margin: 15,
    position: 'absolute',
    bottom: 25
  }

});