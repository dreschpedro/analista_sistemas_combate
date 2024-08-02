const express = require('express');

const app = express();
// console.log(express);

puerto = 3030;

app.listen(puerto, () => console.log(`Sever corriendo en el puerto ${puerto}`));

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/login', (req, res) => {
    res.send('Vas a Iniciar Sesion');
});



let producto = {
    tipoProducto: null,
    precio: null,
    cantidad: null
};
app.get('/producto/agregar', (req, res) => {
    res.send(producto);
});