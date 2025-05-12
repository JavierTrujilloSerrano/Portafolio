
# PROYECTO DE PORTAFOLIO PERSONAL

## Creación de un portafolio en react + vite con node.js

### Resumen del proyecto

El proyecto es una página personal que está creada con varias "card" donde puedes poner datos importantes sobre uno mismo.

### Propósito

El propósito es crear una plantilla para poder descargarla y realizar las modificaciones que a uno le interesen. Su principal propósito es exponer tu información y darte a conocer, aunque no quita que se pueda usar para diferentes propósitos.

### Público objetivo y beneficios

El objetivo es facilitar la creación de un portafolio personal a traves de esta plantilla. También dispones de otras funcionalidades que venefician al usuario como la función de cambio de idioma, servicio de mensajeria con nodemail (gmail), posibilidad de personalización de svg con props y posibilidad de descarga de archivo cv

### Herramientas utilizadas
Usamos en el proyecto React + vite, bootstrap, axios, zod, cors, dotenv, nodemailer, express y vitest

### Modificaciones
## Recursos Multimedia
En la carpeta `cliente/src/assets` se encuentran los recursos multimedia, como la foto de perfil, el favicon y el GIF del nombre. Este efecto se puede realizar con código o mediante un GIF.

## Validaciones del Formulario
En la carpeta `cliente/src/utils` se han implementado las validaciones para el formulario utilizando Zod.

## Configuración del Servidor
En la carpeta `servidor` se ha incluido un archivo `.env.example` de ejemplo para configurar el correo electrónico de envío a la persona que nos contacte y una copia para nosotros.

## Descarga del Currículum
En la carpeta `servidor/public` debe colocarse el archivo PDF con el currículum para que se pueda descargar.

## Tratamiento de Datos (Política de Privacidad)
Al estar en la Unión Europea, es necesario cumplir con la normativa de tratamiento de datos. Se ha creado un hook para mostrar un popup con el texto de la legislación. Este texto se puede modificar en la sección `static/translations`. Puedes personalizarlo para incluir tus datos.

### Licencia

![CC-BY-SA](./Portafolio/client/src/assets/by-sa.svg)

Este trabajo está bajo una licencia [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/deed.es).