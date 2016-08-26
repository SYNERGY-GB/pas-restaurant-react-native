'use strict'; 
import React, { Component, PropTypes } from 'react'; 
import TabNavigator from 'react-native-tab-navigator';
import {
  View,
  Text,
  Image
} from 'react-native';
import styles from './styles/TabStyle';
import MenuList from './MenuList';
import { Actions } from 'react-native-router-flux';

/**
* Informacion a mostrar segun el tab
*/
var fake_data0 =[{title: 'Pizza con peperoni', price: "4.700 Bsf", img:require('./resources/recursos-48.png'), descripcion: 'Ingredientes: 1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso.'},
                {title: 'Pasta a la Caprese', price: "2.300 Bsf", img:require('./resources/recursos-49.png'), descripcion: 'Ingredientes: 1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso.'},
                {title: 'Pasta a la Caprese', price: "2.300 Bsf", img:require('./resources/recursos-49.png'), descripcion: 'Ingredientes: 1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso.'},
                {last: true},
                ]
var fake_data1 =[{title: 'Principal', price: "4.700 Bsf", img:require('./resources/recursos-48.png'),descripcion: 'Ingredientes: 1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso.'},
                {title: 'Pasta a la Caprese', price: "2.300 Bsf", img:require('./resources/recursos-49.png'),descripcion: 'Ingredientes: 1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso.'},
                {last: true},
                ]
var fake_data2 =[{title: 'Ensaladas', price: "4.700 Bsf", img:require('./resources/recursos-48.png'), descripcion: 'Ingredientes: 1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso.'},
                {title: 'Pasta a la Caprese', price: "2.300 Bsf", img:require('./resources/recursos-49.png'),descripcion: 'Ingredientes: 1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso.'},
                {last: true},
                ]
var fake_data3 =[{title: 'Postres', price: "4.700 Bsf", img:require('./resources/recursos-48.png'), descripcion: 'Ingredientes: 1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso.'},
                {title: 'Pasta a la Caprese', price: "2.300 Bsf", img:require('./resources/recursos-49.png'), descripcion: 'Ingredientes: 1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso.'},
                {last: true},
                ]
var fake_data4 =[{title: 'Bebidas', price: "4.700 Bsf", img:require('./resources/recursos-48.png'), descripcion: 'Ingredientes: 1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso.'},
                {title: 'Pasta a la Caprese', price: "2.300 Bsf", img:require('./resources/recursos-49.png'), descripcion: 'Ingredientes: 1 base para pizza. 100 gr. de pepperoni. 100 gr. de salami. 1 lata de tomate triturado. 100 gr. de queso parmesano rallado. 150 gr. de queso.'},
                {last: true},
                ]

/**
* Clase: TabMenuList
* Pantalla de Lista de Platos, muestra una lista de platos segun la categoria (tab) seleccionada
* props: 
*       selectedTab: Numero del tab seleccionado
*/

class TabMenuList extends Component {

  render() {
    return (
    <View>
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.props.selectedTab === 0}
          renderIcon={() => <Image style={styles.icon} source={require('./resources/1_Icons/recursos-18.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('./resources/1_Icons/recursos-13.png')} />}
          onPress={() => 
                    //Accion para refrescar el contexto actual y cambiar el valor de los props page_title y selectedTab
                    Actions.refresh({page_title: 'favoritos', selectedTab: 0})
                  }>
          {<View/>}
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.props.selectedTab === 1}
          renderIcon={() => <Image style={styles.icon} source={require('./resources/1_Icons/recursos-19.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('./resources/1_Icons/recursos-14.png')} />}
          onPress={() => 
                    //Accion para refrescar el contexto actual y cambiar el valor de los props page_title y selectedTab
                    Actions.refresh({page_title: 'principales', selectedTab: 1})
                  }>
          {<View />}
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.props.selectedTab === 2}
          renderIcon={() => <Image style={styles.icon} source={require('./resources/1_Icons/recursos-20.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('./resources/1_Icons/recursos-15.png')} />}
          onPress={() => 
                    //Accion para refrescar el contexto actual y cambiar el valor de los props page_title y selectedTab
                    Actions.refresh({page_title: 'ensaladas', selectedTab: 2})
                  }
          >
          {<View/>}
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.props.selectedTab === 3}
          renderIcon={() => <Image style={styles.icon} source={require('./resources/1_Icons/recursos-21.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('./resources/1_Icons/recursos-16.png')} />}
          onPress={() => 
                    //Accion para refrescar el contexto actual y cambiar el valor de los props page_title y selectedTab
                    Actions.refresh({page_title: 'postres', selectedTab: 3})
                  }
        >
          {<View/>}
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.props.selectedTab === 4}
          renderIcon={() => <Image style={styles.icon} source={require('./resources/1_Icons/recursos-22.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('./resources/1_Icons/recursos-17.png')} />}
          onPress={() => 
                    //Accion para refrescar el contexto actual y cambiar el valor de los props page_title y selectedTab
                    Actions.refresh({page_title: 'bebidas', selectedTab: 4})
                }
         >
          {<View />}
        </TabNavigator.Item>
      </TabNavigator>
      {
        // Evaluamos el valor del props SelectedTab para indicar que carge la lista de platos con la informacion
        // correspondiente a la categoria seleccionada
        // Nota: Al no estar actualizando el Estado de la Clase MenuList es necesario mandar a renderizar
        // componentes vacios en distintas posiciones para que refresque la lista
        (() => {
        switch (this.props.selectedTab) {
          case 0: return <View >
                            <View/>
                            <MenuList selectedTab={this.props.selectedTab} fake_data={fake_data0}/>
                            <View />
                            <View />
                          </View>;
          case 1: return <View>
                            <View />
                            <View />
                            <MenuList selectedTab={this.props.selectedTab} fake_data={fake_data1}/>
                          </View>;
          case 2: return <View>
                            <View />
                            <View />
                            <View />
                            <MenuList selectedTab={this.props.selectedTab} fake_data={fake_data2}/>
                          </View>;
          case 3: return <View>
                            <View />
                            <View />
                            <View />
                            <View />
                            <View />
                            <MenuList selectedTab={this.props.selectedTab} fake_data={fake_data3}/>
                          </View>;
          case 4: return <View><MenuList selectedTab={this.props.selectedTab} fake_data={fake_data4}/></View>;
          default: return <MenuList selectedTab={this.props.selectedTab} fake_data={fake_data0}/>;
        }
      })()}
      
    </View>
      );
  }
}

//Exportamos la clase
module.exports = TabMenuList;