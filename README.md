# PROYECTO DE PORTAFOLIO PERSONAL

## Creación de un portafolio en React + Vite con Node.js

### Resumen del proyecto

Este proyecto es una página personal creada con varias "cards" donde puedes mostrar información relevante sobre ti mismo.

### Propósito

El objetivo es ofrecer una plantilla personalizable que puedas descargar y modificar según tus necesidades. Su función principal es ayudarte a exponer tu información y darte a conocer, aunque también puede adaptarse a otros propósitos.

### Público objetivo y beneficios

Esta plantilla facilita la creación de un portafolio personal, incluyendo funcionalidades que benefician al usuario como:

- Cambio de idioma (translations).
- Servicio de mensajería con Nodemailer (Gmail).
- Personalización de SVGs mediante props.
- Posibilidad de descargar el archivo CV en PDF.

---

### Herramientas utilizadas

Este proyecto utiliza:

- **Frontend:** React + Vite, Bootstrap, Axios, Zod
- **Backend:** Express, Cors, Dotenv, Nodemailer
- **Testing:** Vitest

---

### Modificaciones destacadas

#### Recursos Multimedia

Ubicados en `cliente/src/assets`. Aquí puedes añadir tu foto de perfil, favicon y el GIF del nombre (opcional).

#### Validaciones del Formulario

Se han implementado validaciones con **Zod** en `cliente/src/utils`.

#### Configuración del Servidor

En la carpeta `servidor` se incluye un archivo `.env.example` que puedes completar con tus datos. Esto configura:

- Tu correo para recibir mensajes.
- Los mensajes automáticos de respuesta en español (`MESSAGE_SP`) e inglés (`MESSAGE_EN`).

Ejemplo de `MESSAGE_SP` (HTML):

```html
<h3>¡Muchas gracias por contactarme!</h3>
<p>Agradezco tu interés.</p>
<p>Tengo experiencia en el desarrollo web.</p>
<p>Si deseas conversar, responde a este mensaje.</p>
<h3>¡Hasta la próxima!</h3>
```

> Estos mensajes se usan en `nodemailer.mjs` y `nodemailer-router.mjs`.

#### Traducciones y textos de la web

En `cliente/static`, puedes personalizar los textos de la web. Hay un archivo de ejemplo llamado `translationExample.js`. Modifícalo y renómbralo como `translation.js` para que tenga efecto.

#### Descarga del Currículum

Debes colocar tu archivo PDF en `servidor/public` para que esté disponible desde el frontend.

#### Política de Privacidad (RGPD)

Se incluye un hook para mostrar un popup con la política de privacidad, necesario si estás en la Unión Europea. El texto está en `static/translations` y es totalmente editable.

---

### Personalización visual

Para estilar el portafolio a tu gusto, sigue estos pasos:

- Añade tus archivos multimedia en `cliente/src/assets`.
- Cambia el título de la pestaña en `cliente/index.html`, modificando la etiqueta `<title>` con el nombre de tu portafolio.
- Personaliza los mensajes de respuesta y las traducciones como se explicó más arriba.

---

### Licencia

![CC-BY-SA](./client/src/assets/by-sa-image.svg)

Este trabajo está bajo una licencia [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/deed.es).
