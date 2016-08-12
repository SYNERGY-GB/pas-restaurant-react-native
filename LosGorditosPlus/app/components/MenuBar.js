'use strict';
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native';
import TabMenuList from './TabMenuList';
import MenuView from './MenuView';
import Location from './Location';
import Drawer from 'react-native-drawer';
import styles from './styles/MenuBar_style';
import { Actions } from 'react-native-router-flux';


class MenuBar extends Component {
  constructor(props){
    super(props);
    this.state={
      drawerOpen: false,
      drawerDisabled: false,
    }
  }
  closeDrawer = () => {
    this._drawer.close()
  }
  openDrawer = () => {
    this._drawer.open()
  }

  render() {
    var bg = this.props.bg ? require('./resources/6_BG/bg2.png') : require('./resources/6_BG/bg.png');
    var title_style = this.props.ts ? styles.container_title : styles.container_title_b
    return (
      <Image style={styles.bg} source={bg} >
        <Drawer
          ref={(ref) => this._drawer = ref}
          type="overlay"
          content={
            <Image style={styles.containerMenu} source={require('./resources/menu.png')}>
              <TouchableOpacity style={styles.menu_icon} onPress={()=>{
                this._drawer.close()
              }}>
                <Image style={styles.menu_icon} source={require('./resources/1_Icons/recursos-01.png')} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.first_button} onPress={()=>{
                Actions.refresh({page_title: null, bg: false, ts: false, selected_page: 0}) ;
                this._drawer.close()
              }}>
                <View style={styles.button_align}>
                  <Image style={styles.img_buttom} source={require('./resources/1_Icons/recursos-02.png')} />
                  <Text style={styles.menu_title}> menu </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={()=>{
                Actions.refresh({page_title: 'Información', bg: true, ts: true, selected_page: 1}) ;
                this._drawer.close()
                }}>
                <View style={styles.button_align}>
                  <Image style={styles.img_buttom} source={require('./resources/1_Icons/recursos-03.png')} />
                  <Text style={styles.menu_title}> información </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={()=>{
                Actions.refresh({page_title: 'Contacto', bg: true, ts: true, selected_page: 2}) ;
                this._drawer.close()
                }}>
                <View style={styles.button_align}>
                  <Image style={styles.img_buttom_2} source={require('./resources/1_Icons/recursos-04.png')} />
                  <Text style={styles.menu_title}> contactar </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={()=>{
                Actions.refresh({page_title: 'Ubicaciones', bg: true, ts: true, selected_page: 3}) ;
                this._drawer.close()
                }}>
                  <View style={styles.button_align}>
                    <Image style={styles.img_buttom_3} source={require('./resources/1_Icons/recursos-05.png')} />
                    <Text style={styles.menu_title}> ubicaciones </Text>
                  </View>
              </TouchableOpacity>
              <Image style={styles.menu_logo}source={require('./resources/3_Logos/menu_logo.png')}/>
            </Image>
          }
          acceptDoubleTap
          onOpen={() => {
            this.setState({drawerOpen: true})
          }}
          onClose={() => {
            this.setState({drawerOpen: false})
          }}
          captureGestures={false}
          tweenDuration={200}
          panThreshold={0.50}
          disabled={this.state.drawerDisabled}
          openDrawerOffset={(viewport) => {
            return 100
          }}
          closedDrawerOffset={() => 0}
          panOpenMask={0.2}
          negotiatePan
          >
            <View style={title_style} >
                <TouchableOpacity style={styles.menu_icon} onPress={()=>{
                  this._drawer.open()
                }}>
                  <Image style={styles.menu_icon} source={require('./resources/1_Icons/recursos-01.png')} />
                </TouchableOpacity>
                <Text style={styles.page_title}> {this.props.page_title} </Text>       
            </View>
            {(() => {
              switch (this.props.selected_page) {
                case 0: return <MenuView />;
                case 1: return <Text>Pantalla de Informacion</Text>;
                case 2: return <Text>Pantalla de Contacto</Text>;
                case 3: return <Text>Pantalla de Ubicacion</Text>;
                case 4: return <TabMenuList selectedTab={ this.props.selectedTab } />
                default: return <MenuView/>;
              }
            })()}
        </Drawer>
      </Image>
    );
  }
}


module.exports = MenuBar;