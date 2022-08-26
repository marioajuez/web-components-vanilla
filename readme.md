
## COMPONENTES WEB - VANILLA

<hr>

### Tabla de contenido 

- [Introducción](#1)
- [¿ Qué problemas resuelven los Web Components ?](#2)
- [¿ Que son los componentes web ?](#3)
- [Beneficios](#4)
- [APIs WEB COMPONENTS](#5)
  - [HTML5](#5.1)
    - [STANDARD](#5.1.1)
    - [ETIQUETAS PERSONALIZADAS](#5.1.1)
  - [Custom Elements](#5.1.2)
  - [template](#5.2)
  - [Shadow dom](#5.3)
  - [ES MODULES](#5.4)
  - [Manejo de datos](#5.5)
    - [content slots](#5.5.1)
    - [multi content slots](#5.5.2)
    - [Atributos](#5.1.3)

- [Ciclo de vida](#5)
- [Slots](#6)
    - [content slots](#6.1)
    - [multi content slots](#6.2)
    - [Atributos](#6.3)
- [Estilos en components](#7)
  - [:host](#7.1)
  - [::slotted](#7.2)
  - [CSS custom propierties](#7.3)
- [Integrar componentes de terceros](#8)
- [Proyectos](#9)
<hr>

## <a id="1"></a> Introducción

¡Genial!, no he ahondado mucho en el tema de los Web Components, pero hasta donde tengo conocimiento, su filosofía es similar a la de Vue o React Components, pero con la ventaja de que estos son nativos de JavaScript, prácticamente podemos crear nuestros propios componentes dentro de un proyecto HTML 😄.

Les dejo un enlace documentando más acerca de esto (en español):

- [Mas información](https://developer.mozilla.org/es/docs/Web/Web_Components)

## <a id="2"></a>Problema

  Los problemas estan relacionados a los distintos ecosistemas o frameworks (React, Angular, Vue), puesto que que estos no pueden coexistir entre sí, por lo que los Web Components al estar fundamentados en JavaScript puro, brinda más compatabilidad.

- El desarrollo web se hace más complicado
  - Actualmente se tiene un ecosistema gigante de JavaScript
    - Varias tecnologías no pueden co existir en un mismo proyecto a la vez, como ser angular con react
  - Entonces debemos elegir bien un stack de tecnologías
 - Para solucionar este problema existen Web Components:
    - Usan estándares web, para conseguir el mismo resultado e incluso mejor
    - No necesitamos cargar ninguna librería para obtener una arquitectura más escalable

## <a id="3"></a>¿Que son los componentes web?

 El desarrollo web actualmente se está volviendo complicado debido a que existen muchas tecnologías que si bien facilitan el desarrollo no están dejando usar otras para un mismo proyecto, es ahi donde entran los webs components para obtener el mismo resultado con web api’s

## <a id="4"></a> Beneficios

- **REUTILIZACIÓN**:  Don’t Repeat Yourself (you only have to build it once)

- **LEGIBILIDAD**:  Hace más fácil a los demás entender el código. Mejor semántica.

- **MANTENIBILIDAD**: Cada uno de los componentes puede ser escrito y probado de forma individual, sin comprometer la aplicación completa.

- **INTEROPERABILIDAD**: Los frameworks y librerías no están hechos para coexistir entre ellos. Los Web Components sí.

- **CONSISTENCIA**: Gracias a la naturaleza reutilizable e interoperable de los Web Components ya no tendrás que crear los mismos componentes en diferentes frameworks o librerías.


## <a id="5"></a> APIs de web components
  - <a id="5.1"></a> **HTML5**
    - <a id="5.1.1"></a> **STANDARD**
    - <a id="5.1.2"></a> **ETIQUETAS PERSONALIZADAS**
  ### <a id="5.2"></a> **Custom Elements**

  - **Elementos personalizados autónomos** — estos no heredan de elementos estándar HTML. Se usan estos elementos en una página escribiéndolos literalmente como un elemento HTML nuevo. Por ejemplo <popup-info>, o document.createElement("popup-info").

  - **Elementos preconstruidos personalizados** heredan de elementos HTML básicos. Para crear un elemento de este tipo, tienes que especificar qué elemento extiende (como se verá en los ejemplos de abajo), y se usan escribiendo el nombre del elemento básico, pero añadiendo un atributo (o propiedad) is y dándole como valor el nombre del elemento personalizado que se ha desarrollado. Por ejemplo  ```<p is="word-count"> ```, o  ``` document.createElement("p", { is: "word-count" })  ```.

  Solo para refrescar:

  - **document.createElement**: Crea una nueva etiqueta en memoria
  - **element.setAttribute**: Establece un atributo a alguna etiqueta
  - **element.getAttribute**: Obtiene el atributo de una etiqueta
  - **element.textContent**: Establece el contenido en texto de una etiqueta
  - **element.innerHTML**: Establece el contenido HTML de una etiqueta
  - **element.appendChild**: Inserta esa etiqueta que estaba en memoria al DOM real

    También recordemos que no es buna práctica usar innerHTML 👀

  ### <a id="5.3"></a> **Template**

  Basicamente la API Template nos permite conectar un web component de forma más profesional y organizada. También nos ayuda a clonar los elementos facilmente (Ya que como lo hicimos en la clase anterior el elemento no se clonaba, sino que se pasaba de etiqueta en etiqueta hasta la ultima en ser renderizada) La etiqueta ``` <template>``` 
  
  Es una etiqueta que nos sirve como contenedor de código. Todo lo que escribamos adentro de esta etiqueta no se va a renderizar , sino que hay que activarlo mediante Javascript. El profesor sin embargo no muestra cual es dicho proceso y procede a utilizar una forma distinta. En el siguiente enlace vas a ver cómo se activa desde JS:

  **Escribir y activar el código dentro de la clase** De esta forma estamos armando toda la estructura HTML dentro de Javascript, pero insertandola en la clase y fraccionando el HTML y CSS para más placer.
  
  En este caso, creamos la clase, con su extension y constructor, luego creamos un método que contendrá la estructura HTML (getElement) . Adentro insertamos la variable template que contiene la estructura.

  ``` javascript
  getTemplate() {
        const template = document.createElement('template');
       	template.innerHTML = `
		...(codigo HTML)
	`}

```
En otro metodo (getStyles) todo lo que hacemos es retornar un literal string que contiene el código CSS (si queremos podemos contenerla en una variable, eso es a comodidad del programador).

```javascript
  getStyles() {
              return `...(código CSS)`
      }
```

y luego al final del código de getElement la llamamos de esta forma

``` javascript
${this.getStyles()} 
```

Clonar Elementos

Para clonar el código debemos indicar mediante el método cloneNode que se puede clonar. Para eso invocamos el contenido de getTemplate, y lo anidamos a la clase (que luego al ser invocada en el HTML se convierte en la etiqueta misma)

  ``` javascript
    render() { this.appendChild(this.getTemplate().content.cloneNode(true)) }
  ``` 
Y FINALMENTE…

Invocamos el render

``` javascript
connectedCallback() { this.render(); }
``` 
  - [Mas información](https://developer.mozilla.org/es/docs/Web/Web_Components/Using_custom_elements)


  ### <a id="5.4"></a> **Shadow dom**
  Shadow DOM permite adjuntar arboles DOM ocultos a elementos en el arbol DOM regular — este arbol shadow DOM comienza con un elemento shadow root, debajo del cual se puede adjuntar cualquier elemento que desee, de la misma manera que el DOM normal.
  <hr>
  Hay algunos conceptos de Shadow DOM que deben ser tomados en cuenta:

 **Shadow host**: El nodo regular del DOM al que es atado el shadow DOM.

 **Shadow tree**: El arbol DOM dentro del shadow DOM.

 **Shadow boundary**: El punto en el que el shadow DOM termina y el DOM regular comienza.

 **Shadow root**: El nodo raiz del arbol Shadow.

Cabe destacar que el shadow DOM no es algo nuevo — los exploradores lo han usado por un largo tiempo para encapsular la estructura interna de un elemento. Piensa por ejemplo en un elemento ``` <video>```, con los controles predeterminados del explorador a la vista. Todo lo que ves en el DOM es el elemento ```<video>```, pero este contiene una serie de botones y otros controles dentro de su shadow DOM. Las especificaciones del shadow DOM fueron hechas para que seas capaz de manipular el shadow DOM de tus elementos personalizados.

  - [Mas información](https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM)

  ### <a id="5.5"></a> **Manejo de datos**

  - ### <a id="5.5.1"></a> Content slots
  - ### <a id="5.5.2"></a> Multi content slots
  - ### <a id="5.5.3"></a> Atributos

## <a id="5"></a> Ciclo de vida

  **constructor**: Directamente desde el JavaScript Engine, el constructor nos servirá para definir y cargar todas las variables en memoria que necesitemos, es mala práctica pintar el componente aquí.

  **connectedCallback**: Cuando el componente ya está pintado dentro del DOM ypodemos hacer uso de él.

  **attributeChangedCallback**: Cuando un atributo de nuestro componente cambia.

  **disconnectedCallback**: Cuando el componente se “destruye” o se quita del DOM.

  **adoptedCallback**: Cuando el componente es movido a un nuevo DOM, básicamente cuando es pintado desde un iframe por ejemplo 😄.

  Más información sobre este lifecycle aquí (en español):

  - [Mas información](https://developer.mozilla.org/es/docs/Web/Web_Components/Using_custom_elements#usando_callbacks_de_ciclo_de_vida)

<p align="center">
    <img src="./source\life-cicle-web-components.jpg" width="500" title="Ciclo de vida"/>
</p>

## <a id="6"></a>  Slots
  - ### <a id="6.1"></a> Content slots
  - ### <a id="6.2"></a> Multi content slots
  - ### <a id="6.3"></a> Atributos

## <a id="7"></a>  Estilos en components
  - ### <a id="6.1"></a> :host
  - ### <a id="6.2"></a> ::slotted
  - ### <a id="6.3"></a> CSS custom propierties

## <a id="8"></a>  Integrar componentes de terceros
## <a id="9"></a>  Proyectos


  

  ```text
folder1/
└── folder2/
    ├── folder3/
    │   ├── file1
    │   └── file2
    └── folder4/
        ├── file3
        └── file4
```


``` javascript
const prueba = '';
```







