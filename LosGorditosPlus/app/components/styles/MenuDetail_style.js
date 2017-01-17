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
  page_title: {
    flex: 1,
    fontSize: 24,
    paddingRight: W_width*0.08,
    paddingTop: 10,
    textAlign: 'center',
    backgroundColor: '#ffc300',
    color: 'white',
  },
  containerMenu: {
    flex: 1,
    width: W_width*0.95,
    margin:9
  },
  img:{
    width: W_width*0.95, 
    height: W_height*0.30,
  },
  rowStyle: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    backgroundColor: 'gray',
    color: 'white',
    width: W_width*0.975,
    padding: 3,
  },
  img_rank: {
    width: W_width*0.25, 
    height: W_height*0.02,
    position: 'absolute',
    right: 12,
  },
  img_share: {
    width: W_width*0.13, 
    height: W_height*0.08,
    position: 'absolute',
    right: 20,
    bottom: 0,
  },
  price: {
    fontSize: 20,
    paddingTop:5,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#ffc300',
    fontWeight: 'bold',
  },
  bottom_a: {
    borderWidth: 3,
    borderColor: '#ffc300',
    marginTop: 5,
    marginRight: 3,
    padding: 2,
    flex: 0.5,
  },
  bottom_a_text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffc300',
    fontWeight: 'bold',
  },
  bottom_b: {
    backgroundColor: '#ffc300',
    marginTop: 5,
    marginLeft: 3,
    padding: 2,
    flex: .5,
  },
  bottom_b_text: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 3,
    color: '#ffffff',
  },
  description: {
    fontSize: 15,
    color: '#494949',
    textAlign: 'justify',
    marginTop: 5,
  },

});