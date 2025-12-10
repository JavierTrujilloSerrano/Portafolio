## Versión en castellano
---

# PROYECTO DE PORTAFOLIO PERSONAL

## Aquí puedes ver mi portafolio de ejemplo y como modificarlo

[Español](https://portafolio-yf9x.onrender.com)

> **NOTA:** Al estar subida en Render, el servidor puede tener un arranque frío, por lo que debes esperar un momento para que se cargue el CV o se envíe el formulario.

---

### Creación de un portafolio en React + Vite con Node.js

#### Resumen del proyecto

El proyecto es una **página personal** que contiene varias **cards** para mostrar información relevante sobre ti.

---

#### Propósito

El propósito es crear una plantilla para poder descargarla y realizar las modificaciones que a uno le interesen. Su principal propósito es exponer tu información y darte a conocer, aunque no quita que se pueda usar para diferentes propósitos.

---

#### Público objetivo y beneficios

El objetivo es facilitar la creación de un portafolio personal a través de esta plantilla. También dispones de otras funcionalidades que benefician al usuario, como la función de cambio de idioma, servicio de mensajería con Nodemailer (Gmail), posibilidad de personalización de SVG con props y posibilidad de descarga del archivo CV.

---

#### Herramientas utilizadas

**React + Vite**, Bootstrap, Axios, Zod, CORS, Dotenv, Express, **Brevo (antes Nodemailer)**, Vitest.

---

### Modificaciones recientes

#### Cambio de método de envío de emails

**Motivo:**  
Render bloquea las conexiones SMTP en los puertos 25, 465 y 587, por lo que **Gmail + Nodemailer** no funciona desde Render.

**Solución:**  
Se migró a **Brevo** para enviar correos mediante su **API HTTP**, eliminando la dependencia de SMTP y asegurando que los emails lleguen correctamente.

#### Nuevo método usando Brevo
- Crea cuenta https://www.brevo.com
- Saca API Key (menú vertical, pulsar en Transaccional -> Email -> Tiempo real -> Parámetros de la API -> copiar Clave de la API)
- Instala @getbrevo/brevo
- Pega la API Key en .env
- Usa el código para enviar emails
- Revisa en Logs si funciona

#### Actualización de React

**Motivo:**  
La versión anterior presentaba una vulnerabilidad crítica, reportada en **noviembre de 2025 (CVE-2025-XXXXX)**, que permitía **ejecución de scripts maliciosos mediante props**.

**Solución:**  
Actualización a la **versión más reciente de React** para corregir la vulnerabilidad y garantizar seguridad.

---

#### Modificaciones importantes en el proyecto 

- **Recursos Multimedia:** En la carpeta `cliente/src/assets` se encuentran los recursos multimedia, como la foto de perfil, el favicon y el GIF del nombre. Este efecto se puede realizar con código o mediante un GIF.
- **Validaciones del Formulario:** En la carpeta `cliente/src/utils` se han implementado las validaciones para el formulario utilizando Zod.
- **Configuración del Servidor:** En la carpeta `servidor` se ha incluido un archivo `.env.example` de ejemplo para configurar el correo electrónico, la API de Brevo y para poder realizar el envío del correo a la persona que nos contacte, incluyendo una copia para nosotros.
- **Descarga del Currículum:** En la carpeta `servidor/public` debe colocarse el archivo PDF con el currículum para que se pueda descargar.

---

#### PERSONALIZACIÓN DEL PROYECTO

- Puedes estilizar el proyecto como desees.
- En `servidor/.env` puedes añadir:
  - `MESSAGE_SP`: Mensaje HTML en español.
  - `MESSAGE_EN`: Mensaje HTML en inglés.

Ejemplo:

```html
<h3>¡Muchas gracias por contactarme!</h3>
<p>Agradezco tu interés.</p>
<p>Tengo experiencia en el desarrollo web.</p>
<p>Si deseas conversar, responde este mensaje.</p>
<h3>¡Hasta la próxima!</h3>
```
- En la carpeta `cliente/static`, puedes editar los textos de la web. Usa `translationExample.js` como ejemplo, luego elimínalo y renombra el nuevo archivo para que tenga efecto.
- En `client/index.html` puedes personalizar el título del sitio editando la etiqueta `<title>`.
---

## Tratamiento de Datos (Política de Privacidad)

Al estar en la Unión Europea, es necesario cumplir con la normativa de tratamiento de datos. Se ha creado un hook para mostrar un popup con el texto de la legislación. Este texto se puede modificar en la sección `static/translations`. Puedes personalizarlo para incluir tus datos.

---
### Licencia

![CC-BY-SA](./client/src/assets/by-sa-image.svg)

Este trabajo está bajo una licencia [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/deed.es).

---
## ENGLISH VERSION
---
# PERSONAL PORTFOLIO PROJECT

## Here you can see my example portfolio and how to modify it

[Spanish](https://portafolio-yf9x.onrender.com)

> **NOTE:** Since the project is hosted on Render, the server may experience a cold start, so you must wait a moment for the CV to load or for the form to be sent.

---

### Creating a portfolio in React + Vite with Node.js

#### Project summary

The project is a **personal webpage** that contains several **cards** to display relevant information about you.

---

#### Purpose

The purpose is to create a template that can be downloaded and modified according to one's needs. Its main purpose is to expose your information and present yourself, although it can be used for different purposes.

---

#### Target audience and benefits

The goal is to facilitate the creation of a personal portfolio using this template. You also have other features available that benefit the user, such as a language-switching function, messaging service with Nodemailer (Gmail), the ability to customize SVG via props, and the ability to download the CV file.

---

#### Tools used

**React + Vite**, Bootstrap, Axios, Zod, CORS, Dotenv, Express, **Brevo (formerly Nodemailer)**, Vitest.

---

### Recent changes

#### Change of email sending method

**Reason:**  
Render blocks SMTP connections on ports 25, 465, and 587, so **Gmail + Nodemailer** does not work from Render.

**Solution:**  
It was migrated to **Brevo** to send emails through its **HTTP API**, removing dependency on SMTP and ensuring that emails are delivered correctly.

#### New method using Brevo

- Create an account at https://www.brevo.com  
- Get an API Key (left-side menu → Transactional → Email → Real-time → API Parameters → copy the API Key)  
- Install @getbrevo/brevo  
- Paste the API Key into `.env`  
- Use the code to send emails  
- Check Logs to confirm it works  

#### React update

**Reason:**  
The previous version had a critical vulnerability reported in **November 2025 (CVE-2025-XXXXX)**, which allowed **execution of malicious scripts through props**.

**Solution:**  
Updated to the **latest version of React** to fix the vulnerability and ensure security.

---

#### Important changes in the project

- **Multimedia Resources:** In the folder `cliente/src/assets` you will find multimedia assets such as the profile photo, favicon, and the animated name GIF. This effect can be created with code or with a GIF.
- **Form Validation:** In the folder `cliente/src/utils`, the form validations have been implemented using Zod.
- **Server Configuration:** In the `servidor` folder, an example `.env.example` file is included to configure the email, Brevo API, and to enable sending emails to the person who contacts us, including a copy for ourselves.
- **Curriculum Download:** In the folder `servidor/public`, the PDF file containing the curriculum must be placed so it can be downloaded.

---

#### PROJECT CUSTOMIZATION

- You can style the project as you like.
- In `servidor/.env`, you can add:
  - `MESSAGE_SP`: HTML message in Spanish.
  - `MESSAGE_EN`: HTML message in English.

Example:

```html
<h3>Thank you very much for contacting me!</h3>
<p>I appreciate your interest.</p>
<p>I have experience in web development.</p>
<p>If you want to talk, just reply to this message.</p>
<h3>See you soon!</h3>
```
- In the cliente/static folder, you can edit the website texts. Use translationExample.js as a reference, then delete it and rename the new file so it takes effect.
- In client/index.html, you can customize the site title by editing the <title> tag.

## Data Processing (Privacy Policy)

Since this project is located within the European Union, compliance with data protection regulations is required. A hook has been created to display a popup with the legal text. This text can be modified in the static/translations section. You can customize it to include your own information.

### License

![CC-BY-SA](./client/src/assets/by-sa-image.svg)

This work is under a [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/deed.en).