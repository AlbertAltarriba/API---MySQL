# API - MySQL
Actividad: Diseño de API con base de datos MySQL

Objetivos

En esta actividad vamos a repasar los conceptos básicos de la creación de aplicaciones complejas con ExpressJS, así como los diferentes métodos de interacción sobre bases de datos relacionales con MySQL. 

La diferencia fundamental de este tipo de bases de datos es el uso de SQL para interactuar con la información, así como las posibilidades que nos ofrecen para poder relacionar los distintos tipos de datos entre sí. Estas acciones deben quedar reflejadas dentro del código que generamos y nos deben permitir acceder a nuestra información sin complicaciones.

Pautas de elaboración

Para completar de manera correcta esta actividad vamos a crear un proyecto que nos permita gestionar todos los datos de un proyecto de tipo Blog.

Para ello se deben completar todas las urls que nos permitan interactuar con los posts del blog, así como con los autores que los escriben.

Las pautas a seguir son las siguientes:

-	Definición de las tablas de posts y autores dentro de la base de datos MySQL. 
-	La tabla de posts debe contener los siguientes datos: titulo, descripción, fecha de creación, categoría y una clave externa para asignar el autor de la misma. - La tabla de autores debe contener los siguientes campos: nombre, email, imagen.

Dentro del proyecto Express generado debemos crear todas las urls necesarias para la obtención y creación de los posts y de los autores. La url para cada uno de los modelos debe partir con el prefijo /api

- Cada post recuperado debería ir acompañado de todos los datos del autor de este y no solo del identificador que lo define.

- Se debe definir una url que nos permita recuperar los diferentes posts escritos por un autor en concreto.
