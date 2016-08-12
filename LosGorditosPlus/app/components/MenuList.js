'use strict';
import React, { Component } from 'react';
import {
    Image,
	StyleSheet,
    Text,
    ListView,
    TouchableOpacity,
    ActivityIndicator,
	View
} from 'react-native';
import styles from './styles/MenuList_style';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import { Actions } from 'react-native-router-flux';

class MenuList extends Component {
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state= {
            dataSource: ds.cloneWithRows(this.props.fake_data)
        };
    }

  changeView(value, data) {
    if (value === 0) {
      Actions.pageTwo({text: data.price})
    }
    else {
      Actions.pageTwo({text: data.title})
    }
  }

  renderMenu(data){
    return (
      <View style={styles.containerMenu}>
        <Image style={styles.img} source={data.img}/>
        <View style={styles.bg}>
          <View style={styles.rowStyle}>
            <Text style={styles.title}>{data.title}</Text>    
              <Menu style={styles.img_menu} onSelect={(value) => this.changeView(value,data)}>
                <MenuTrigger style={styles.img_menu}>
                  <Image style={styles.img_menu} source={require('./resources/1_Icons/recursos-07.png')} />
                </MenuTrigger>
                <MenuOptions optionsContainerStyle={styles.dropdownOptions}>
                  <MenuOption  value={0}>
                      <Text style={styles.dropText}>Detalle</Text>
                  </MenuOption>
                  <MenuOption value={1}>
                    <Text style={styles.dropText}>Pedir</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>           
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.price}>{data.price}</Text>
            <Image style={styles.img_menu} source={require('./resources/1_Icons/recursos-08.png')}/>
          </View>
        </View>
      </View>
    );
  }
  
  render() { 
    return (
      <MenuContext style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => this.renderMenu(data)}/>
      </MenuContext>
    );
  }
}
 
module.exports = MenuList;