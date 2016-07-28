---
layout: post
title:  "Introducción a React Native"
date:   2016-07-18 13:52:50 -0430
categories: jekyll update
permalink: /introducción/
---

Es un framework de desarrollo móvil nativo (iOS, Android) elaborado por Facebook para la construcción del frontEnd de las aplicaciones por medio de componentes nativos.

***Características:***

 - Esta basado en la librería javascript [React.js](https://facebook.github.io/react/)
	- Mantiene la velocidad de renderizado de vistas por medio del Virtual DOM que genera React para marcar los elementos que han sufrido algún cambio para renderizar solo estos en lugar del componente entero.
	- Uso de componentes.
 - Compatibilidad con las sintaxis de javascript [ECMAScript](https://tc39.github.io/ecma262/) ES5, ES6 y con [JVx - Enterprise Application Framework](http://www.sibvisions.com/jvx)
 - Corre en una instancia incrustada en el JavaScript Core dentro de la aplicación.
 - Diseño orientado a componentes y a la arquitectura [Model View View-Model (MVVM)](https://msdn.microsoft.com/en-us/library/hh848246.aspx)
 - Se considera un framework ligero
 - Similar a Java y Objective-C



***Conceptos base:***

 - *Datos para el Control de componente:*
	 - Props: Son los parámetros de creación que se le pueden pasar a un componente para personalizarlo. Permite traspasar funciones del componente Padre al componente Hijo para la comunicación entre estos.
	 - State: Son los datos (variables) del componente que cambian en el ciclo de vida del componente e indican el cambio al Virtual DOM.
<p></p>
 - *Style:* Es un prop por defecto que indica el diseño del componente, es decir, es el Cascade Style Sheet (CSS) para componentes.
	 - Flexbox: Es una variable de estilo que permite indicar el espacio que va a ocupar un componente según el espacio disponible en la vista.
<p></p>
 - *Funcionamiento del Virtual DOM:* React genera una copia del DOM en memoria (Virtual DOM) para generar los cambios en este y comparar las propiedades de la copia en memoria con las del DOM y así aplicar los cambios exclusivamente en las partes que difieren de esta manera en vez de renderizar todo el DOM en cada cambio solo renderiza las secciones que sufrieron algún cambio permitiendo a la aplicación mantener un alto desempeño al manejar una gran cantidad de información.