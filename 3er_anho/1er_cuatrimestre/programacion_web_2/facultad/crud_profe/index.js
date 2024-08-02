import express from 'express';
import dotenv from 'dotenv';
import coneccionDB from './config/db.js';
import routerLibro from './routers/libroRouter.js';
import routerUsuario from './routers/usuarioRouter.js'
dotenv.config();


const app=express();
const port= process.env.PORT || 3000;
app.use(express.json());

coneccionDB();

app.use('/api/usuarios', routerUsuario)
app.use('/api/libros/', routerLibro)



app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`)
})
