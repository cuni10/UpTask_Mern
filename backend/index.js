import express from "express";
import dotenv from "dotenv";

import conectarDB from "./config/db.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;


conectarDB();

console.log("Pedacho de nachi!");

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}.`);
});