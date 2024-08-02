const express = require('express');
const app = express();
const port = 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/public/formulario.html');
});

app.post('/registro', (req, res) => {
   const nombre = req.body.nombre;
   const apellido = req.body.apellido;
   const edad = req.body.edad;
   const celular = req.body.celular;
   const paisNacimiento = req.body.paisNacimiento;
   const paisResidencia = req.body.paisResidencia;

   res.send(`
   <h1>Registro Exitoso</h1>
   <p>Nombre: ${nombre}</p>
   <p>Apellido: ${apellido}</p>
   <p>Edad: ${edad}</p>
   <p>Número de Celular: ${celular}</p>
   <p>País de Nacimiento: ${paisNacimiento}</p>
   <p>País de Residencia: ${paisResidencia}</p>
   <a href="/">Volver al Formulario de Registro</a>
   `);
});

app.listen(port, () => {
   console.log(`Servidor Express escuchando en el puerto ${port}`);
});
