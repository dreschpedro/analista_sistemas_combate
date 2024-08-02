// crear la conexion
const express = require('express');

const app = express();

//middlewares
app.use(express.json());

const users = [
    { id: 1, nombre: "Gabriela", sexo: "f" },
    { id: 2, nombre: "Soledad", sexo: "f" },
    { id: 3, nombre: "Sergio", sexo: "m" }
];


/** peticiones HTTP
 * get  --  permite solicitar datos
 * post  --  permite enviar datos
 * put  --  permite modificar datos
 * delete  --  permite borrar datos
 * */

/** res  -- respuesta
 * res.send('mensaje')
 *  res.status(error de status).send('mensaje')
 * 
 */

/** req  --  requerimiento
 *  req.query
 *  req.params
 *  req.body
 */

// requerimientos 

app.get('/', (req, res) => {
    res.send('ESTOY EN LA RAIZ DEL PROYECTO');
});

app.get('/users/', (req, res) => {
    res.status(200).send('Estoy en USUARIOS');

});

app.get('/users/:id', (req, res) => {
    res.send(`el parametro enviado en el id es: ${req.params.id}`);
});



app.get('/users/:year/:month/:day/', (req, res) => {
    res.send(`Los parámentros que se enviaron son: <br> año: ${req.params.year} <br> mes: ${req.params.month} <br> día: ${req.params.day}`);
});


// con el array de objetos
app.get('/api/users/array', (req, res) => {
    res.send(users);
});

app.get('/api/array/:id', (req, res) => {

    const userFound = users.find(user => user.id === parseInt(req.params.id));
    if (!userFound) res.status(404).send('Usuario no encontrado');
    res.send(userFound);

});

app.get('/api/user-sexo/', (req, res) => {

    const userForSexo = users.filter(user => user.sexo === req.query.sexo);
    res.send(userForSexo);
});

/** require POST */

app.post('/api/datos/', (req, res) => {
    res.send(`los datos recibidos por post son nombre: ${req.body.nombre} y sexo: ${req.body.sexo}`);
});

app.post('/api/users', (req, res) => {
    if (req.body.nombre === '' || req.body.sexo === '') {
        res.status(404).send('debe ingresar los datos correctamente');
    } else {
        const user = {
            id: users.length + 1,
            nombre: req.body.nombre,
            sexo: req.body.sexo
        };

        users.push(user);
        console.log(users);
    }


});

app.put('/api/users/:id', (req, res) => {
    const userFound = users.find(user => user.id === parseInt(req.params.id));

    if (!userFound) res.status(404).send('Usuario no encontrado');


    if (req.body.nombre === '' || req.body.sexo === '') {
        res.status(404).send('debe ingresar los datos correctamente');
    } else {
        const userUpdate = userFound;
        userUpdate.nombre = req.body.nombre,
            userUpdate.sexo = req.body.sexo;
    }


    console.log(users);
});

app.delete('/api/users/:id', (req, res) => {
    const userFound = users.find(user => user.id === parseInt(req.params.id));
    if (!userFound) res.status(404).send('Usuario no encontrado');
    users.splice(userFound.id - 1, 1);
});


/** Funciones* */

// const findUser= (id) => {
//     return users.find(user => user.id === parseInt(id))}

/** SERVIDOR*/

app.listen(3001, () => {
    console.log(`Escuchando en el puerto 3001`);
})

