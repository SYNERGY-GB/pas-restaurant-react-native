'use strict';
import React, { PropTypes, Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native';
import styles from './styles/MenuBar_style';
import { Actions } from 'react-native-router-flux';

class DrawerContent extends Component {
    static propTypes = {
      onClose: PropTypes.func,
  };
	render (){
		return(
			<Image style={styles.containerMenu} source={require('./resources/menu.png')}>
              <TouchableOpacity style={styles.menu_icon} onPress={()=>{
                this.props.onClose()
              }}>
                <Image style={styles.menu_icon} source={require('./resources/1_Icons/recursos-01.png')} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.first_button} onPress={()=>{
                Actions.refresh({page_title: null, bg: false, ts: false, selected_page: 0}) ;
                this.props.onClose()
              }}>
                <View style={styles.button_align}>
                  <Image style={styles.img_buttom} source={require('./resources/1_Icons/recursos-02.png')} />
                  <Text style={styles.menu_title}> menu </Text>
                  {this.props.selected_page === 0 ? 
                    <Image style={styles.img_buttom_4} source={require('./resources/1_Icons/recursos-06.png')} />
                    : 
                    this.props.selected_page === 4 ? 
                    <Image style={styles.img_buttom_4} source={require('./resources/1_Icons/recursos-06.png')} />
                    : 
                    <Text/>}
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={()=>{
                Actions.refresh({page_title: 'información', bg: true, ts: true, selected_page: 1}) ;
                this.props.onClose()
                }}>
                <View style={styles.button_align}>
                  <Image style={styles.img_buttom} source={require('./resources/1_Icons/recursos-03.png')} />
                  <Text style={styles.menu_title}> información </Text>
                  {this.props.selected_page ===1 ? 
                    <Image style={styles.img_buttom_4} source={require('./resources/1_Icons/recursos-06.png')} />
                    : 
                    <Text/>}
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={()=>{
                Actions.refresh({page_title: 'contacto', bg: true, ts: true, selected_page: 2}) ;
                this.props.onClose()
                }}>
                <View style={styles.button_align}>
                  <Image style={styles.img_buttom_2} source={require('./resources/1_Icons/recursos-04.png')} />
                  <Text style={styles.menu_title}> contactar </Text>
                  {this.props.selected_page ===2 ? 
                    <Image style={styles.img_buttom_4} source={require('./resources/1_Icons/recursos-06.png')} />
                    : 
                    <Text/>}
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={()=>{
                Actions.refresh({page_title: 'ubicaciones', bg: true, ts: true, selected_page: 3}) ;
                this.props.onClose()
                }}>
                  <View style={styles.button_align}>
                    <Image style={styles.img_buttom_3} source={require('./resources/1_Icons/recursos-05.png')} />
                    <Text style={styles.menu_title}> ubicaciones </Text>
                    {this.props.selected_page ===3 ? 
                    <Image style={styles.img_buttom_4} source={require('./resources/1_Icons/recursos-06.png')} />
                    : 
                    <Text/>}
                  </View>
              </TouchableOpacity>
              <Image style={styles.menu_logo}source={require('./resources/3_Logos/menu_logo.png')}/>
            </Image>
		);
	}
}

module.exports = DrawerContent;