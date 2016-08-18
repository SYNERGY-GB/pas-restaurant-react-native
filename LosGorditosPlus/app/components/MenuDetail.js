import React, { Component } from 'react';
import { View,ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/MenuDetail_style';
import { Actions } from 'react-native-router-flux';

export default class MenuDetail extends Component {
  render() {
  return (
  	<Image style={styles.bg} source={require('./resources/6_BG/bg2.png')} >
	    <View style={styles.container_title} >
	        <TouchableOpacity style={styles.menu_icon} onPress={() => 
                    Actions.pop()
                  }>
	          <Image style={styles.menu_icon} source={require('./resources/1_Icons/recursos-10.png')} />
	        </TouchableOpacity>
	        <Text style={styles.page_title}>detalle</Text>       
     	</View>
      <ScrollView style={styles.containerMenu}>
        <Image style={styles.img} source={this.props.plato.img}/>
        <View style={styles.rowStyle}>
          <View >
            <Text style={styles.title}>{this.props.plato.title}</Text>    
            <Text style={styles.price}>{this.props.plato.price}</Text>     
          </View>
          <View>
            <Image style={styles.img_rank} source={require('./resources/1_Icons/recursos-08.png')}/>  
            <Image style={styles.img_share} source={require('./resources/1_Icons/recursos-28.png')}/>          
          </View> 
        </View>
        <View style={styles.rowStyle}>
          <TouchableOpacity style={styles.bottom_a} onPress={() => 
                    Actions.pop()
                  }>
            <Text style={styles.bottom_a_text}>Cambiar Plato</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottom_b}>
            <Text style={styles.bottom_b_text}>Pedir</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{this.props.plato.descripcion}</Text>
      </ScrollView>


    </Image>
  );
}
}