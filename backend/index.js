import express from "express";
import dotenv from "dotenv";

import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;


conectarDB();

app.use("/api/usuarios",usuarioRoutes);

console.log("Pedacho de nachi!");

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}.`);
});