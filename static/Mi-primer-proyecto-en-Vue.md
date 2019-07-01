# Mi primer proyecto Vue.js

### Antes de empezar

Vue.js es un framework de Javascript, por lo tanto es necesario tener un conocimiento básico sobre este lenguaje. Tiene una comunidad muy grande, por lo que encontraremos muchísimas librerías, documentación y tutoriales que nos ayudarán a empezar con nuestro proyecto. También debemos saber manejar muy bien la terminal.

Antes de empezar con Vue tenemos que tener instalado [Node.js](https://nodejs.org/es/) con npm. Para verificar esto podemos escribir en terminal:

```sh
➜ node -v
v10.16.0

```

Si obtenemos la versión vamos al siguiente paso sino escribimos _apt install nodejs_ aunque les recomiendo ir al [package manager](https://nodejs.org/es/download/package-manager/) de Node y descargar según su versión de Linux.

Luego de asegurarnos que tenemos Node.js instalado vamos a instalar [vue-cli](https://cli.vuejs.org/), el cual es una herramienta que viene con muchas funciones para empezar un proyecto en Vue y gestionarlos. Para instalar escribimos en terminal:

```sh
➜ npm install -g @vue/cli
```

```sh
➜ vue --version
3.8.4
```

En este artículo intentaré enseñarte lo que yo aprendí. Haré un explicación básica de como funciona basado en la [documentación oficial](https://vuejs.org) y de los cursos online de [Platzi](https://platzi.com/c/seba/) y otros en Internet. Mostraré como instalo y empiezo un proyecto en Vue.

# Empezando!

Usaré Vuetify para estilizar y Nuxt porque quiero un Server Side Rendering (SSR). Con esto tengo la ventaja de optimizar la busqueda y tener una mejor experiencia con el usuario al agilizar la respuesta.

Buscando un poco en Github encontré dos proyecto iniciales. Uno de [Vuetify con Nuxt](https://github.com/vuetifyjs/nuxt) y otro de [Nuxt con Vuetify](https://github.com/nuxt-community/vuetify-module). Personalmente me gusta mas el primero porque tiene mas rate y lo hizo el creador de Vuetify.
Asi que escribo una por una en terminal:

```sh
$ vue init vuetifyjs/nuxt my-project # instalamos el temaplte
$ cd my-project # entramos a la carpeta del proyecto
$ npm i # install dependencies
$ npm run dev # corremos la app en modo desarrollo
```

Despues del # es un comentario. Luego de correr el último comando nos dara una dirección con _localhost:port_ para acceder con el navegador web. Entramos y vemos la vista del template que instalamos. Si modificamos cualquier archivo del proyecto la vista como algún título o algun color el navegador se actualizará automáticamente y podemos ver los cambios en vivo.

Si tenemos algún error se mostrará en la vista de la página y de la consola donde corrimos _npm run dev_. También lo podríamos ver en la consola del navegador.

### ¿Qué sigue?

Ahora sigue personalizar. Primero borrar lo que no vamos a usar del template que iniciamos. Algunas cosas como la toolbar donde esta el menu lo dejo pero le modifico algunos estilos. Después agregar elementos de Vuetify. Por último usar las herramientas de Nuxt para hacer llamados a una base de datos.

Aprendimos como iniciar un proyecto de Vue con ayuda de vue-cli usando un template ya preparado para desarrollar una app entera.

Llegando a esta parte nos encontramos ante un mundo de posibilidades inmensas. Como puede ser la creación de una app que solucione muchos de los grandes problemas de la humanidad. O puede ser lo contrario, depende de nosotros nada mas.

Solo te dí la puerta de entrada. En el siguiente artículo explicaré como funciona Vue.
