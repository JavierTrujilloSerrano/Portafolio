import express from "express";
import { brevoRouter } from "./routers/brevo-routes.mjs";

export const PORT = process.env.PORT || 4000;
export const server = express();

const allowedOrigins = "https://portafolio-yf9x.onrender.com";

server.use((req, res, next) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.send("Servidor backend online");
});

server.use("/contact", brevoRouter);

server.use("/cv", express.static("public/javierTrujilloCV.pdf"));
