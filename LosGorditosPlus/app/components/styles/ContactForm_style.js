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
    marginTop: 10 ,
    marginRight: 20,
    marginLeft: 20,
    flex: 1,
    alignItems: 'center',
  },
  label: {
    borderBottomWidth: 2,
    borderColor: '#ffc300',
    marginTop: 10,
  },
  text_input_a: {
    height: W_height*0.05, 
    width: W_width*0.90,
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#494949',
  },
  label_b: {
    borderWidth: 2,
    borderColor: '#ffc300',
    marginTop: 20,
  },
  text_input_b: {
    height: W_height*0.40, 
    width: W_width*0.89,
    marginRight: 20,
    padding: 5,
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#494949',
  },
  bottom_b: {
    backgroundColor: '#ffc300',
    marginTop: 15,
  },
  bottom_b_text: {
    fontSize: 22,
    textAlign: 'center',
    padding: 5,
    paddingLeft: W_width*0.15,
    paddingRight: W_width*0.15,
    color: 'white',
    fontWeight: 'bold',
  },

});