import { Router } from "express";
import brevo from "../../config/brevo.mjs";

export const brevoRouter = Router();

brevoRouter.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ message: "Insufficient Information" });
    return;
  }
  const escapeHTML = (str) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  try {
    await brevo.sendTransacEmail({
      sender: { name: process.env.USER, email: process.env.BREVO_EMAIL },
      to: [{ email: process.env.EMAIL }],
      replyTo: { email },
      subject: `Contacto desde portafolio: ${name}`,
      htmlContent: `<h5>Correo de ${name}</h5>
      <p>(${email}) dice: ${escapeHTML(message)}</p>`,
    });

    await brevo.sendTransacEmail({
      sender: { name: process.env.USER, email: process.env.BREVO_EMAIL },
      to: [{ email }],
      subject: `Formulario de contacto portafolio de ${process.env.USER} - Portfolio Contact Form of ${process.env.USER}`,
      htmlContent: `<html>
              <main style="max-width: 600px; margin: auto; padding: 20px; color: #333;">
                <h1 style="color: #007bff; text-align: center; margin-bottom: 20px;">
                  &lt; ¡Hola ${capitalize(name)}! / &gt;
                </h1>
                <section style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
                  ${process.env.MESSAGE_SP}
                </section>
              
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <h1 style="color: #007bff; text-align: center; margin-bottom: 20px;">
                  &lt; Hi ${capitalize(name)}! / &gt;
                </h1>
                <section style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
                  ${process.env.MESSAGE_EN}
                </section>

                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <p><strong>Mensaje enviado / Your message:</strong></p>
                <blockquote style="background: #eee; padding: 10px; border-left: 4px solid #007bff;">
                  ${escapeHTML(message)}
                </blockquote>
              </main>
            </html>`,

      text: `¡Hola ${capitalize(name)}!
              ${process.env.MESSAGE_SP}
                  
              ---
                  
              Hi ${capitalize(name)}!
                  
              ${process.env.MESSAGE_EN}
                  
              ---
                  
              Mensaje enviado - Your message:
              ${message}
              Si deseas dejar de recibir estos correos, envía un correo a ${
                process.env.EMAIL
              } con el asunto "Unsubscribe".`,

      headers: {
        "List-Unsubscribe": `<mailto:${process.env.EMAIL}?subject=Unsubscribe>`,
      },
    });

    res.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email: " + error.message });
  }
});
