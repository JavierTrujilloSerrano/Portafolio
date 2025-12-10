import express from "express";
import cors from "cors";
import { brevoRouter } from "./routers/brevo-routes.mjs";

export const PORT = process.env.PORT || 4000;
export const server = express();

server.use(
  cors({
    origin: "https://portafolio-yf9x.onrender.com",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

server.options("*", cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.send("Servidor backend online");
});
server.use("/contact", brevoRouter);
server.use("/cv", express.static("public/javierTrujilloCV.pdf"));
