# API

## Tecnologías usadas
[![PHP](https://img.shields.io/badge/PHP-8.1-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://www.php.net/) [![Laravel](https://img.shields.io/badge/Laravel-9.0-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com/) [![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/) [![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/) [![Mongo Compass](https://img.shields.io/badge/Mongo%20Compass-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/products/compass) [![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/cloud/atlas) [![Render](https://img.shields.io/badge/Render-000000?style=for-the-badge&logo=render&logoColor=white)](https://render.com/) [![Postman](https://img.shields.io/badge/Postman-10.15-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/) [![Cloudinary](https://img.shields.io/badge/Cloudinary-777BB4?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)



## Ejecutar el proyecto

Este es un proyecto hecho con Laravel, PHP y Mongo DB.  Para ejecutar el proyecto, utilizamos Docker. Sigue los siguientes pasos para levantar el proyecto en tu máquina local.

### Requisitos

Antes de comenzar, asegúrate de tener instalado Docker en tu sistema operativo. Puedes descargarlo desde el sitio web oficial de [Docker](https://www.docker.com/).

**Pasos**

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/No-Country/s9-01-t-php-react.git
   ```

2. Navega hasta la carpeta del proyecto:

   ```bash
   cd backend
   ```

3. Construye la imagen de Docker:

   ```bash
   docker-compose build
   ```

4. Ejecuta el contenedor de Docker:

   ```bash
   docker-compose up
   ```

5. Visita la aplicación en tu navegador:

   ```bash
   http://localhost
   ```
### ¿Qué incluye?
El proyecto incluye las siguientes funcionalidades:

- Autenticación interna y de terceros (con Google) a través de la biblioteca Laravel Socialite.
- Edición y actualización de datos personales por parte de los usuarios en sus perfiles de certificados.
- Generación automática masiva de certificados mediante la carga de datos desde un archivo Excel.
- Pasarela y métodos de pago para la emisión de certificados presentados por la aplicación a través de los servicios proporcionados por Stripe.
- Gestión de usuarios, administración de certificados favoritos y diferentes tipos de suscripción.
- Creación, estructuración y conexión de la base de datos para almacenar los certificados a través de MongoDB.
- Precarga de algunos datos en la base de datos para alimentar el frontend.
- Integración con Cloudinary para almacenamiento de imágenes.
- Despliegue en Render.
### Endpoints

- Autenticación
- Usuarios
- Plantillas
- Logos
- Estudiantes
- Certificados
- Autoridades

Accede a toda la _documentación_ y detalles desde [aquí](https://documenter.getpostman.com/view/26338219/2s93zE2zTy#4fac96fb-925b-445d-a4cc-0e948d27061b).


<hr>

### 🤝 Desarrolladores

|  <img src="https://avatars.githubusercontent.com/u/67226453?v=4" width="130" height="120">  | <img src="https://ca.slack-edge.com/T032Y55Q6VC-U05C292PE5T-2fc9c6242836-512" width="130" height="120">  | <img src="https://ca.slack-edge.com/T032Y55Q6VC-U055HNSNZC0-c4a5215a1474-512" width="130" height="120">  | <img src="https://avatars.githubusercontent.com/u/120438097?s=400&u=9c838630ee47f4db3bfeb728d062ad4bfb2586a9&v=4" width="130" height="120">|
|:-:|:-:|:-:|:-:|
| **Cristian Gomez** <img src="https://i.ibb.co/Ln0vhg4/AR.png"> | **Joaquín Salazar** <img src="https://i.ibb.co/Ln0vhg4/AR.png">| **Lorenzo Rueda** <img src="https://i.ibb.co/276DbnR/VE.png"> | **Max Cereceda** <img src="https://i.ibb.co/sj22SZS/PE.png"> |
| [![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/cristiangomezdev) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cristiangomezdev/) | [![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/JoaquinJS18) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jes%C3%BAs-joaqu%C3%ADn-salazar-888668261/) | [![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/zightcode) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lorenzo-rueda-582758263/) | [![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/cereceda1991) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/maxcereceda/) |
