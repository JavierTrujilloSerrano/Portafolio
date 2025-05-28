# PROYECTO DE PORTAFOLIO PERSONAL

## Creación de un portafolio en React + Vite con Node.js

### Resumen del proyecto

El proyecto es una página personal que está creada con varias "card" donde puedes poner datos importantes sobre uno mismo.

### Propósito

El propósito es crear una plantilla para poder descargarla y realizar las modificaciones que a uno le interesen. Su principal propósito es exponer tu información y darte a conocer, aunque no quita que se pueda usar para diferentes propósitos.

### Público objetivo y beneficios

El objetivo es facilitar la creación de un portafolio personal a través de esta plantilla. También dispones de otras funcionalidades que benefician al usuario como la función de cambio de idioma, servicio de mensajería con Nodemailer (Gmail), posibilidad de personalización de SVG con props y posibilidad de descarga de archivo CV.

### Herramientas utilizadas

Usamos en el proyecto React + Vite, Bootstrap, Axios, Zod, CORS, Dotenv, Nodemailer, Express y Vitest.

### Modificaciones

#### Recursos Multimedia

En la carpeta `cliente/src/assets` se encuentran los recursos multimedia, como la foto de perfil, el favicon y el GIF del nombre. Este efecto se puede realizar con código o mediante un GIF.

#### Validaciones del Formulario

En la carpeta `cliente/src/utils` se han implementado las validaciones para el formulario utilizando Zod.

#### Configuración del Servidor

En la carpeta `servidor` se ha incluido un archivo `.env.example` de ejemplo para configurar el correo electrónico de envío a la persona que nos contacte y una copia para nosotros.

#### Descarga del Currículum

En la carpeta `servidor/public` debe colocarse el archivo PDF con el currículum para que se pueda descargar.

#### Tratamiento de Datos (Política de Privacidad)

Al estar en la Unión Europea, es necesario cumplir con la normativa de tratamiento de datos. Se ha creado un hook para mostrar un popup con el texto de la legislación. Este texto se puede modificar en la sección `static/translations`. Puedes personalizarlo para incluir tus datos.

### Personalización del Proyecto

- Puedes estilizar el proyecto como desees.
- En `servidor/.env.example` puedes añadir:
  - `MESSAGE_SP`: Mensaje HTML en español.
  - `MESSAGE_EN`: Mensaje HTML en inglés.

Ejemplo:

```html
<h3>¡Muchas gracias por contactarme!</h3>
<p>Agradezco tu interés.</p>
<p>Tengo experiencia en el desarrollo web.</p>
<p>Si deseas conversar responde este mensaje.</p>
<h3>¡Hasta la próxima!</h3>
```

- En la carpeta `cliente/static`, puedes editar los textos de la web. Usa `translationExample.js` como ejemplo, luego elimínalo y renombra el nuevo archivo para que tenga efecto.
- En `client/index.html` puedes personalizar el título del sitio editando la etiqueta `<title>`.

### Configuración Básica para Nodemailer

Si solo deseas enviar correos electrónicos desde tu cuenta de Gmail utilizando Nodemailer, puedes seguir estos pasos básicos:

#### Habilitar la Autenticación de Dos Factores (2FA)

1. Ve a tu cuenta de Google: [https://myaccount.google.com](https://myaccount.google.com)
2. En el menú de la izquierda, selecciona **Seguridad**.
3. Busca **Autenticación de dos pasos** y haz clic en **Activar**.

#### Generar una Contraseña de Aplicación

1. Una vez habilitada la 2FA, vuelve a la sección de **Seguridad**.
2. Busca **Contraseñas de aplicaciones**.
3. Selecciona "Mail" como aplicación y "Otros (Nombre personalizado)" como dispositivo.
4. Escribe un nombre como "Nodemailer" y haz clic en **Generar**.
5. Copia la contraseña generada y guárdala de manera segura.

### Licencia

![CC-BY-SA](./client/src/assets/by-sa-image.svg)

Este trabajo está bajo una licencia [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/deed.es).
