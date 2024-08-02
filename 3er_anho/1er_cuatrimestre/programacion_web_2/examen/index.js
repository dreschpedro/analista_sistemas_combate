// imports
import express from 'express';
import dotenv from 'dotenv';
import ConectarDB from './Config/db.js';
import router from './Routes/Router.js';

// config
const app = express();
dotenv.config();
ConectarDB();

app.use(express.json());
const port = process.env.PORT || 3030;

app.listen(port, () => {
   console.log(`Escuchando en el ${port}`);
});

// Routes
app.get('/', (req, res) => {
   res.send(`Estas en Inicio`);
});

app.use('/api/propiedad', router);