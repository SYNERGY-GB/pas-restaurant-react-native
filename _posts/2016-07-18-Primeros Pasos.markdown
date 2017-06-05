---
layout: post
title: Primeros Pasos
date:   2016-07-18 13:52:50 -0430
categories: jekyll update
permalink: /primeros_pasos/
---

 ***1. Ambiente***
 
 React Native en un framework muy ligero y su instalación se basa en instalar una librería javascript de [Node](https://nodejs.org/en/). Se siguió el proceso de instalación de la página oficial [React-Native Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)
 
Se puede utilizar cualquier editor de texto para el desarrollo de la aplicación.

***2. Crear una aplicación***

Abrimos el terminal o consola y nos dirigimos al directorio donde queremos crear la aplicación y ejecutamos el siguiente comando:

```
  react-native init MyAppName

  cd MyAppName
```

 Si nos dirigimos adentro de la carpeta de la aplicación podremos ver la estructura que ha montado el framework
 
<img style="display: block;
    margin-left: auto;
    margin-right: auto;" src="../Images/Archivos_Iniciales.png">

 - Android: Contiene la información para compilar y ejecutar en Android.
 - iOS: Contiene la información para compilar y ejecutar en iOS.
 - node_modules: Carpeta estándar para los módulos de node que utiliza el proyecto.
 - index.android.js: Es el archivo de inicio de la aplicación en Android, conocido como root y contiene la vista react de la aplicación.
 - index.ios.js: Es el archivo de inicio de la aplicación en iOS, conocido como root y contiene la vista react de la aplicación.
 - package.json: Lista de módulos de node que tiene el proyecto.

Para correr la aplicación en nuestro emulador nos colocamos dentro de la carpeta "MyAppName" y ejecutamos siguiente comando:

  (Para iOS)
    react-native run-ios
    
  (Para Android)
    react-native run-android

<img style="display: block;
    margin-left: auto;
    margin-right: auto;" src="../Images/Primera_Vista.png">

Habilitamos la opción para "Hot Reloading" para editar los archivos y ver los cambios que se producen, nos dirigimos al dispositivo y procedemos a presionar ⌘+D (iOS) o la tecla de Menú del dispositivo (Android).

***3. Código Inicial***

 Si abrimos los archivos index.android.js e index.ios.js podemos observar que contienen el mismo segmento de código debido a React Native sigue la filosofía "Aprende una vez, escribe donde sea". Si nos preguntamos ?por que dos rutas de inicio diferentes?, React Native no renderiza las vistas según la plataforma en que se encuentre sino que permite al desarrollador elaborar las Vistas que utilizaran cada plataforma reutilizando las capas de Modelo y Modelo de Vista. También se debe a que ofrece componentes únicos para las plataformas como el TabBarIOS y el Menu-Side-Android que facilitan la implementación de la navegación en la aplicación pero no funcionan en ambos sistemas, cabe acotar que se puede generar el diseño de la aplicación utilizando componentes generales llevando a la elaboración de un único código en las vistas.

Veamos el código 

```
// Importamos la libertaria React 
import React, { Component } from 'react';

// Importamos los elementos que se utilizaran en el componente
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//Declaración de la clase MyAppName que extiende de Component (React)
class MyAppName extends Component {
/*
 Segmento para la declaración de funciones 
*/

// Renderización del componente
  render() {
    return (
    // Declaramos el contenedor principal con el elemento View y le pasamos el 
    // parámetro (props)) de estilo "style". Es equivalente a la etiqueta <Div> en HTML
      <View style={styles.container}>
      // Se declaran los elementos para colocar texto Text con el prop de 
      // estilo respectivo.
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

// Creamos la Hoja de Estilo en la variable constante styles
const styles = StyleSheet.create({
// Definimos el estilo container que ocupara todo el espacio disponible (flex: 1),
// en este caso como solo se esta trabajando con un View toma toda la pantalla 
// con items y texto centralizados y un color de fondo.
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  // Definición del estilo de texto "welcome" que mostrara el texto alineado 
  // en el centro con un margen de 10 y tamaño de letra 20
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
// Definición del estilo de texto "instructions" que mostrara el texto alineado  
// en el centro con un margen bajo de 5 y se modifica el color del texto
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//Indicamos que la aplicación iniciara con el componente MyAppName
AppRegistry.registerComponent('MyAppName', () => MyAppName);
```