# Backend Prueba Tecnica Gana Energia

<!-- PROJECT LOGO -->

<p align="center">
  <img width="600" height="480" src="https://tarifasgasluz.com/sites/tarifasgasluz.com/files/images/logo-ganaenergia_0.png">
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenidos</summary>
  <ol>
    <li>
      <a href="#sobre-el-proyecto">Sobre el proyecto</a>
      <ul>
        <li><a href="#hecho-con">Hecho con</a></li>
      </ul>
    </li>
    <li>
      <ul>
        <li><a href="#installacion">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
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

Este proyecto tiene su cliente en otro repositorio a continuación dejo su link: [Frontend](https://github.com/Dubesor22/frontend--gana)

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
3. hacer correr el servidor
   ```sh
   asegurate de estar en la carpeta del proyecto.
   npm run dev
   ```

el Proyecto esta Actualmente con la base de datos en mi Mongo atlas y corriendo el servidor en local en el puerto 8080.

<p align="right">(<a href="#top">back to top</a>)</p>

## Testing

He usado Postman para probar cada uno de los Endpoints con un resultado positivo para cada uno de ellos.

Documentación de la API, endpoints:

[https://documenter.getpostman.com/view/21013501/2s8ZDVZNoK](https://documenter.getpostman.com/view/21013501/2s8ZDVZNoK)

<p align="center">
  <img width="480" height="320" src="https://www.sngular.com/wp-content/uploads/2021/12/postman-logo-vert-2018.jpg">
</p>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## Licencia

Este programa es Open Source y cualquiera puede usarlo, se agradece mención a su creador.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contacto

David Ubeda - [gitHub](https://github.com/dubesor22)

Contacto personal - [linkedIn](https://www.linkedin.com/in/dubesor22/)

Link del proyecto: [Repo](https://github.com/dubesor22/backend-gana)

<p align="right">(<a href="#top">back to top</a>)</p>

## Agradecimientos

Quiero dar las gracias a gana energía por darme la oportunidad de participar en su proceso de selección, me hizo mucha ilusión que contactaran conmigo para este puesto de trabajo, ya que es el stack que más me gusta y suelo trabajar.

- [Gana Energía](https://www.ganaenergia.com/)
