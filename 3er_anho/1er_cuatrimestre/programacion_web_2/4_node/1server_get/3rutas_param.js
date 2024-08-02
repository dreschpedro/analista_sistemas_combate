const express = require('express');
const app = express();

app.listen(3030, () => console.log('Escuchando en el puerto 3030'));

app.get('/', (req, res) => {
    res.send('hola');
});

app.get('/productos/:id', (req, res) => {
    let id_producto = req.params.id;
    // res.send(`Estas en el producto ${id_producto}`);

    // const productos = ['Leche', 'Yogurt', 'Queso', 'Agua mineral', 'Jugo de naranja', 'Gaseosa', 'Detergente líquido', 'Desinfectante', 'Limpiavidrios', 'Jabón en polvo', 'Manzanas', 'Peras', 'Bananas', 'Naranjas', 'Papas',];
    const productos = [
        { id: 1, nombre: 'Leche' },
        { id: 2, nombre: 'Yogurt' },
        { id: 3, nombre: 'Queso' },
        { id: 4, nombre: 'Jugo de naranja' },
        { id: 5, nombre: 'Agua mineral' },
        { id: 6, nombre: 'Refresco' },
        { id: 7, nombre: 'Detergente líquido' },
        { id: 8, nombre: 'Desinfectante' },
        { id: 9, nombre: 'Limpiavidrios' },
        { id: 10, nombre: 'Jabón en polvo' },
        { id: 11, nombre: 'Manzanas' },
        { id: 12, nombre: 'Peras' },
        { id: 13, nombre: 'Naranjas' },
        { id: 14, nombre: 'Bananas' },
        { id: 15, nombre: 'Papas' },
    ];


    let mensaje = '';
    let encontrado = false;

    productos.forEach(function (producto) {
        if (id_producto == producto.id) {
            encontrado = true;
            mensaje = `Estas en el producto ${producto.nombre}`;
        } else {
            encontrado = encontrado;
            mensaje = `No tenemos ese producto`;
        }

    });
    res.send(mensaje);
});

app.get('/productos/:id/comentarios/:idCom?', (req, res) => {
    let id_comentario = req.params.idCom;
    res.send(`Estas en el producto ${id_comentario}`);
});
