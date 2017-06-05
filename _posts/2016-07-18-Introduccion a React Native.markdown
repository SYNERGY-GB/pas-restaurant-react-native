---
layout: post
title:  "Introducción a React Native"
date:   2016-07-18 13:52:50 -0430
categories: jekyll update
permalink: /introducción/
---

Es un framework de desarrollo móvil nativo (iOS, Android) elaborado por Facebook para la construcción del frontEnd de las aplicaciones por medio de componentes nativos.

***Características:***

- Basado en React.
- Corre en una instancia incrustada en el JavaScript Core dentro de la aplicación.
- Se considera un framework ligero.
- Similar a Java y Objective-C.
- Basado en la elaboración y reutilización de componentes.
- Fácil de implementar.
- Estructura MVVM.

***Documentación:***

- El soporte dado por Facebook no es muy activo, su portal web otorga información básica de ReactNative.
- La comunidad es muy activa y en crecimiento.
- La mayoría de las librerías son ofrecidas por la comunidad.

***Desempeño***

- Manejo estados en los componentes.
- Utiliza un Virtual DOM para comparar los cambios de estados de los componentes entre el VDOM y el DOM.
- Ante un cambio no recarga el componente per se sino la sección que presenta un cambio.
- Reutilización de componentes.
- Crea componentes "nativos".

***Integración del Código***

- Uso de los Props para el manejo de parámetros entre componentes.
- Componentes propios para las plataformas iOS y Android.
- Se puede indicar acciones según la plataforma en que se encuentre la app.
- Con el uso de props se pueden modificar los componentes.
- Se importan los componentes a utilizar.
- Se debe manejar el renderizado de la orientación

***Incidencias***

- Depende de la Comunidad.
- Las librerías al ser elaboradas por terceros, no hay garantía de su funcionalidad o compatibilidad con otros componentes.
- "Bugs" en la compatibilidad iOS/Android.
- La librería de dimensiones no funciona correctamente en Android.


***Conceptos base:***

 - *Datos para el Control de componente:*
	 - Props: Son los parámetros de creación que se le pueden pasar a un componente para personalizarlo, se puede indicar si el props es obligatorio definiendo el PropType. Casos: 
	 	<br><br>
	 	1) Parámetros con valor <Componente parametro={valor}>: No es necesario definirlos.
	 	<br><br>
	 	2) Parámetros que representan funciones <Componente parametro={funcion}>: Permite pasar funciones del componente Padre al componente Hijo para la comunicación entre estos, es necesario que se defina el PropType.
		
		```
		class ComponenteHijo extends Component {
			static propTypes = {
		    	parametro: PropTypes.func,
		  	};
		```

	 - State: Son los datos (variables) del componente que cambian en el ciclo de vida del componente e indican el cambio al Virtual DOM.
<br>
<br>
 - *Style:* Es un prop por defecto que indica el diseño del componente, es decir, es el Cascade Style Sheet (CSS) para componentes.
	 - Flexbox: Es una variable de estilo que permite indicar el espacio que va a ocupar un componente según el espacio disponible en la vista.
	 - Orientación: La orientación entre componentes es de una columna y varias filas (como una pila) si quisiéramos colocar uno al lado del otro requeriríamos indicar, en el estilo del contenedor, la dirección del flex por fila (flexDirection: 'row').
<br>
<br>
 - *Funcionamiento del Virtual DOM:* React genera una copia del DOM en memoria (Virtual DOM) para generar los cambios en este y comparar las propiedades de la copia en memoria con las del DOM y así aplicar los cambios exclusivamente en las partes que difieren de esta manera en vez de renderizar todo el DOM en cada cambio solo renderiza las secciones que sufrieron algún cambio permitiendo a la aplicación mantener un alto desempeño al manejar una gran cantidad de información.
<br>
<br>
 - *Flux:* Es la librería que propone Facebook para implementar la navegación por un enrutamiento de escenas. Las principales acciones son:
	- Actions.Refresh(<PARAMS>): Refresca la escena actual y en caso de pasar parametros actualiza los props.
	- Actions.Pop(): Deshace la ultima accion flux.
	- Actions.<Key_Route>(<PARAMS>): Invoca la escena respectiva a la llave (definida en el enrutamiento) y la sobrepone a la escena actual.
<br>
<br>
- Contenedor: Todo componente que encierre entre sus etiquetas a otros componentes.