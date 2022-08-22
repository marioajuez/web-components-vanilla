
## COMPONENTES WEB - VANILLA

- [Introducción](#1)
- [¿ Qué problemas resuelven los Web Components ?](#2)
- [¿ Que son los componentes web ?](#3)
- [Beneficios](#4)
- [APIS WEB COMPONENTS](#4)
  - [HTML5](#5.2)
    - [STANDARD](#5.2)
    - [ETIQUETAS PERSONALIZADAS](#5.2)
  - [Custom Elements](#5.1)
  - [template](#5.2)
  - [Shadow dom](#5.3)
  - [ES MODULES](#5.4)
  - [Manejo de estados](#5.4)
- [Ciclo de vida](#5)

- [slots](#6)
    - [content slots](#6.1)
    - [multi content slots](#6.2)
    - [atributos](#6.3)
- [estilos en components](#7)
  - [:host](#7.1)
  - [::slotted](#7.2)
  - [CSS custom propierties](#7.3)

- [integrar componentes de terceros](#8)
- [Proyectos](#9)

  

## <a id="1"></a> Introducción

¡Genial!, no he ahondado mucho en el tema de los Web Components, pero hasta donde tengo conocimiento, su filosofía es similar a la de Vue o React Components, pero con la ventaja de que estos son nativos de JavaScript, prácticamente podemos crear nuestros propios componentes dentro de un proyecto HTML 😄.

Les dejo un enlace documentando más acerca de esto (en español):

- [Mas información](https://developer.mozilla.org/es/docs/Web/Web_Components)

## <a id="2"></a>Problema

  Los problemas estan relacionados a los distintos ecosistemas o frameworks (React, Angular, Vue), puesto que que estos no pueden coexistir entre sí, por lo que los Web Components al estar fundamentados en JavaScript puro, brinda más compatabilidad.

  Web components son encapsulados de código, que coexisten entre si

  El desarrollo web se hace más complicado
  Actualmente se tiene un ecosistema gigante de JavaScript
  Varias tecnologías no pueden co existir en un mismo proyecto a la vez, como ser angular con react
  Entonces debemos elegir bien un stack de tecnologías
  Para solucionar este problema existen Web Components
  Usan estándares web, para conseguir el mismo resultado e incluso mejor
  No necesitamos cargar ninguna librería para obtener una arquitectura más escalable.

  RESUMEN: El desarrollo web actualmente se está volviendo complicado debido a que existen muchas tecnologías que si bien facilitan el desarrollo no están dejando usar otras para un mismo proyecto, es ahi donde entran los webs components para obtener el mismo resultado con web api’s

## <a id="3"></a>¿Que son los componentes web?

RESUMEN: El desarrollo web actualmente se está volviendo complicado debido a que existen muchas tecnologías que si bien facilitan el desarrollo no están dejando usar otras para un mismo proyecto, es ahi donde entran los webs components para obtener el mismo resultado con web api’s

## <a id="3"></a>apis

  - <a id="5.1"></a> Custom Elements
  - <a id="5.2"></a> template
  - <a id="5.3"></a> Shadow dom

## <a id="4"></a> Beneficios

REUTILIZACIÓN
Don’t Repeat Yourself (you only have to build it once)

LEGIBILIDAD
Hace más fácil a los demás entender el código. Mejor semántica.

MANTENIBILIDAD
Cada uno de los componentes puede ser escrito y probado de forma individual, sin comprometer la aplicación completa.

INTEROPERABILIDAD
Los frameworks y librerías no están hechos para coexistir entre ellos. Los Web Components sí.

CONSISTENCIA
Gracias a la naturaleza reutilizable e interoperable de los Web Components ya no tendrás que crear los mismos componentes en diferentes frameworks o librerías.

De hecho, los beneficios son similares a los de cualquier framework o librería (exceptuando la interoperabilidad 👀).
.

Reutilización
Legibilidad
Mantenibilidad
Interoperabilidad
Consistencia


```javascript
const prueba = '';

```


- ### Slots
  - 
  - 

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
## <a id="5"></a> Ciclo de vida



  constructor: Directamente desde el JavaScript Engine, el constructor nos servirá para definir y cargar todas las variables en memoria que necesitemos, es mala práctica pintar el componente aquí
  connectedCallback: Cuando el componente ya está pintado dentro del DOM ypodemos hacer uso de él.
  attributeChangedCallback: Cuando un atributo de nuestro componente cambia
  disconnectedCallback: Cuando el componente se “destruye” o se quita del DOM
  adoptedCallback: Cuando el componente es movido a un nuevo DOM, básicamente cuando es pintado desde un iframe por ejemplo 😄
  .
  Más información sobre este lifecycle aquí (en español):

  - [Mas información](https://developer.mozilla.org/es/docs/Web/Web_Components/Using_custom_elements#usando_callbacks_de_ciclo_de_vida)


  
<p align="center">
    <img src="./source\life-cicle-web-components.jpg" width="500" title="Ciclo de vida"/>
</p>

  

  







