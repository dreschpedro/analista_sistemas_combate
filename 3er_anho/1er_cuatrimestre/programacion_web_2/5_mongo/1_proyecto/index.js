// imports
import express, { json } from 'express';
import dotenv from 'dotenv';
import usuarioRouter from './routers/usuarioRouter.js';

// config
dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`Escuchando en ${port}`);
});

// routers
app.get('/', (req, res) => {
   res.send(`Estas en Inicio`);
});

app.use('/api/usuarios', usuarioRouter);