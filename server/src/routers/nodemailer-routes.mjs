import { Router } from "express";
import transporter from "../../config/nodemailer.js";

export const nodemailer = Router();

nodemailer.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ message: "Insufficient Information" });
      return;
    }
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    await transporter.sendMail({
      from: `"${capitalize(name)}" <${process.env.EMAIL}>`,
      to: [process.env.EMAIL],
      subject: `Contacto desde portafolio: ${name}`,
      html: `<h5>Correo de ${name}</h5>
      <p>(${email}) dice: ${message}</p>`,
    });

    await transporter.sendMail({
      from: `${process.env.USER} <${process.env.EMAIL}>`,
      to: email,
      subject: `Formulario de contacto portafolio de ${process.env.USER} - Portfolio Contact Form of ${process.env.USER}`,
      text:"",
      html: `
      <div style="max-width: 600px; margin: auto; padding: 20px; color: #333;">
        <h1 style="color: #007bff; text-align: center; margin-bottom: 20px;">
          < ¡Hola ${capitalize(name)}! / >
        </h1>
      
      <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
        ${process.env.MESSAGE_SP}
      </div>
      
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <h1 style="color: #007bff; text-align: center; margin-bottom: 20px;">
          < Hi ${capitalize(name)}! / >
        </h1>
      <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
        ${process.env.MESSAGE_EN}
      </div>
      
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
      
      <p>Copia de tu mensaje recibido: - Copy of your received message: </p>
      <p><strong>${message}</strong></p>
    </div>
      `,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.log("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
});
