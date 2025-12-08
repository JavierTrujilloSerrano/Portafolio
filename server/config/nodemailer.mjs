import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

transporter
  .verify()
  .then(() => {
    console.log("Ready for sending emails");
  })
  .catch((error) => console.log(error));

export default transporter;
