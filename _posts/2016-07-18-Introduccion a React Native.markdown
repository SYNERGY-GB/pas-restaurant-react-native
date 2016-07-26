---
layout: post
title:  "Introduccion a React Native"
date:   2016-07-18 13:52:50 -0430
categories: jekyll update
permalink: /introduccion/
---

Es un framework de desarrollo movil nativo (iOS, Android) elaborado por Facebook para la construcción del frontOffice de las aplicaciones por medio de componentes nativos.

***Características:***

 - Esta basado en la libreria javascript React.js
	- Mantiene la velocidad de renderizado de vistas por medio del Virtual DOM que genera React por cada componente para marcar los elementos que han surgido algún cambio para renderizar solo estos en lugar del componente entero. 
 - Compatibilidad con las sintaxis de javascript ES5, ES6 y JVX
 - Corre en una instancia incrustada en el JavaScript Core dentro de la aplicación.
 - Diseno orientado a componentes y a la arquitectura Model View View-Model (MVVM)
 - Se considera un framework ligero
 - Similar a Java y Objective-C


***Conceptos bases:***

 - Datos para el Control de componente:
	 - Props: Son los parámetros de creación que se le pueden pasar a un componente para personalizarlo. Permite traspasar funciones del componente Padre al componente Hijo para la comunicación entre estos.
	 - State: Son los datos (variables) del componente que cambian en el ciclo de vida del componente e indican el cambio al Virtual DOM.
 - Style: Es un prop por defecto que indica el diseño del componente, es decir, es el Cascade Style Sheet (CSS) para componentes.
	 - Flexbox: Es una variable de estilo que permite indicar el espacio que va a ocupar un componente según el espacio disponible en la vista.