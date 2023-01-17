# Backend Prueba Tecnica Gana Energia

<!-- PROJECT LOGO -->

<p align="center">
  <img width="640" height="480" src="https://tarifasgasluz.com/sites/tarifasgasluz.com/files/images/logo-ganaenergia_0.png">
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenidos</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre el proyecto</a>
      <ul>
        <li><a href="#built-with">Hecho con</a></li>
      </ul>
    </li>
    <li>
      <ul>
        <li><a href="#installation">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#usage">Uso</a></li>
    <li><a href="#roadmap">Mapa de contenidos</a></li>
    <li><a href="#license">Licencia</a></li>
    <li><a href="#contact">Contacto</a></li>
    <li><a href="#acknowledgments">Conocimientos adquiridos</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Sobre el proyecto

Este proyecto es una prueba técnica para Gana Energía, en la cual se pide crear una API web que permita servir datos a un front, en este caso particular la API es un CRUD de contratos, y a su vez tiene un endpoint que te permite introducir un codigo postal y te retorna la ciudad al cual pertenece.

El ejercicio pedía:
Desarrollar dos contenedores:
1 - Mostrar una tabla con un listado de contratos
2 - Formulario para dar de alta y modificar los datos de los contratos

crear una tabla para introducir estos datos, con los campos requeridos en su mayoria.

"En el back debes realizar los endpoints de la API que usas en el front, se desarrollará en
Express y debe tener una conexión local a MongoDB".

esta es la lista de endpoints minimos que se pedian:

/getlocalidad : obtiene un listado con los nombres de la localidad a partir del código
postal
/addcontract : añade los datos del contrato.
/modifycontract : modifica el contrato.
/deletecontract : marca el contrato para que posteriormente se borre.
/listcontracts : listado de contratos.

### Desarrollado con

- [Node.js](https://node.org/)
- [Mongo](https://www.mongodb.com/)
- [Postman](https://www.postman.com/)

## Paquetes Instalados

- [express](https://www.npmjs.com/package/express)
- [dotEnv](https://www.npmjs.com/package/dotenv)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [nodemon](https://www.npmjs.com/package/nodemon) como dependecia de desarollo.

### Instalación

1. Clonar el repositorio
   ```sh
   git clone https://github.com/Dubesor22/backend-gana
   ```
2. Instalar paquetes NPM
   ```sh
   npm install
   ```

el Proyecto esta Actualmente con la base de datos en mi Mongo atlas y corriendo el servidor en local en el puerto 8080.

<p align="right">(<a href="#top">back to top</a>)</p>
