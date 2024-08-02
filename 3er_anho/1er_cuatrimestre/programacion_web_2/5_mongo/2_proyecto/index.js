// imports
import express from 'express';
import dotenv from 'dotenv';
import ConectarDB from "./Config/db.js";
import usuarioRouter from './routers/usuarioRouter.js';
import productoRouter from './routers/productoRouter.js';

// config
dotenv.config();

const app = express();
app.use(express.json());
ConectarDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`Escuchando en ${port}`);
});

// routers
app.get('/', (req, res) => {
   res.send(`Estas en Inicio`);
});

app.use('/api/usuarios', usuarioRouter);
app.use('/api/productos', productoRouter);